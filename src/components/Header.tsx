import { Divider, Flex, Text, Image, Spacer } from "@chakra-ui/react";
import { BsBagFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
function Navbar() {
  return (
    <>
      <Flex alignItems="center" justifyContent="center" bg="blue.600" h="60px">
        <Flex>
          <Text fontSize="2xl" mr="4" color="white">
            <BsBagFill />
          </Text>
          <Text fontSize="lg" fontWeight="bold" mr="2" color="white">
            Looking to hire developers?
          </Text>
          <Flex
            _hover={{ borderBottom: "none" }}
            cursor="pointer"
            fontSize="lg"
            fontWeight="bold"
            color="white"
            borderBottom="1px solid"
          >
            Visit our Hiring Platform
          </Flex>
        </Flex>
      </Flex>
      <Flex alignItems="center">
        <Flex w="250px" h="80px">
          <Image p="6" src="image/logo-desktop.svg" />
        </Flex>

        <Spacer />
        <Flex h="80px" alignItems="center" justifyContent="center">
          <Text
            _hover={{ borderBottom: "3px solid red" }}
            ml="4"
            as="em"
            fontWeight="bold"
            cursor="pointer"
          >
            CHALLENGES
          </Text>
          <Text
            ml="4"
            as="em"
            fontWeight="bold"
            _hover={{ borderBottom: "3px solid red" }}
            cursor="pointer"
          >
            SOLUTIONS
          </Text>
          <Text
            ml="4"
            as="em"
            fontWeight="bold"
            _hover={{ borderBottom: "3px solid red" }}
            cursor="pointer"
          >
            RESOURCES
          </Text>
          <Flex
            ml="4"
            cursor="pointer"
            _hover={{ borderBottom: "3px solid red" }}
          >
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
            justifyContent="center
            "
            bg="black"
            color="white"
            cursor="pointer"
          >
            LOG IN WITH GITHUB
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

export default Navbar;
