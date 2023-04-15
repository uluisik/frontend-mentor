import { Avatar, Image, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function Unlockpro() {
  return (
    <>
      <Flex flexDirection="column" alignItems="center" justifyContent="center" mt="40">
        <Flex alignItems="center" justifyContent="center" w="46%" flexDirection="column" mb="40">
          <Heading
            fontSize="3.2rem"
            textAlign="center"
            fontFamily="Barlow, sans-serif"
            color="rgb(62, 84, 163)"
            mb="10"
          >
            So you want to be a pro developer
          </Heading>
          <Text fontSize="1.2rem" fontWeight="400" fontFamily="Heebo, sans-serif" mb="10">
            Our Pro subscription lets you step into the shoes of a professional developer.
          </Text>
          <Text
            fontSize="1.2rem"
            fontWeight="400"
            fontFamily="Heebo, sans-serif"
            mb="10"
            textAlign="center"
          >
            Get access to our premium challenges with multi-page designs for mobile, tablet, and
            desktop screens. See the detail in each design with access to Sketch and Figma designs
            for every challenge. Plus more!
          </Text>
          <Text fontSize="1.2rem" fontWeight="400" fontFamily="Heebo, sans-serif" mb="10">
            Already sold?
          </Text>
          <Flex
            fontWeight="bold"
            fontStyle="italic"
            fontSize="1.2rem"
            fontFamily="Barlow, sans-serif"
            border="1px solid"
            bg="rgb(237, 44, 73)"
            mb="200px"
            color="white"
            px="8"
            py="2"
            cursor="pointer"
            borderRadius="30"
            justifyContent="center"
          >
            UNLOCK PRO NOW
          </Flex>
          <Text
            fontSize="1.3rem"
            fontStyle="italic"
            fontFamily="Heebo, sans-serif"
            mb="10"
            textAlign="center"
          >
            "Something like this would have helped me a lot when I started out, but I'm happy that
            it exists for those who are starting out now!"
          </Text>
          <Flex flexDirection="column" ml="6" alignItems="center" justifyContent="center">
            <Avatar size="xl" mb="4" name="Segun Adebayo" src="image/26.jpg" />
            <Heading
              fontWeight="700"
              fontFamily="Heebo, sans-serif"
              color="rgb(62, 84, 163)"
              size="sm"
            >
              FLORIN POP
            </Heading>
            <Text>Web Developer & YouTuber</Text>
          </Flex>
        </Flex>
        <Flex position="relative" alignItems="center" justifyContent="center">
          <Flex
            bg="gray.100"
            borderRadius="15"
            h="500"
            w="40%"
            flexDirection="column"
            border="1px solid red"
            left="-20"
          >
            <Heading>Tutorials can only take you so far</Heading>
            <Text>
              Tutorials are an amazing way to learn the theory of web development. But there comes a
              time when you need to take action and put that knowledge to the test.
            </Text>
            <Text>Have you ever felt like...</Text>
            <Text>
              <AiOutlineClose />
              ...you’re caught in a never ending cycle of jumping from tutorial to tutorial without
              internalizing what you’ve been taught?
            </Text>
            <Text>
              <AiOutlineClose />
              ...you only remember the surface-level concepts and forget all the good stuff?
            </Text>
            <Text>
              <AiOutlineClose />
              ...you rely on following code alongs to build projects and struggle when it comes to
              doing it yourself?
            </Text>
          </Flex>
          <Image h="600" w="40%" src="image/premiumm.webp" />
        </Flex>
      </Flex>
    </>
  );
}

export default Unlockpro;
