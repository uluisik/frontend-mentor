import { Flex, Heading, Input, Text } from '@chakra-ui/react';
import { FaSlack } from 'react-icons/fa';

function MainSearch() {
  return (
    <Flex
      alignItems="center"
      bg="blue.700"
      h="600px"
      borderRadius="10"
      mb="50"
      w="90%"
      flexDirection="column"
    >
      <Heading mt="100px" mb="50px" display="flex">
        <Text fontSize="6xl" mr="2" color="white">
          <FaSlack />
        </Text>
        <Text fontSize="5xl" color="white">
          slack
        </Text>
      </Heading>
      <Heading color="white" fontSize="xl" mb="40px">
        JOIN OUR SLACK COMMUNITY
      </Heading>
      <Text color="white" fontSize="3xl" fontWeight="semibold">
        Join over 180.000 people taking the challenges, talking about their code, helping each
      </Text>
      <Text color="white" fontSize="3xl" fontWeight="semibold" mb="40px">
        other, and chatting about all things front-end!
      </Text>
      <Flex>
        <Input bg="white" w="500px" h="50px" placeholder="email@example.com" />
        <Flex
          h="50px"
          w="200px"
          borderRadius="3xl"
          mr="6"
          ml="4"
          as="em"
          fontWeight="bold"
          alignItems="center"
          justifyContent="center
            "
          bg="white"
          color="blue.700"
          cursor="pointer"
        >
          REQUEST INVITE
        </Flex>
      </Flex>
    </Flex>
  );
}

export default MainSearch;
