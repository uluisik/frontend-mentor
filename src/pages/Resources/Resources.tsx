import { Button, Flex, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react';
import Arrow from '../../icons/Arrow';

function Resources() {
  return (
    <Flex
      border="1px solid"
      borderColor="gray.300"
      borderLeftColor="white"
      borderRightColor="white"
      h="60px"
      mb="8"
    >
      <Flex
        alignItems="center"
        ml="8"
        borderLeft="1px solid"
        borderRight="1px solid"
        borderColor="gray.300"
        px="8"
        fontWeight="bold"
        fontSize="lg"
      >
        RESOURCES
      </Flex>
      <Spacer />
      <Flex
        borderLeft="1px solid"
        borderLeftColor="gray.300"
        borderRight="1px solid"
        borderRightColor="gray.300"
        alignItems="center"
        mr="12"
        fontWeight="semibold"
        fontSize="md"
        justifyContent="center"
        px="8"
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
            GO TO SECTION
          </MenuButton>
          <MenuList minWidth="300px" overflowY="scroll">
            <MenuItem key="item" px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
              LEARNING
            </MenuItem>
            <MenuItem key="item" px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
              Online Courses
            </MenuItem>
            <MenuItem key="item" px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
              Interactive Tutorials
            </MenuItem>
            <MenuItem key="item" px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
              Problem Solving
            </MenuItem>
            <MenuItem key="item" px="8" _hover={{ bg: 'white' }} cursor="pointer" fontSize="19">
              Reading
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}

export default Resources;
