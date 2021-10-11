import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Stack } from '@chakra-ui/layout';
import { FormField } from '../form-elements';
import Loading from '../loading';
import { Button } from '@chakra-ui/button';
import { useQuery, useMutation } from '@apollo/client';
import { queries, mutations } from '../../graphql';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const CategoryForm = ({ categoryId }) => {
  const history = useHistory();

  // get category info for edit
  const {
    data: catData,
    loading: catLoading,
    error: catError,
  } = useQuery(queries.categoryQueries.categoryById, {
    variables: {
      categoryId,
    },
  });

  // mutate products
  const [updateCategory, updateCategoryResult] = useMutation(
    mutations.categoryMutations.updateCategory
  );

  // generate initial state (used when not updating)
  const emptyInitialState = {
    categoryName: '',
    slug: '',
    image: '',
  };
  // format category data into initial state if exists (used when updating)
  const [categoryInitialState, setCategoryInitialState] = useState({});
  useEffect(() => {
    if (!catLoading && !catError) {
      const { __typename, ...other } = catData.category;
      setCategoryInitialState({
        ...categoryInitialState,
        ...other,
        id: categoryId,
      });
    }
  }, [catData, catLoading, catError]);

  const categorySchema = Yup.object().shape({
    categoryName: Yup.string().required(),
    slug: Yup.string().required(),
    image: Yup.string().required(),
  });

  if (catLoading) {
    return <Loading />;
  }
  return (
    <Formik
      initialValues={categoryId ? categoryInitialState : emptyInitialState}
      enableReinitialize={true}
      validationSchema={categorySchema}
      onSubmit={async (values, actions) => {
        console.log('submitting');
        // if we're editing based on a product ID, we want to update the product
        if (categoryId) {
          updateCategory({
            variables: {
              updateCategoryId: values.id,
              updateCategoryCategoryName: values.categoryName,
              updateCategorySlug: values.slug,
              updateCategoryImage: values.image,
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
        console.log(formikProps.values);
        return (
          <Form>
            <Stack maxW='500px' margin='auto' spacing={2}>
              <FormField
                name='categoryName'
                label={'Category Name'}
                required={true}
              />
              <FormField name='slug' label={'Slug'} required={true} />
              <FormField name='image' label={'Image Link'} required={true} />

              <Button
                variant='primary-dark'
                type='submit'
                mt={4}
                isLoading={formikProps.isSubmitting}
              >
                {categoryId ? 'Update Category' : 'Submit'}
              </Button>
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
};
export default CategoryForm;
