import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Stack, Flex } from '@chakra-ui/layout';
import { FormField, FormSelect, FormSwitch, TypeToAdd } from '../form-elements';
import Loading from '../loading';
import { Button } from '@chakra-ui/button';
import { useQuery, useMutation } from '@apollo/client';
import { queries, mutations } from '../../graphql';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const ProductForm = ({ productId }) => {
  const history = useHistory();
  // get categories for select field options
  const {
    data: catData,
    loading: catLoading,
    error: catError,
  } = useQuery(queries.categoryQueries.allCategories);

  // get products info for edit
  const {
    data: prodData,
    loading: prodLoading,
    error: prodError,
  } = useQuery(queries.productQueries.productById, {
    variables: {
      productId,
    },
  });

  // mutate products
  const [updateProduct, updateProductResult] = useMutation(
    mutations.productMutations.updateProduct
  );

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

  // generate initial state (used if not updating)
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
  // format product data into initial state if exists (used when updating)
  const [productInitialState, setProductInitialState] = useState({});
  useEffect(() => {
    if (!prodLoading && !prodError) {
      const { category, salePrice, __typename, ...other } = prodData.product;
      setProductInitialState({
        ...productInitialState,
        ...other,
        salePrice: salePrice ? salePrice : 0,
        id: productId,
        category: category.id,
      });
    }
  }, [prodData, prodLoading, prodError]);

  const productSchema = Yup.object().shape({
    name: Yup.string().required(),
    slug: Yup.string().required(),
    image: Yup.string().required(),
    description: Yup.array().of(Yup.string()),
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
      onSubmit={async (values, actions) => {
        console.log('submitting');
        // if we're editing based on a product ID, we want to update the product
        if (productId) {
          updateProduct({
            variables: {
              updateProductId: values.id,
              updateProductName: values.name,
              updateProductSlug: values.slug,
              updateProductImage: values.image,
              updateProductRating: values.rating,
              updateProductPrice: values.price,
              updateProductDescription: values.description,
              updateProductStock: values.stock,
              updateProductOnSale: values.onSale,
              updateProductSalePrice: values.salePrice,
              updateProductCategory: values.category,
            },
          });
        } else {
          // otherwise, create a new product
          // ToDo
        }
        actions.setSubmitting(false);
        history.push('/admin');
      }}
    >
      {(formikProps) => {
        console.log(formikProps);
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
                {formikProps.values.onSale && (
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
                isLoading={formikProps.isSubmitting}
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
