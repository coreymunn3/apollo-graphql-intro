import { useState, useEffect } from 'react';
import { Stack, Flex } from '@chakra-ui/layout';
import { FormField, FormSelect, FormSwitch } from '../form-elements';
import { Button } from '@chakra-ui/button';
import { useQuery } from '@apollo/client';
import { queries } from '../../graphql';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const ProductForm = () => {
  const { data: categoryData, loading, error } = useQuery(queries.categories);
  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    if (!loading & !error) {
      const formattedData = categoryData.categories.map((cat) => ({
        id: cat.id,
        name: cat.categoryName,
      }));
      setCategoryOptions(formattedData);
      console.log(formattedData);
    }
  }, [categoryData]);

  const initialState = {
    name: '',
    slug: '',
    image: '',
    rating: 0,
    price: 0,
    onSale: false,
    salePrice: 0,
    stock: 0,
    category: '',
  };
  const productSchema = Yup.object().shape({
    name: Yup.string().required(),
    slug: Yup.string().required(),
    image: Yup.string().required(),
    rating: Yup.number().min(0).max(5),
    price: Yup.number().required().min(0),
    stock: Yup.number().min(0),
    onSale: Yup.boolean(),
    salePrice: Yup.number().min(0),
    category: Yup.string().required(),
    // still need description
  });

  return (
    <Formik
      initialValues={initialState}
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
                type='submit'
                mt={4}
                bgColor='blue.700'
                color='white'
                isLoading={form.isSubmitting}
              >
                Submit
              </Button>
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ProductForm;
