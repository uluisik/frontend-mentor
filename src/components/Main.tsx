import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Spacer,
  Input,
} from "@chakra-ui/react";
import { AiFillWechat } from "react-icons/ai";
import { FaLaptopCode, FaSlack } from "react-icons/fa";
import { FiDownload, FiShare2 } from "react-icons/fi";

function Main() {
  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt="200"
        mb="100"
      >
        <Heading mb="20" fontSize="lg">
          HOW IT WORKS
        </Heading>
        <Flex gap="50px">
          <Box
            flexDirection="column"
            display="flex"
            alignItems="center"
            w="316px"
            h="220px"
          >
            <Text color="blue.700" fontSize="5xl" mb="6">
              <FiDownload />
            </Text>
            <Heading mb="3" fontWeight="semibold" fontSize="2xl">
              Choose your challenge
            </Heading>
            <Text fontSize="lg">
              Have a look through our collection of web designs. Pick one that
              you feel will be a nice challenge for you at this stage.
            </Text>
          </Box>
          <Box
            flexDirection="column"
            display="flex"
            alignItems="center"
            w="316px"
            h="220px"
          >
            <Text color="blue.700" fontSize="5xl" mb="6">
              <FaLaptopCode />
            </Text>
            <Heading mb="3" fontWeight="semibold" fontSize="2xl">
              Code the design
            </Heading>
            <Text fontSize="lg">
              Start the challenge and download all the starter files. We provide
              all the files you’ll need to complete the challenge. Building it
              is up to you!
            </Text>
          </Box>
          <Box
            flexDirection="column"
            display="flex"
            alignItems="center"
            w="316px"
            h="220px"
          >
            <Text color="blue.700" fontSize="5xl" mb="6">
              <FiShare2 />
            </Text>
            <Heading mb="3" fontWeight="semibold" fontSize="2xl">
              Submit your solution
            </Heading>
            <Text fontSize="lg">
              Post your solution on the platform for everyone to see and get
              feedback on your code from other developers in the community.
            </Text>
          </Box>
          <Box
            flexDirection="column"
            display="flex"
            alignItems="center"
            w="316px"
            h="220px"
          >
            <Text color="blue.700" fontSize="5xl" mb="6">
              <AiFillWechat />
            </Text>
            <Heading mb="3" fontWeight="semibold" fontSize="2xl">
              Give others feedback
            </Heading>
            <Text fontSize="lg">
              Thinking critically about other people’s code is a crucial skill.
              Help others while deepening your own knowledge by giving feedback
              on solutions.
            </Text>
          </Box>
        </Flex>
      </Flex>
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
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Heading
          fontWeight="semibold"
          fontSize="18px"
          borderBottom="3px solid red"
          mb="40"
        >
          View all challenges
        </Heading>
        <Flex
          alignItems="center"
          bg="blue.700"
          h="600px"
          borderRadius="10"
          mb="50"
          w="90%"
          flexDirection="column"
        >
          <Heading mt="100px" mb="50px" display="flex">
            <Text fontSize="6xl" mr="2" color="white">
              <FaSlack />
            </Text>
            <Text fontSize="5xl" color="white">
              slack
            </Text>
          </Heading>
          <Heading color="white" fontSize="xl" mb="40px">
            JOIN OUR SLACK COMMUNITY
          </Heading>
          <Text color="white" fontSize="3xl" fontWeight="semibold">
            Join over 180.000 people taking the challenges, talking about their
            code, helping each
          </Text>
          <Text color="white" fontSize="3xl" fontWeight="semibold" mb="40px">
            other, and chatting about all things front-end!
          </Text>
          <Flex>
            <Input
              bg="white"
              w="500px"
              h="50px"
              placeholder="email@example.com"
            />
            <Flex
              h="50px"
              w="200px"
              borderRadius="3xl"
              mr="6"
              ml="4"
              as="em"
              fontWeight="bold"
              alignItems="center"
              justifyContent="center
            "
              bg="white"
              color="blue.700"
              cursor="pointer"
            >
              REQUEST INVITE
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Main;
