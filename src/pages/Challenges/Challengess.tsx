import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer
} from '@chakra-ui/react';
import Arrow from '../../icons/Arrow';
import MainSearch from '../../components/Main/MainSearch';
import Aside from '../../components/Aside';

function Challengess() {
  return (
    <>
      <Flex mb="10" border="1px solid" borderColor="gray.300">
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
              <MenuItem px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                Most recent
              </MenuItem>
              <MenuDivider />
              <MenuItem px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                Difficult (easier first)
              </MenuItem>
              <MenuDivider />
              <MenuItem px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                Difficult (harder first)
              </MenuItem>
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
              rightIcon={<Arrow />}
              _hover={{ bg: 'none' }}
              color="black"
            >
              FILTER BY
            </MenuButton>
            <MenuList minWidth="300px" overflowY="scroll">
              <MenuItem px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                Most recent
              </MenuItem>
              <MenuDivider />
              <MenuItem px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                Difficult (easier first)
              </MenuItem>
              <MenuDivider />
              <MenuItem px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                Most recent
              </MenuItem>
              <MenuDivider />
              <MenuItem px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                Most recent
              </MenuItem>
              <MenuDivider />
              <MenuItem px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                Most recent
              </MenuItem>
              <MenuDivider />
              <MenuItem px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                Most recent
              </MenuItem>
              <MenuDivider />
              <MenuItem px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                Most recent
              </MenuItem>
              <MenuDivider />
              <MenuItem px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                Most recent
              </MenuItem>
              <MenuDivider />
              <MenuItem px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                Most recent
              </MenuItem>
              <MenuDivider />
              <MenuItem px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                Most recent
              </MenuItem>
              <MenuDivider />
              <MenuItem px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                Most recent
              </MenuItem>
              <MenuDivider />
              <MenuItem px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                Most recent
              </MenuItem>
              <MenuDivider />
              <MenuItem px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                Most recent
              </MenuItem>
              <MenuDivider />
              <MenuItem px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
                Most recent
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <MainSearch />
      </Flex>
      <Aside />
    </>
  );
}

export default Challengess;
