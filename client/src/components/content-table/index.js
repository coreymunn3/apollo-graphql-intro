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
      <Thead bgColor='gray.100'>
        <Tr>
          <Th>
            <Checkbox
              size='lg'
              colorScheme='yellow'
              isChecked={allChecked}
              onChange={toggleCheckAll}
            />
          </Th>
          <Th>Name</Th>
          <Th>Slug</Th>
        </Tr>
      </Thead>
      <Tbody>
        {contentList.map((content) => (
          <Tr key={content.id}>
            <Td>
              <Checkbox
                id={content.id}
                size='lg'
                colorScheme='yellow'
                isChecked={checkedItems[content.id]}
                onChange={handleCheck}
              />
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
