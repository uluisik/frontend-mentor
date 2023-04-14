import { Flex, Link, Spacer, Tab, TabList, Tabs, Text } from '@chakra-ui/react';
import Aside from '../../components/Aside';
import MainSearch from '../../components/Main/MainSearch';
import AllCard from './AllCard';

function AllSolutions() {
  return (
    <>
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
          <Link href="solutions">
            <Text _hover={{ borderBottom: '3px solid red' }} cursor="pointer" mr="8">
              Solutions
            </Text>
          </Link>
          <Link href="tags">
            <Text _hover={{ borderBottom: '3px solid red' }} cursor="pointer" mr="8">
              Tags
            </Text>
          </Link>
          <Text _hover={{ borderBottom: '3px solid red' }} cursor="pointer">
            Wall of Fame
          </Text>
        </Flex>
      </Flex>
      <Tabs mb="6" colorScheme="blue" ml="20" w="25%">
        <TabList>
          <Link href="solutions">
            <Tab fontSize="lg" fontWeight="bold">
              Feedback requested
            </Tab>
          </Link>
          <Link href="all">
            <Tab fontSize="lg" fontWeight="bold">
              All solutions
            </Tab>
          </Link>
        </TabList>
      </Tabs>
      <Flex gap="10" mx="20" mt="6">
        <AllCard />
        <AllCard />
        <AllCard />
      </Flex>
      <Flex mt="50" flexDirection="column" alignItems="center" justifyContent="center">
        <Text mb="100px" borderBottom="3px solid red" fontSize="lg" fontWeight="bold">
          Load more
        </Text>
        <MainSearch />
      </Flex>
      <Aside />
    </>
  );
}

export default AllSolutions;
