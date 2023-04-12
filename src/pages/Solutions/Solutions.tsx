import { Flex, Heading, Image, Spacer, Tab, TabList, Tabs, Text } from '@chakra-ui/react';
import Aside from '../../components/Aside';
import MainSearch from '../../components/Main/MainSearch';

function Solutions() {
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
      <Tabs mb="6" colorScheme="blue" ml="20" w="25%">
        <TabList>
          <Tab fontSize="lg" fontWeight="bold">
            Feedback requested
          </Tab>
          <Tab fontSize="lg" fontWeight="bold">
            All solutions
          </Tab>
        </TabList>
      </Tabs>
      <Flex
        border="1px solid"
        borderColor="gray.200"
        flexDirection="column"
        w="416px"
        h="580px"
        borderRadius="10"
        position="relative"
      >
        <Image
          _hover={{ WebkitTransform: 'scale(1.1)' }}
          cursor="pointer"
          mb="6"
          src="image/news.webp"
          borderRadius="10"
        />
        <Text>Submitted about 1 hour ago</Text>
        <Heading
          cursor="pointer"
          _hover={{ borderBottom: '3px solid' }}
          fontSize="2xl"
          w="-webkit-max-content"
        >
          React password generator
        </Heading>
        <Text>#react #vite #typescript</Text>
        <Flex my="6">
          <Text mr="2" fontWeight="bold" fontSize="xl">
            HTML
          </Text>
          <Text mr="2" fontWeight="bold" fontSize="xl">
            CSS
          </Text>
          <Spacer />
          <Flex mr="2" borderRadius="lg">
            <Text
              display="flex"
              alignItems="center"
              justifyContent="center"
              w="20px"
              color="white"
              border="1px solid "
              borderLeftRadius="lg"
              fontWeight="bold"
            >
              AAA
            </Text>
            <Text
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontWeight="bold"
              border="1px solid"
              borderRightRadius="lg"
              px="2"
            >
              AAAAA
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <MainSearch />
      </Flex>
      <Aside />
    </>
  );
}

export default Solutions;
