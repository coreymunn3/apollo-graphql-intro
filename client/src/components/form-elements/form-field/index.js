import { Field } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';

const FormField = (props) => {
  const { label, required, name } = props;
  return (
    <Field name={name}>
      {({ field, form, meta }) => (
        <FormControl
          isRequired={required}
          isInvalid={form.errors[name] && form.touched[name]}
        >
          <FormLabel fontSize='sm' color='blue.700' mb={1}>
            {label}
          </FormLabel>
          <Input {...field} errorBorderColor='yellow.400' />
          <FormErrorMessage color='yellow.500'>
            {form.errors[name]}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default FormField;
