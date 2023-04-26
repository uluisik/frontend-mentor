import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  Checkbox
} from '@chakra-ui/react';
import Arrow from '../../icons/Arrow';
import MainSearch from '../../components/Main/MainSearch';
import Aside from '../../components/Aside';
import ModalCard from '../../components/ModalCard';
import Card from './Card';
import { useState } from 'react';

const SORT_BY = ['Most recent', 'Difficult (easier first)', ' Difficult (harder first)'];

const FILTER_ITEMS = [
  {
    title: 'TYPE',
    filters: ['Free', 'Free+', 'Premium']
  },
  {
    title: 'DIFFICULTY',
    filters: ['Newbie', 'Junior', 'Intermediate', 'Advanced', 'Guru']
  },
  {
    title: 'LANGUAGES',
    filters: ['HTML & CSS', 'JS', 'API']
  }
];

function Challengess() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  console.log('ahmet');
  const filterHandler = (filter: string) => {
    setSelectedFilters([...selectedFilters, filter]);
  };
  return (
    <>
      <Flex h="60px" mb="6" border="1px solid" borderColor="gray.300" borderRightColor="white">
        <Flex
          px="10"
          ml="8"
          borderLeft="1px solid"
          borderLeftColor="gray.300"
          borderRight="1px solid"
          borderRightColor="gray.300"
          fontWeight="700"
          fontSize="17"
          fontFamily="barlow, sans-serif"
          alignItems="center"
          justifyContent="center"
        >
          CHALLENGES
        </Flex>
        <Spacer />
        <Flex
          px="10"
          borderLeft="1px solid"
          borderLeftColor="gray.300"
          fontSize="15"
          cursor="pointer"
          _hover={{ bg: 'gray.100' }}
          alignItems="center"
        >
          <Menu>
            <MenuButton
              colorScheme="gray.100"
              bg="none"
              fontWeight="600"
              fontStyle="italic"
              as={Button}
              rightIcon={<Arrow />}
              _hover={{ bg: 'none' }}
              color="black"
            >
              SORT BY
            </MenuButton>
            <MenuList minWidth="300px" overflowY="scroll">
              {SORT_BY.map((item) => (
                <MenuItem key="item" px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                  {item}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>

        <Flex
          fontWeight="600"
          fontStyle="italic"
          px="10"
          borderLeft="1px solid"
          borderLeftColor="gray.300"
          mr="8"
          borderRight="1px solid"
          borderRightColor="gray.300"
          flexDirection="column"
          cursor="pointer"
          _hover={{ bg: 'gray.100' }}
          alignItems="center"
          justifyContent="center"
        >
          <Menu closeOnSelect={false}>
            <MenuButton
              colorScheme="gray.100"
              bg="none"
              fontWeight="600"
              fontStyle="italic"
              as={Button}
              rightIcon={<Arrow />}
              _hover={{ bg: 'none' }}
              color="black"
            >
              FILTER BY
            </MenuButton>
            <MenuList minWidth="300px" overflowY="scroll">
              {FILTER_ITEMS.map((item) => (
                <Flex key={item.title} flexDirection="column">
                  <Text>{item.title}</Text>
                  {item.filters.map((filter) => (
                    <MenuItem key={filter} onClick={() => filterHandler(filter)}>
                      <Checkbox>
                        <Text>{filter}</Text>
                      </Checkbox>
                    </MenuItem>
                  ))}
                </Flex>
              ))}
              {/* <MenuItem
                color="RGBA(0, 0, 0, 0.06)"
                fontWeight="bold"
                fontStyle="italic"
                px="3"
                _hover={{ bg: 'white' }}
                fontSize="19"
              >
                TYPE
              </MenuItem>
              {FILTER_BY.map((item) => (
                <MenuItem px="3" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                  <Flex
                    border="4px solid"
                    borderColor="rgb(62, 84, 163)"
                    w="28px"
                    h="28px"
                    mr="3"
                  />
                  {item}
                </MenuItem>
              ))}

              <Text
                color="RGBA(0, 0, 0, 0.06)"
                fontWeight="bold"
                fontStyle="italic"
                px="3"
                _hover={{ bg: 'white' }}
                fontSize="19"
              >
                DIFFICULT
              </Text>
              <MenuDivider />
              <MenuItem px="3" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                <Flex border="4px solid" borderColor="rgb(62, 84, 163)" w="28px" h="28px" mr="3" />
                Newbie
              </MenuItem>
              <MenuDivider />
              <MenuItem px="3" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                <Flex border="4px solid" borderColor="rgb(62, 84, 163)" w="28px" h="28px" mr="3" />
                Junior
              </MenuItem>
              <MenuDivider />
              <MenuItem px="3" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                <Flex border="4px solid" borderColor="rgb(62, 84, 163)" w="28px" h="28px" mr="3" />
                Intermediate
              </MenuItem>
              <MenuDivider />
              <MenuItem px="3" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                <Flex border="4px solid" borderColor="rgb(62, 84, 163)" w="28px" h="28px" mr="3" />
                Advanced
              </MenuItem>
              <MenuDivider />
              <MenuItem px="3" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                <Flex border="4px solid" borderColor="rgb(62, 84, 163)" w="28px" h="28px" mr="3" />
                Guru
              </MenuItem>
              <MenuDivider />
              <Text
                color="RGBA(0, 0, 0, 0.06)"
                fontWeight="bold"
                fontStyle="italic"
                px="3"
                _hover={{ bg: 'white' }}
                cursor="default"
                fontSize="19"
              >
                LANGUAGES
              </Text>
              <MenuDivider />
              <MenuItem px="3" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                <Flex border="4px solid" borderColor="rgb(62, 84, 163)" w="28px" h="28px" mr="3" />
                HTML & CSS
              </MenuItem>
              <MenuDivider />
              <MenuItem px="3" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                <Flex border="4px solid" borderColor="rgb(62, 84, 163)" w="28px" h="28px" mr="3" />
                JS
              </MenuItem>
              <MenuDivider />
              <MenuItem px="3" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                <Flex border="4px solid" borderColor="rgb(62, 84, 163)" w="28px" h="28px" mr="3" />
                API
              </MenuItem> */}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      {selectedFilters.map((selectedFilter) => (
        <Text>{selectedFilter}</Text>
      ))}

      <ModalCard />
      <Card />
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <MainSearch />
      </Flex>
      <Aside />
    </>
  );
}

export default Challengess;
