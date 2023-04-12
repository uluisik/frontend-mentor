import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  MenuDivider,
  Text
} from '@chakra-ui/react';
import Arrow from '../../icons/Arrow';
import MainSearch from '../../components/Main/MainSearch';
import Aside from '../../components/Aside';
import ModalCard from '../../components/ModalCard';
import Card from './Card';

const SORT_BY = ['Most recent', 'Difficult (easier first)', ' Difficult (harder first)'];

const FILTER_BY = ['Free', 'Free+', 'Premium'];

function Challengess() {
  return (
    <>
      <Flex mb="6" border="1px solid" borderColor="gray.300" borderRightColor="white">
        <Flex
          px="10"
          py="6"
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
          py="6"
          borderLeft="1px solid"
          borderLeftColor="gray.300"
          fontSize="15"
          cursor="pointer"
          _hover={{ bg: 'gray.100' }}
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
          py="6"
          borderLeft="1px solid"
          borderLeftColor="gray.300"
          mr="8"
          borderRight="1px solid"
          borderRightColor="gray.300"
          flexDirection="column"
          cursor="pointer"
          _hover={{ bg: 'gray.100' }}
        >
          <Menu>
            <MenuButton
              colorScheme="gray.100"
              bg="none"
              fontWeight="600"
              fontStyle="italic"
              as={Button}
              _hover={{ bg: 'none' }}
              color="black"
            >
              FILTER BY
              <Text ml="8">
                <Arrow />
              </Text>
            </MenuButton>
            <MenuList minWidth="300px" overflowY="scroll">
              <MenuItem
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
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
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
