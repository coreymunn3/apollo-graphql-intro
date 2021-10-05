import { Field } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/form-control';
import { Switch } from '@chakra-ui/switch';

const FormSwitch = (props) => {
  const { label, required, name } = props;
  return (
    <Field name={name} type={'checkbox'}>
      {({ field, form, meta }) => (
        <FormControl
          isRequired={required}
          isInvalid={form.errors[name] && form.touched[name]}
        >
          <FormLabel fontSize='sm' color='blue.700' mb={1}>
            {label}
          </FormLabel>
          <Switch {...field} />
          <FormErrorMessage color='yellow.500'>
            {form.errors[name]}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default FormSwitch;
