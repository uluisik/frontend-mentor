import { Flex, Text, Image, Spacer } from "@chakra-ui/react";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function Aside() {
  return (
    <Flex alignItems="center" mt="200" mb="20">
      <Flex w="250px" h="80px">
        <Image p="6" src="image/logo-desktop.svg" />
      </Flex>

      <Spacer />
      <Flex h="80px" alignItems="center" justifyContent="center">
        <Text
          ml="4"
          as="em"
          fontWeight="bold"
          cursor="pointer"
          fontSize="36"
          color="blue.300"
        >
          <AiOutlineTwitter />
        </Text>
        <Text
          ml="8"
          as="em"
          fontWeight="bold"
          cursor="pointer"
          fontSize="36"
          color="blue.300"
        >
          <AiFillLinkedin />
        </Text>
        <Text
          ml="8"
          as="em"
          fontWeight="bold"
          cursor="pointer"
          mr="8"
          fontSize="36"
          color="blue.300"
        >
          <FaFacebook />
        </Text>
      </Flex>
    </Flex>
  );
}

export default Aside;
