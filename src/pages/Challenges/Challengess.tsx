import { Flex, Spacer, Text } from '@chakra-ui/react';
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
          fontWeight="600"
          fontStyle="italic"
          px="10"
          py="6"
          borderLeft="1px solid"
          borderLeftColor="gray.300"
          fontSize="15"
          cursor="pointer"
          _hover={{ bg: 'gray.100' }}
        >
          SORT BY
          <Text ml="2" mt="2">
            <Arrow />
          </Text>
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
          FILTER BY
          <Text ml="8">
            <Arrow />
          </Text>
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
