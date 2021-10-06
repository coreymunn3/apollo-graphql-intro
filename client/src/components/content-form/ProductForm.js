import { useState, useEffect } from 'react';
import { Stack, Flex } from '@chakra-ui/layout';
import { FormField, FormSelect, FormSwitch, TypeToAdd } from '../form-elements';
import Loading from '../loading';
import { Button } from '@chakra-ui/button';
import { useQuery } from '@apollo/client';
import { queries } from '../../graphql';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const ProductForm = ({ productId }) => {
  // get categories for select field options
  const {
    data: catData,
    loading: catLoading,
    error: catError,
  } = useQuery(queries.categories);

  // get products
  const {
    data: prodData,
    loading: prodLoading,
    error: prodError,
  } = useQuery(queries.productById, {
    variables: {
      productId,
    },
  });
  // console.log(prodData);

  // format category data
  const [categoryOptions, setCategoryOptions] = useState([]);
  useEffect(() => {
    if (!catLoading & !catError) {
      const formattedData = catData.categories.map((cat) => ({
        id: cat.id,
        name: cat.categoryName,
      }));
      setCategoryOptions(formattedData);
    }
  }, [catData]);

  // generate initial state
  const emptyInitialState = {
    name: '',
    slug: '',
    image: '',
    description: [''],
    rating: 0,
    price: 0,
    onSale: false,
    salePrice: 0,
    stock: 0,
    category: '',
  };
  // format product data into initial state if exists
  const [productInitialState, setProductInitialState] = useState({});
  useEffect(() => {
    if (!prodLoading && !prodError) {
      const { category, __typename, ...other } = prodData.product;
      setProductInitialState({
        ...productInitialState,
        ...other,
        category: category.id,
      });
    }
  }, [prodData, prodLoading, prodError]);

  console.log(productInitialState);

  const productSchema = Yup.object().shape({
    name: Yup.string().required(),
    slug: Yup.string().required(),
    image: Yup.string().required(),
    description: Yup.array(),
    rating: Yup.number().min(0).max(5),
    price: Yup.number().required().min(0),
    stock: Yup.number().min(0),
    onSale: Yup.boolean(),
    salePrice: Yup.number().min(0),
    category: Yup.string().required(),
  });

  if (prodLoading) {
    return <Loading />;
  }
  return (
    <Formik
      initialValues={productId ? productInitialState : emptyInitialState}
      enableReinitialize={true}
      validationSchema={productSchema}
      onSubmit={(values, actions) => {
        console.log('Submitting');
        console.log(values);
        actions.setSubmitting(false);
        return;
      }}
    >
      {({ values, ...form }) => {
        console.log(values);
        return (
          <Form>
            <Stack maxW='500px' margin='auto' spacing={2}>
              <FormField name='name' label={'Name'} required={true} />
              <FormField name='slug' label={'Slug'} required={true} />
              <FormField name='image' label={'Image Link'} required={true} />
              <TypeToAdd name='description' label='Description Bullet Points' />
              <FormField name='rating' label={'Product Rating (out of 5)'} />
              <FormField name='price' label={'Price'} />
              <Flex direction='row'>
                <FormSwitch name='onSale' label={'On Sale?'} />
                {values.onSale && (
                  <FormField name='salePrice' label={'Sale Price'} />
                )}
              </Flex>
              <FormField name='stock' label={'Num In Stock Currently'} />
              <FormSelect
                name='category'
                label={'Select Category'}
                required={true}
                options={categoryOptions}
              />
              <Button
                variant='primary-dark'
                type='submit'
                mt={4}
                isLoading={form.isSubmitting}
              >
                {productId ? 'Update Product' : 'Submit'}
              </Button>
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
};
export default ProductForm;
