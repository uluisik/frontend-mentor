import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";

function Challenges() {
  return (
    <>
      <Flex
        justifyContent="center"
        bg="blue.700"
        mx="8"
        h="360px"
        borderTopRadius="10"
        mb="50"
      >
        <Heading color="white" mt="16" fontSize="lg">
          LATEST CHALLENGES
        </Heading>
      </Flex>
      <Flex mb="80px" mt="-260" wrap="wrap" mx="20" gap="30">
        <Box
          border="1px solid"
          borderColor="gray.200"
          flexDirection="column"
          display="flex"
          w="416px"
          h="580px"
          borderRadius="10"
        >
          <Image mb="6" src="image/work.webp" />
          <Heading ml="8" fontSize="2xl" mb="6">
            Workit landing page
          </Heading>
          <Flex mb="6" ml="8">
            <Text mr="2" color="cyan.500" fontWeight="bold" fontSize="xl">
              HTML
            </Text>
            <Text color="blue.700" fontWeight="bold" fontSize="xl">
              CSS
            </Text>
            <Spacer />
            <Flex
              w="100px"
              h="26px"
              borderRadius="lg"
              border="1px solid "
              borderColor="cyan.500"
              mr="8"
            >
              <Text
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="20px"
                color="white"
                border="1px solid "
                borderColor="cyan.500"
                borderLeftRadius="lg"
                bg="cyan.500"
                fontWeight="bold"
              >
                1
              </Text>
              <Text
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="cyan.500"
                ml="2"
                fontWeight="bold"
              >
                NEWBIE
              </Text>
            </Flex>
          </Flex>
          <Text color="gray" ml="8" mr="6" fontSize="18px">
            This HTML and CSS-only landing page will be an excellent test of
            your UI and responsive skills. There’s also some fun to be had
            creating the curved section borders!
          </Text>
        </Box>
        <Box
          border="1px solid"
          borderColor="gray.200"
          flexDirection="column"
          display="flex"
          w="416px"
          h="580px"
          borderRadius="10"
        >
          <Image mb="6" src="image/results.webp" />
          <Heading ml="8" fontSize="2xl" mb="6">
            Results summary component
          </Heading>
          <Flex mb="6" ml="8">
            <Text mr="2" color="cyan.500" fontWeight="bold" fontSize="xl">
              HTML
            </Text>
            <Text color="blue.700" fontWeight="bold" fontSize="xl">
              CSS
            </Text>
            <Spacer />
            <Flex
              w="100px"
              h="26px"
              borderRadius="lg"
              border="1px solid "
              borderColor="cyan.500"
              mr="8"
            >
              <Text
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="20px"
                color="white"
                border="1px solid "
                borderColor="cyan.500"
                borderLeftRadius="lg"
                bg="cyan.500"
                fontWeight="bold"
              >
                1
              </Text>
              <Text
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="cyan.500"
                ml="2"
                fontWeight="bold"
              >
                NEWBIE
              </Text>
            </Flex>
          </Flex>
          <Text color="gray" ml="8" mr="6" fontSize="18px">
            This challenge has something for everyone. It’s a HTML and CSS only
            project, but we’ve also provided a JSON file of the test results for
            anyone wanting to practice JS.
          </Text>
        </Box>
        <Box
          border="1px solid"
          borderColor="gray.200"
          flexDirection="column"
          display="flex"
          w="416px"
          h="580px"
          borderRadius="10"
        >
          <Image mb="6" src="image/dictionary.webp" />
          <Heading ml="8" fontSize="2xl" mb="6">
            Dictionary web app
          </Heading>
          <Flex mb="6" ml="8">
            <Text mr="2" color="cyan.500" fontWeight="bold" fontSize="xl">
              HTML
            </Text>
            <Text mr="2" color="blue.700" fontWeight="bold" fontSize="xl">
              CSS
            </Text>
            <Text mr="2" color="pink.400" fontWeight="bold" fontSize="xl">
              JS
            </Text>
            <Text mr="2" color="yellow.300" fontWeight="bold" fontSize="xl">
              API
            </Text>
            <Spacer />
            <Flex
              w="150px"
              h="26px"
              borderRadius="lg"
              border="1px solid "
              borderColor="yellow.500"
              mr="6"
            >
              <Text
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                border="1px solid "
                borderColor="yellow.500"
                borderLeftRadius="lg"
                bg="yellow.500"
                w="34px"
                fontWeight="bold"
              >
                3
              </Text>
              <Text
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="yellow.500"
                fontWeight="bold"
                mx="2"
              >
                INTERMEDIATE
              </Text>
            </Flex>
          </Flex>
          <Text color="gray" ml="8" mr="6" fontSize="18px">
            In this project, you'll integrate with the Dictionary API to create
            a real-world dictionary web app. Additional tests include colour
            themes and font selection.
          </Text>
        </Box>
        <Box
          border="1px solid"
          borderColor="gray.200"
          flexDirection="column"
          display="flex"
          w="416px"
          h="580px"
          borderRadius="10"
        >
          <Image mb="6" src="image/multi.webp" />
          <Heading ml="8" fontSize="2xl" mb="6">
            Multi-step form
          </Heading>
          <Flex mb="6" ml="8">
            <Text mr="2" color="cyan.500" fontWeight="bold" fontSize="xl">
              HTML
            </Text>
            <Text mr="2" color="blue.700" fontWeight="bold" fontSize="xl">
              CSS
            </Text>
            <Text color="pink.400" fontWeight="bold" fontSize="xl">
              JS
            </Text>
            <Spacer />
            <Flex
              w="120px"
              h="26px"
              borderRadius="lg"
              border="1px solid "
              borderColor="orange.400"
              mr="8"
            >
              <Text
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="20px"
                color="white"
                border="1px solid "
                borderColor="orange.400"
                borderLeftRadius="lg"
                bg="orange.400"
                fontWeight="bold"
              >
                4
              </Text>
              <Text
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="orange.400"
                ml="2"
                fontWeight="bold"
              >
                ADVANCED
              </Text>
            </Flex>
          </Flex>
          <Text color="gray" ml="8" mr="6" fontSize="18px">
            An excellent test for your form-building and JS skills, this project
            will pose many challenges along the way to completion.
          </Text>
        </Box>
        <Box
          border="1px solid"
          borderColor="gray.200"
          flexDirection="column"
          display="flex"
          w="416px"
          h="580px"
          borderRadius="10"
        >
          <Image mb="6" src="image/single.webp" />
          <Heading ml="8" fontSize="2xl" mb="6">
            Single-page developer portfolio
          </Heading>
          <Flex mb="6" ml="8">
            <Text mr="2" color="cyan.500" fontWeight="bold" fontSize="xl">
              HTML
            </Text>
            <Text mr="2" color="blue.700" fontWeight="bold" fontSize="xl">
              CSS
            </Text>
            <Text color="pink.400" fontWeight="bold" fontSize="xl">
              JS
            </Text>
            <Spacer />
            <Flex
              w="100px"
              h="26px"
              borderRadius="lg"
              border="1px solid "
              borderColor="green.300"
              mr="8"
            >
              <Text
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="20px"
                color="white"
                border="1px solid "
                borderColor="green.300"
                borderLeftRadius="lg"
                bg="green.300"
                fontWeight="bold"
              >
                2
              </Text>
              <Text
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="green.300"
                ml="2"
                fontWeight="bold"
              >
                JUNIOR
              </Text>
            </Flex>
          </Flex>
          <Text color="gray" ml="8" mr="6" fontSize="18px">
            Test your HTML and CSS skills with this portfolio site. Basic JS
            knowledge is needed for the form validation. You can even customize
            and use this as your own site!
          </Text>
        </Box>
        <Box
          border="1px solid"
          borderColor="gray.200"
          flexDirection="column"
          display="flex"
          w="416px"
          h="580px"
          borderRadius="10"
        >
          <Image mb="6" src="image/news.webp" />
          <Heading ml="8" fontSize="2xl" mb="6">
            News homepage
          </Heading>
          <Flex mb="6" ml="8">
            <Text mr="2" color="cyan.500" fontWeight="bold" fontSize="xl">
              HTML
            </Text>
            <Text mr="2" color="blue.700" fontWeight="bold" fontSize="xl">
              CSS
            </Text>
            <Text color="pink.400" fontWeight="bold" fontSize="xl">
              JS
            </Text>
            <Spacer />
            <Flex
              w="100px"
              h="26px"
              borderRadius="lg"
              border="1px solid "
              borderColor="green.300"
              mr="8"
            >
              <Text
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="20px"
                color="white"
                border="1px solid "
                borderColor="green.300"
                borderLeftRadius="lg"
                bg="green.300"
                fontWeight="bold"
              >
                2
              </Text>
              <Text
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="green.300"
                ml="2"
                fontWeight="bold"
              >
                JUNIOR
              </Text>
            </Flex>
          </Flex>
          <Text color="gray" ml="8" mr="6" fontSize="18px">
            This news homepage will be an excellent opportunity to practice your
            CSS Grid skills. There will be lots of tricky decisions to make and
            plenty of learning opportunities!
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default Challenges;
