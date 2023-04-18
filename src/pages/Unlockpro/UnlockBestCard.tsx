import { Flex, Heading, Divider, Text } from '@chakra-ui/react';
import { AiFillGithub, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

function UnlockBestCard() {
  return (
    <Flex
      bg="gray.100"
      borderRadius="15"
      h="700"
      w="30%"
      flexDirection="column"
      alignItems="center"
      mb="10"
    >
      <Heading color="blue.700" mt="8" fontSize="xl">
        FREE
      </Heading>
      <Flex my="16" fontSize="18px">
        <Text fontSize="40" fontWeight="bold">
          $0
        </Text>
        <Text mt="5">/mont</Text>
      </Flex>
      <Divider w="80%" />
      <Flex w="80%" ml="12" mt="10" mr="20" flexDirection="column">
        <Flex>
          <Text mt="1" fontWeight="bold" fontSize="xl">
            <AiOutlineCheck color="rgb(0, 219, 154)" />
          </Text>
          <Text ml="2" fontSize="18px">
            Access free challenges
          </Text>
        </Flex>
        <Flex>
          <Text mt="1" fontWeight="bold" fontSize="xl">
            <AiOutlineCheck color="rgb(0, 219, 154)" />
          </Text>
          <Text ml="2" fontSize="18px">
            Join Slack community
          </Text>
        </Flex>
        <Flex>
          <Text mt="1" fontWeight="bold" fontSize="xl">
            <AiOutlineClose color="red" />
          </Text>
          <Text ml="2" fontSize="18px">
            Access premium challenges
          </Text>
        </Flex>
        <Flex>
          <Text mt="1" fontWeight="bold" fontSize="xl">
            <AiOutlineClose color="red" />
          </Text>
          <Text ml="2" fontSize="18px">
            Access Sketch and Figma design files
          </Text>
        </Flex>
        <Flex>
          <Text mt="1" fontWeight="bold" fontSize="xl">
            <AiOutlineClose color="red" />
          </Text>
          <Text ml="2" fontSize="18px">
            Make solutions private
          </Text>
        </Flex>
        <Flex>
          <Text mt="1" fontWeight="bold" fontSize="xl">
            <AiOutlineClose color="red" />
          </Text>
          <Text ml="2" fontSize="18px">
            Unlimited solution screenshots
          </Text>
        </Flex>
        <Flex>
          <Text mt="1" fontWeight="bold" fontSize="xl">
            <AiOutlineClose color="red" />
          </Text>
          <Text ml="2" fontSize="18px">
            PRO label
          </Text>
        </Flex>
      </Flex>
      <Flex color="red" py="3" px="20" borderRadius="25" border="1px solid red" mt="32">
        LOG IN WITH GITHUB
        <Text fontSize="2xl" ml="2">
          <AiFillGithub />
        </Text>
      </Flex>
    </Flex>
  );
}

export default UnlockBestCard;
