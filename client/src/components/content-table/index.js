import { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/checkbox';

const ContentTable = ({ contentList }) => {
  const [checkedItems, setCheckedItems] = useState(
    contentList.map((_) => false)
  );
  console.log(checkedItems);

  return (
    <Table variant='simple'>
      <Thead>
        <Tr>
          <Th>
            <Checkbox size='lg' colorScheme='yellow' />
          </Th>
          <Th>Name</Th>
          <Th>Slug</Th>
        </Tr>
      </Thead>
      <Tbody>
        {contentList.map((content) => (
          <Tr key={content.id}>
            <Td>
              <Checkbox size='lg' colorScheme='yellow' />
            </Td>
            <Td>{content.name || content.categoryName}</Td>
            <Td>{content.slug}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ContentTable;
