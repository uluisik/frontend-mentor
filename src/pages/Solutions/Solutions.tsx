import {
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Spacer,
  Tab,
  TabList,
  Tabs,
  Text
} from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { FiBookmark } from 'react-icons/fi';
import Aside from '../../components/Aside';
import MainSearch from '../../components/Main/MainSearch';
import SolutionsCard from './SolutionsCard';

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
      <Flex flexWrap="wrap" mx="20">
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
              <Image
                borderRadius="50%"
                src="https://avatars.githubusercontent.com/u/102121845?v=4"
              />
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
            Sometimes I'm not sure about my coding solutions; I don't know whether it's the right
            way to do it or not, but somehow I made it even though it's not perfect. Can you please
            give me some advice about my code? thank you
          </Text>
          <Text fontSize="lg" p="3">
            *fyi, I don't know how to use the json yet, so I didn't write the javascript code.
          </Text>
        </Flex>
        <Flex
          border="1px solid"
          borderColor="gray.200"
          flexDirection="column"
          w="420px"
          h="700px"
          borderRadius="10"
          position="relative"
          mb="10"
          ml="7"
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
              <Image
                borderRadius="50%"
                src="https://avatars.githubusercontent.com/u/102121845?v=4"
              />
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
            I've noticed that some API versions have minor adjustments and updates.
          </Text>
        </Flex>
        <Flex
          border="1px solid"
          borderColor="gray.200"
          flexDirection="column"
          w="420px"
          h="1000px"
          borderRadius="10"
          position="relative"
          mb="10"
          ml="7"
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
              <Image
                borderRadius="50%"
                src="https://avatars.githubusercontent.com/u/102121845?v=4"
              />
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
            Sometimes I'm not sure about my coding solutions; I don't know whether it's the right
            way to do it or not, but somehow I made it even though it's not perfect. Can you please
            give me some advice about my code? thank you
          </Text>
          <Text fontSize="lg" p="3">
            *fyi, I don't know how to use the json yet, so I didn't write the javascript code.
          </Text>
        </Flex>
        <SolutionsCard />
        <Flex
          border="1px solid"
          borderColor="gray.200"
          flexDirection="column"
          w="420px"
          h="1000px"
          borderRadius="10"
          position="absolute"
          mb="10"
          top="1900px"
          right="535px"
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
              <Image
                borderRadius="50%"
                src="https://avatars.githubusercontent.com/u/102121845?v=4"
              />
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
            Sometimes I'm not sure about my coding solutions; I don't know whether it's the right
            way to do it or not, but somehow I made it even though it's not perfect. Can you please
            give me some advice about my code? thank you
          </Text>
          <Text fontSize="lg" p="3">
            *fyi, I don't know how to use the json yet, so I didn't write the javascript code.
          </Text>
        </Flex>
      </Flex>
      <Flex mt="550" flexDirection="column" alignItems="center" justifyContent="center">
        <Text mb="100px" borderBottom="3px solid red" fontSize="lg" fontWeight="bold">
          Load more
        </Text>
        <MainSearch />
      </Flex>
      <Aside />
    </>
  );
}

export default Solutions;
