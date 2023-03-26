import { Flex, Heading, Text, Input } from "@chakra-ui/react";
import { AiFillWechat } from "react-icons/ai";
import { FaLaptopCode, FaSlack } from "react-icons/fa";
import { FiDownload, FiShare2 } from "react-icons/fi";
import Challenges from "../Challenges/Challenges";

import MainItemCard from "./MainItemCard";

const MAIN_ITEMS = [
  {
    icons: FiDownload,
    heading: "Choose your challenge",
    text: "Have a look through our collection of web designs. Pick one that you feel will be a nice challenge for you at this stage.",
  },
  {
    icons: FaLaptopCode,
    heading: "Code the design",
    text: "Start the challenge and download all the starter files. We provide all the files you’ll need to complete the challenge. Building it is up to you!",
  },
  {
    icons: FiShare2,
    heading: "Submit your solution",
    text: "Post your solution on the platform for everyone to see and get feedback on your code from other developers in the community.",
  },
  {
    icons: AiFillWechat,
    heading: "Give others feedback",
    text: "Thinking critically about other people’s code is a crucial skill. Help others while deepening your own knowledge by giving feedback on solutions.",
  },
];
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
          {MAIN_ITEMS.map((item) => (
            <MainItemCard
              key={item.text}
              Icon={item.icons}
              heading={item.heading}
              text={item.text}
            />
          ))}
        </Flex>
      </Flex>
      <Challenges />

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
