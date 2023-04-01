import { Divider, Flex, Text, Image, Spacer, Link } from '@chakra-ui/react';
import { BsBagFill } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import HeaderItemCard from './HeaderItemCard';

const HEADER_ITEMS = ['CHALLENGES', 'SOLUTIONS', 'RESOURCES'];
function Header() {
  return (
    <>
      <Flex alignItems="center" justifyContent="center" bg="blue.600" h="60px">
        <Text fontSize="2xl" mr="4" color="white">
          <BsBagFill />
        </Text>
        <Text fontSize="lg" fontWeight="bold" mr="2" color="white">
          Looking to hire developers?
        </Text>
        <Flex
          _hover={{ borderBottom: 'none' }}
          cursor="pointer"
          fontSize="lg"
          fontWeight="bold"
          color="white"
          borderBottom="1px solid"
        >
          Visit our Hiring Platform
        </Flex>
      </Flex>

      <Flex alignItems="center">
        <Image w="250px" h="80px" p="6" src="image/logo-desktop.svg" />
        <Spacer />
        <Flex h="80px" alignItems="center" justifyContent="center">
          {HEADER_ITEMS.map((item) => (
            <HeaderItemCard key={item} text={item} />
          ))}

          <Flex ml="4" cursor="pointer" _hover={{ borderBottom: '3px solid red' }}>
            <Text as="em" fontWeight="bold" mr="2">
              UNLOCK
            </Text>
            <Text
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="xs"
              fontWeight="bold"
              bg="blue"
              color="white"
              w="30px"
              h="25px"
              borderRadius="4px"
            >
              PRO
            </Text>
          </Flex>
          <Flex
            h="50px"
            w="220px"
            borderRadius="3xl"
            mr="6"
            ml="4"
            as="em"
            fontWeight="bold"
            alignItems="center"
            justifyContent="center"
            bg="black"
            color="white"
            cursor="pointer"
          >
            <Link href="https://github.com/" target="_blank" border="none">
              LOG IN WITH GITHUB
            </Link>

            <Text ml="2" fontSize="2xl">
              <AiFillGithub />
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
}

export default Header;
