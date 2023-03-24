import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

function Section() {
  return (
    <>
      <Flex
        mt="120px"
        alignItems="space-between"
        justifyContent="space-between"
      >
        <Flex
          flexDirection="column"
          w="900px"
          h="400px"
          border="1px solid black"
        >
          <Heading p="8" border="1px solid red" as="h1" size="4xl">
            Improve your front-end coding skills by building real projects
          </Heading>
          <Text p="8" fontSize="xl" border="1px solid blue">
            Solve real-world HTML, CSS and JavaScript challenges whilst working
            to professional designs. Join 585.585 developers building projects,
            reviewing code, and helping each other get better.
          </Text>
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
        <Flex>
          <Image src="image/homepage-hero.jpg" />
        </Flex>
      </Flex>
    </>
  );
}

export default Section;
