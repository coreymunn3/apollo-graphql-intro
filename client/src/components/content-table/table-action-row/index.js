import { Tr, Th } from '@chakra-ui/table';
import { Text, Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const TableActionRow = ({ selectedRows }) => {
  return (
    <Tr bgColor='blue.50' position='sticky' top={10} zIndex='overlay'>
      <Th colSpan={4}>
        <Text
          fontWeight='normal'
          mb={2}
        >{`${selectedRows.length} items selected`}</Text>
        <Flex>
          <Button mr={2} size='sm' variant='outline' colorScheme='red'>
            Delete
          </Button>
          {selectedRows.length === 1 && (
            <Fragment>
              <Button mr={2} size='sm' variant='outline' colorScheme='blue'>
                Duplicate
              </Button>
              <Button mr={2} size='sm' variant='outline' colorScheme='blue'>
                <Link to={`/admin/${selectedRows[0]}`}>Edit</Link>
              </Button>
            </Fragment>
          )}
        </Flex>
      </Th>
    </Tr>
  );
};

export default TableActionRow;
