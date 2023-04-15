import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function Unlockpro() {
  return (
    <>
      <Flex alignItems="center" justifyContent="center" mt="40">
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
      </Flex>
    </>
  );
}

export default Unlockpro;
