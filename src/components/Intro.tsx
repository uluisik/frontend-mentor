import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

function Intro() {
  return (
    <>
      <Flex mt="120px">
        <Flex flexDirection="column" w="760px" h="500px" ml="20">
          <Heading mt="8" mb="12" as="h1" fontSize="56px" color="blue.700">
            Improve your front-end coding skills by building real projects
          </Heading>
          <Text fontWeight="medium" mb="10" fontSize="24px">
            Solve real-world HTML, CSS and JavaScript challenges whilst working
            to professional designs. Join 585.585 developers building projects,
            reviewing code, and helping each other get better.
          </Text>
          <Flex
            h="54px"
            w="280px"
            borderRadius="3xl"
            as="em"
            fontWeight="bold"
            alignItems="center"
            justifyContent="center"
            backgroundColor="rgb(237, 44, 73)"
            color="white"
            cursor="pointer"
          >
            LOG IN WITH GITHUB
            <Text ml="2" fontSize="2xl">
              <AiFillGithub />
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Image ml="20" mr="24" src="image/homepage-hero.jpg" />
        </Flex>
      </Flex>
    </>
  );
}

export default Intro;
