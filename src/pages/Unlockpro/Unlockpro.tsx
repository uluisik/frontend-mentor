import { Avatar, Image, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

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
        <Flex mb="120px" alignItems="center" justifyContent="center">
          <Flex
            bg="gray.100"
            borderRadius="15"
            h="500"
            w="36%"
            flexDirection="column"
            border="1px solid red"
            pl="6"
          >
            <Heading fontWeight="normal" fontSize="3xl" my="6">
              Tutorials can only take you so far
            </Heading>
            <Text mb="6" fontSize="18px">
              Tutorials are an amazing way to learn the theory of web development. But there comes a
              time when you need to take action and put that knowledge to the test.
            </Text>
            <Text mb="6" fontSize="18px">
              Have you ever felt like...
            </Text>
            <Flex mb="6">
              <Text mt="1" fontWeight="bold" fontSize="xl">
                <AiOutlineClose color="red" />
              </Text>
              <Text ml="2" fontSize="18px">
                ...you’re caught in a never ending cycle of jumping from tutorial to tutorial
                without internalizing what you’ve been taught?
              </Text>
            </Flex>
            <Flex mb="6">
              <Text mt="1" fontWeight="bold" fontSize="xl">
                <AiOutlineClose color="red" />
              </Text>
              <Text ml="2" fontSize="18px">
                ...you only remember the surface-level concepts and forget all the good stuff?
              </Text>
            </Flex>
            <Flex>
              <Text mt="1" fontWeight="bold" fontSize="xl">
                <AiOutlineClose color="red" />
              </Text>
              <Text ml="2" fontSize="18px">
                ...you rely on following code alongs to build projects and struggle when it comes to
                doing it yourself?
              </Text>
            </Flex>
          </Flex>
          <Image h="600" w="40%" src="image/premiumm.webp" />
        </Flex>
        <Flex mb="220px" alignItems="center" justifyContent="center">
          <Image h="600" w="40%" src="image/premiumm2.webp" />
          <Flex
            bg="rgb(62, 84, 163)"
            borderRadius="15"
            h="500"
            w="36%"
            flexDirection="column"
            border="1px solid red"
            pl="6"
            color="white"
          >
            <Heading fontWeight="normal" fontSize="3xl" my="6">
              Why not step into the shoes of a professional developer?
            </Heading>
            <Text mb="6" fontSize="18px">
              There is no better way to practice front-end development than to use a realistic
              workflow and build projects.
            </Text>
            <Text mb="6" fontSize="18px">
              Our Pro subscription provides the highest quality resources so that you can...
            </Text>
            <Flex mb="6">
              <Text mt="1" fontWeight="bold" fontSize="xl">
                <AiOutlineCheck color="rgb(0, 219, 154)" />
              </Text>
              <Text ml="2" fontSize="18px">
                ...learn to build fully-functional, multi-page websites with our premium challenges.
              </Text>
            </Flex>
            <Flex mb="6">
              <Text mt="1" fontWeight="bold" fontSize="xl">
                <AiOutlineCheck color="rgb(0, 219, 154)" />
              </Text>
              <Text ml="2" fontSize="18px">
                ...use the original design file to see the exact styles you need for all our
                challenges.
              </Text>
            </Flex>
            <Flex>
              <Text mt="1" fontWeight="bold" fontSize="xl">
                <AiOutlineCheck color="rgb(0, 219, 154)" />
              </Text>
              <Text ml="2" fontSize="18px">
                ...build a portfolio of projects you’ll feel proud to share.
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Text
          w="44%"
          fontSize="1.3rem"
          fontStyle="italic"
          fontFamily="Heebo, sans-serif"
          mb="10"
          textAlign="center"
        >
          "Frontend Mentor is a win-win. You can sharpen your skills building websites, and add
          finished projects to your portfolio to help land a job!"
        </Text>
        <Flex mb="120px" flexDirection="column" ml="6" alignItems="center" justifyContent="center">
          <Avatar size="xl" mb="4" name="Segun Adebayo" src="image/28.jpg" />
          <Heading
            fontWeight="700"
            fontFamily="Heebo, sans-serif"
            color="rgb(62, 84, 163)"
            size="sm"
          >
            JESSICA CHAN
          </Heading>
          <Text>Web Developer & YouTuber</Text>
        </Flex>
        <Flex mb="120px" alignItems="center" justifyContent="center">
          <Flex
            justifyContent="center"
            bg="gray.100"
            h="650"
            w="45%"
            flexDirection="column"
            border="1px solid red"
          >
            <Heading ml="70" fontWeight="normal" fontSize="3xl" my="6">
              Why Frontend Mentor Pro?
            </Heading>
            <Text ml="70" mb="6" fontSize="18px">
              There is no better way to practice front-end development than to build projects using
              a realistic workflow.
            </Text>
            <Text ml="70" mb="6" fontSize="18px">
              Our Pro subscription lets you do that with the highest quality projects and most
              realistic workflow possible.
            </Text>
            <Text ml="70" mb="6" fontSize="18px">
              Whether you’re looking for your first role or trying to get a promotion our Pro
              subscription will give you the tools to grow your skillset.
            </Text>
            <Text ml="70" mb="6" fontSize="18px">
              I hope you enjoy building our projects!
            </Text>
            <Text fontWeight="bold" ml="70" mb="6" fontSize="18px">
              - Matt Studdert
            </Text>
          </Flex>
          <Image h="650" w="45%" src="image/profile-matt.webp" />
        </Flex>
        <Flex mb="40" w="60%" alignItems="center" flexDirection="column">
          <Heading mb="8" fontSize="xl">
            INSIDE OUR PREMIUM CHALLENGES
          </Heading>
          <Text fontSize="lg" textAlign="center">
            All Pro members have access to our premium challenges. These are our highest quality
            projects that provide the most realistic development experience possible. They also make
            incredible portfolio pieces!
          </Text>
        </Flex>
        <Flex mb="40" mx="32">
          <Image w="50%" border="1px solid red" src="image/resimm.webp" />
          <Flex
            ml="20"
            justifyContent="center"
            alignItems="center"
            w="45%"
            border="1px solid blue"
            flexDirection="column"
          >
            <Heading mb="10" fontWeight="semibold" fontSize="5xl">
              Professional designs for multi-page websites
            </Heading>
            <Text fontSize="20">
              Build fully-functional, multi-page websites and learn how to write scalable,
              maintainable code. By the end of each challenge, you’ll have a beautiful new addition
              to your web development portfolio.
            </Text>
          </Flex>
        </Flex>
        <Flex mb="40" mx="32">
          <Flex
            mr="20"
            justifyContent="center"
            alignItems="center"
            w="50%"
            border="1px solid blue"
            flexDirection="column"
          >
            <Heading mb="10" fontWeight="semibold" fontSize="45">
              Sketch and Figma designs included
            </Heading>
            <Text fontSize="20">
              Use the original design files and work like a professional developer. See exactly what
              styles need to be applied to get your solution close to the design.
            </Text>
          </Flex>
          <Image w="50%" border="1px solid red" src="image/image-original-design.png" />
        </Flex>
        <Flex mb="40" mx="32">
          <Image w="50%" border="1px solid red" src="image/image-multiple-devices.png" />
          <Flex
            ml="20"
            justifyContent="center"
            alignItems="center"
            w="45%"
            border="1px solid blue"
            flexDirection="column"
          >
            <Heading mb="10" fontWeight="semibold" fontSize="5xl">
              Mobile, tablet, and desktop layout designs
            </Heading>
            <Text fontSize="20">
              Practice building fully-responsive websites by working to mobile, tablet, and desktop
              designs. No need to guess how your project should look at different breakpoints.
            </Text>
          </Flex>
        </Flex>
        <Flex mb="40" mx="32">
          <Flex
            mr="20"
            justifyContent="center"
            alignItems="center"
            w="50%"
            border="1px solid blue"
            flexDirection="column"
          >
            <Heading mb="10" fontWeight="semibold" fontSize="45">
              Professional design system
            </Heading>
            <Text fontSize="20">
              Our premium challenges come with a simple, professional design system to help you plan
              out your styles. See common styles and patterns all in one neatly presented document.
            </Text>
          </Flex>
          <Image w="50%" border="1px solid red" src="image/image-design-system.png" />
        </Flex>
      </Flex>
    </>
  );
}

export default Unlockpro;
