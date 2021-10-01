import { Tr, Th } from '@chakra-ui/table';
import { Text, Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Fragment } from 'react';

const TableActionRow = ({ numRowsSelected }) => {
  return (
    <Tr bgColor='blue.50'>
      <Th colSpan={4}>
        <Text
          fontWeight='normal'
          mb={2}
        >{`${numRowsSelected} items selected`}</Text>
        <Flex>
          <Button mr={2} size='sm' variant='outline' colorScheme='red'>
            Delete
          </Button>
          {numRowsSelected === 1 && (
            <Fragment>
              <Button mr={2} size='sm' variant='outline' colorScheme='blue'>
                Duplicate
              </Button>
              <Button mr={2} size='sm' variant='outline' colorScheme='blue'>
                Edit
              </Button>
            </Fragment>
          )}
        </Flex>
      </Th>
    </Tr>
  );
};

export default TableActionRow;
