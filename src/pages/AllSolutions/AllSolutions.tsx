import { Flex, Link, Tab, TabList, Tabs, Text } from '@chakra-ui/react';
import Aside from '../../components/Aside';
import MainSearch from '../../components/Main/MainSearch';
import AllCard from './AllCard';

function AllSolutions() {
  return (
    <>
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
