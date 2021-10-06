import { FieldArray } from 'formik';
import { FormLabel } from '@chakra-ui/form-control';
import { FormField } from '..';
import { Stack, Flex, Box } from '@chakra-ui/layout';
import { IconButton, Button } from '@chakra-ui/button';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const TypeToAdd = (props) => {
  const { label, required, name } = props;
  return (
    <FieldArray name={name}>
      {({ form, push, remove }) => {
        return (
          <Box>
            <FormLabel
              fontSize='sm'
              color='blue.700'
              mb={1}
              requiredIndicator={required}
            >
              {label}
            </FormLabel>
            <Stack>
              {form.values[name] && form.values[name].length > 0 ? (
                form.values[name].map((item, idx) => (
                  <Flex key={idx}>
                    <FormField name={`${name}[${idx}]`} />
                    <Button
                      variant='primary-dark'
                      onClick={() => push('')}
                      ml={1}
                    >
                      <AiOutlinePlus />
                    </Button>
                    <Button
                      variant='primary-dark'
                      onClick={() => remove(idx)}
                      ml={1}
                    >
                      <AiOutlineMinus />
                    </Button>
                  </Flex>
                ))
              ) : (
                <Button
                  variant='primary-dark'
                  onClick={() => push('')}
                >{`Add new ${name}`}</Button>
              )}
            </Stack>
          </Box>
        );
      }}
    </FieldArray>
  );
};

export default TypeToAdd;
