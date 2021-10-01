import { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/checkbox';

const ContentTable = ({ contentList }) => {
  const allBoxesChecked = contentList.reduce(
    (acc, cur) => ((acc[cur.id] = true), acc),
    {}
  );
  const allBoxesUnchecked = contentList.reduce(
    (acc, cur) => ((acc[cur.id] = false), acc),
    {}
  );

  const [allChecked, setAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(allBoxesUnchecked);

  const handleCheck = (e) => {
    setCheckedItems({
      ...checkedItems,
      [e.target.id]: e.target.checked,
    });
  };

  const toggleCheckAll = () => {
    if (allChecked === false) {
      setCheckedItems(allBoxesChecked);
      setAllChecked(true);
    } else {
      setCheckedItems(allBoxesUnchecked);
      setAllChecked(false);
    }
  };

  return (
    <Table variant='simple'>
      <Thead bgColor='blue.100'>
        <Tr>
          <Th>
            <Checkbox
              size='lg'
              borderColor='gray.400'
              colorScheme='yellow'
              isChecked={allChecked}
              onChange={toggleCheckAll}
            />
          </Th>
          <Th>Name/Title</Th>
          <Th>Created</Th>
          <Th>Last Updated</Th>
        </Tr>
      </Thead>
      <Tbody>
        {contentList.map((content) => (
          <Tr
            key={content.id}
            color='gray.600'
            _hover={{
              bgColor: 'gray.100',
              color: 'gray.900',
              cursor: 'pointer',
            }}
          >
            <Td>
              <Checkbox
                id={content.id}
                borderColor='gray.300'
                size='lg'
                colorScheme='yellow'
                isChecked={checkedItems[content.id]}
                onChange={handleCheck}
              />
            </Td>
            <Td>
              {content.name ||
                content.categoryName ||
                content.text ||
                content.title}
            </Td>
            <Td>
              {new Date(content.createdAt).toLocaleDateString('em-US', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
              })}
            </Td>
            <Td>
              {new Date(content.updatedAt).toLocaleDateString('em-US', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
              })}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ContentTable;
