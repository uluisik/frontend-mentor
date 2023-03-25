import { Flex, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";

function Article() {
  return (
    <Flex border="1px solid red" w="100%" h="320px">
      <Flex border="1px solid blue" flexDirection="column">
        <Heading
          fontWeight="semibold"
          fontSize="3xl"
          color="blue.500"
          ml="8"
          mb="20px"
        >
          Stay up to date
        </Heading>
        <Text fontSize="lg" ml="8">
          with new challenges, featured solutions,
        </Text>
        <Text fontSize="lg" ml="8" mb="20px">
          selected articles and our latest news
        </Text>
        <Flex>
          <Input
            ml="8"
            mt="2"
            w="300px"
            h="50px"
            placeholder="email@example.com"
          />
          <Flex
            h="56px"
            w="180px"
            borderRadius="3xl"
            mr="6"
            ml="4"
            as="em"
            fontWeight="bold"
            alignItems="center"
            justifyContent="center
            "
            bg="red.500"
            color="white"
            cursor="pointer"
          >
            SUBSCRIBE
          </Flex>
        </Flex>
      </Flex>
      <Flex gap="16">
        <Flex ml="8" flexDirection="column">
          <Heading fontSize="xl">FRONTEND MENTOR</Heading>
          <Text>Unlock Pro</Text>
          <Text>Contact us</Text>
          <Text>Blog</Text>
        </Flex>
        <Flex flexDirection="column">
          <Heading fontSize="xl">FRONTEND MENTOR</Heading>
          <Text>Unlock Pro</Text>
          <Text>Contact us</Text>
          <Text>Blog</Text>
        </Flex>
        <Flex flexDirection="column">
          <Heading fontSize="xl">FRONTEND MENTOR</Heading>
          <Text>Unlock Pro</Text>
          <Text>Contact us</Text>
          <Text>Blog</Text>
        </Flex>
        <Flex flexDirection="column">
          <Heading fontSize="xl">FRONTEND MENTOR</Heading>
          <Text>Unlock Pro</Text>
          <Text>Contact us</Text>
          <Text>Blog</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Article;
