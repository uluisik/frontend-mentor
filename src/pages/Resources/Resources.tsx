import {
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  Link
} from '@chakra-ui/react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import Challenges from '../../components/Challenges/Challenges';
import MainSearch from '../../components/Main/MainSearch';
import Arrow from '../../icons/Arrow';
import Card from './Card';

function Resources() {
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
      <Center my="20" fontWeight="bold" fontSize="xl">
        LEARNING
      </Center>
      <Flex mb="10" mx="20">
        <Text fontSize="2xl" fontWeight="semibold" mr="10">
          Online Courses
        </Text>
        <Divider mt="5" w="84%" />
      </Flex>
      <Card />
      <Flex mb="10" mx="20">
        <Text fontSize="2xl" fontWeight="semibold" mr="10">
          Interactive Tutorials
        </Text>
        <Divider mt="5" w="80%" />
      </Flex>
      <Card />
      <Flex mb="10" mx="20">
        <Text fontSize="2xl" fontWeight="semibold" mr="10">
          Problem Solving
        </Text>
        <Divider mt="5" w="83%" />
      </Flex>
      <Card />
      <Flex mb="10" mx="20">
        <Text fontSize="2xl" fontWeight="semibold" mr="10">
          Reading
        </Text>
        <Divider mt="5" w="89%" />
      </Flex>
      <Card />
      <Flex mb="10" mx="20">
        <Text fontSize="2xl" fontWeight="semibold" mr="10">
          Videos
        </Text>
        <Divider mt="5" w="89%" />
      </Flex>
      <Card />
      <Flex mb="10" mx="20">
        <Text fontSize="2xl" fontWeight="semibold" mr="10">
          Podcasts
        </Text>
        <Divider mt="5" w="89%" />
      </Flex>
      <Card />
      <Flex mb="10" mx="20">
        <Text fontSize="2xl" fontWeight="semibold" mr="10">
          Blogs & Communities
        </Text>
        <Divider mt="5" w="78%" />
      </Flex>
      <Card />
      <Center my="20" fontWeight="bold" fontSize="xl">
        WORKFLOW
      </Center>
      <Flex mb="10" mx="20">
        <Text fontSize="2xl" fontWeight="semibold" mr="10">
          Development Tools
        </Text>
        <Divider mt="5" w="78%" />
      </Flex>
      <Card />
      <Flex mb="10" mx="20">
        <Text fontSize="2xl" fontWeight="semibold" mr="10">
          Frameworks & Libraries
        </Text>
        <Divider mt="5" w="78%" />
      </Flex>
      <Card />
      <Flex mb="10" mx="20">
        <Text fontSize="2xl" fontWeight="semibold" mr="10">
          Resources
        </Text>
        <Divider mt="5" w="89%" />
      </Flex>
      <Card />
      <Flex mb="10" mx="20">
        <Text fontSize="2xl" fontWeight="semibold" mr="10">
          Typography
        </Text>
        <Divider mt="5" w="89%" />
      </Flex>
      <Card />
      <Flex mb="10" mx="20">
        <Text fontSize="2xl" fontWeight="semibold" mr="10">
          Colors
        </Text>
        <Divider mt="5" w="89%" />
      </Flex>
      <Card />
      <Center my="20" fontWeight="bold" fontSize="xl">
        LAUNCHING
      </Center>
      <Flex mb="10" mx="20">
        <Text fontSize="2xl" fontWeight="semibold" mr="10">
          Testing & Analytics
        </Text>
        <Divider mt="5" w="78%" />
      </Flex>
      <Card />
      <Flex mb="10" mx="20">
        <Text fontSize="2xl" fontWeight="semibold" mr="10">
          Reporting
        </Text>
        <Divider mt="5" w="89%" />
      </Flex>
      <Card />
      <Flex mb="80px" ml="20" w="43%" flexDirection="column">
        <Text color="gray">
          * If you visit one of our affiliate resources and make a purchase, Frontend Mentor may
          receive a commission. This comes at no extra cost to you and helps support the site.
        </Text>
        <br />
        <Text color="gray">
          ** If you visit a resource using a referral link and make a purchase, Frontend Mentor may
          receive credits for the selected service. It doesn’t cost you any extra. We use these
          services too, so it helps reduce our costs.
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        bg="gray.100"
        h="500px"
        borderRadius="10"
        mb="50"
        flexDirection="column"
        mx="10"
      >
        <Heading fontSize="lg" my="20">
          SPREAD THE LOVE
        </Heading>
        <Text fontSize="3xl" fontWeight="semibold">
          Know someone who might find this list useful? Share it around!
        </Text>
        <Flex mt="20" gap="10">
          <Flex
            border="3px solid"
            borderColor="rgb(59, 88, 151)"
            w="70px"
            h="70px"
            borderRadius="50%"
            fontSize="4xl"
            justifyContent="center"
            alignItems="center"
            color="rgb(59, 88, 151)"
            cursor="pointer"
          >
            <Link href="https://tr-tr.facebook.com/" target="_blank">
              <FaFacebookF />
            </Link>
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            border="3px solid"
            borderColor="blue.300"
            w="70px"
            h="70px"
            borderRadius="50%"
            color="blue.300"
            fontSize="4xl"
            cursor="pointer"
          >
            <Link href="https://twitter.com/login?lang=tr" target="_blank">
              <AiOutlineTwitter />
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Challenges />
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Heading
          fontWeight="semibold"
          fontSize="18px"
          borderBottom="3px solid red"
          mb="40"
          cursor="pointer"
        >
          View all challenges
        </Heading>
        <MainSearch />
      </Flex>
    </>
  );
}

export default Resources;
