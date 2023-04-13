import { Flex, Image, Text, Heading, Spacer, Divider } from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { FiBookmark } from 'react-icons/fi';

function AllSolutions() {
  return (
    <Flex
      border="1px solid"
      borderColor="gray.200"
      flexDirection="column"
      w="420px"
      h="830px"
      borderRadius="10"
      position="relative"
      mb="10"
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
          <FaRegCommentAlt /> 0
          <AiOutlineHeart /> 0
          <FiBookmark /> 0
        </Flex>
      </Flex>
      <Divider />
      <Flex my="4">
        <Flex border="1px solid gray" w="60px" h="60px" borderRadius="50%">
          <Image borderRadius="50%" src="https://avatars.githubusercontent.com/u/102121845?v=4" />
        </Flex>
        <Flex mt="1" flexDirection="column" ml="2">
          <Flex fontWeight="bold">
            alansadewa
            <Flex fontSize="lg" mt="-1" mx="1">
              .
            </Flex>
            <Text color="blue.700">20</Text>
          </Flex>
          <Text color="gray.500">@alansadewa</Text>
        </Flex>
      </Flex>
      <Divider />
      <Text p="3" mt="1" fontSize="lg">
        Sometimes I'm not sure about my coding solutions; I don't know whether it's the right way to
        do it or not, but somehow I made it even though it's not perfect. Can you please give me
        some advice about my code? thank you
      </Text>
      <Text fontSize="lg" p="3">
        *fyi, I don't know how to use the json yet, so I didn't write the javascript code.
      </Text>
    </Flex>
  );
}

export default AllSolutions;
