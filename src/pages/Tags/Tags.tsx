import { Flex, Spacer, Text } from '@chakra-ui/react';

function Tags() {
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
        SOLUTIONS
      </Flex>
      <Spacer />
      <Flex alignItems="center" mr="12" fontWeight="semibold" fontSize="md">
        <Text _hover={{ borderBottom: '3px solid red' }} cursor="pointer" mr="8">
          Solutions
        </Text>
        <Text _hover={{ borderBottom: '3px solid red' }} cursor="pointer" mr="8">
          Tags
        </Text>
        <Text _hover={{ borderBottom: '3px solid red' }} cursor="pointer">
          Wall of Fame
        </Text>
      </Flex>
    </Flex>
  );
}

export default Tags;
