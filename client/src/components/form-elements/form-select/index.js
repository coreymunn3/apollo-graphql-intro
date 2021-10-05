import { Field } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/form-control';
import { Select } from '@chakra-ui/select';

const FormSelect = (props) => {
  const { label, required, name, options } = props;
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
          <Select
            {...field}
            placeholder={'Choose ' + name}
            errorBorderColor='yellow.400'
          >
            {options.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.name}
              </option>
            ))}
          </Select>
          <FormErrorMessage color='yellow.500'>
            {form.errors[name]}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default FormSelect;
