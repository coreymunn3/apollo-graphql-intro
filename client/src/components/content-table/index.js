import { useState, Fragment } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Checkbox } from '@chakra-ui/checkbox';
import { Text } from '@chakra-ui/layout';
import TableActionRow from './table-action-row';

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

  const atLeastOneRowSelected = Object.keys(checkedItems).some(
    (key) => checkedItems[key]
  );

  const selectedRows = Object.keys(checkedItems).filter(
    (key) => checkedItems[key] && key
  );

  return (
    <Fragment>
      <Text color='gray.400' mb={1}>
        {contentList.length} items found
      </Text>
      <Table variant='simple'>
        <Thead bgColor='blue.100'>
          <Tr>
            <Th>
              <Checkbox
                size='lg'
                borderColor='gray.400'
                colorScheme='blue'
                isChecked={allChecked}
                onChange={toggleCheckAll}
              />
            </Th>
            <Th>Name/Title</Th>
            <Th>Created</Th>
            <Th>Last Updated</Th>
          </Tr>
          {/* Show actions row if items selected */}
          {atLeastOneRowSelected && (
            <TableActionRow selectedRows={selectedRows} />
          )}
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
                  colorScheme='blue'
                  isChecked={checkedItems[content.id]}
                  onChange={handleCheck}
                />
              </Td>
              <Td>
                <Link to={`/admin/${content.id}`}>
                  {content.name ||
                    content.categoryName ||
                    content.text ||
                    content.title}
                </Link>
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
    </Fragment>
  );
};

export default ContentTable;
