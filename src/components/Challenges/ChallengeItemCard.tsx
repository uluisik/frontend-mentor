import { Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";

type BoxProps = {
  image: any;
  title: string;
  techs: string[];
  level: number;
  description: string;
};

const LEVELS = ["NEWBIE", "JUNIOR", "INTERMEDIATE", "ADVANCED"];

const LEVEL_COLORS = [
  "rgb(106, 190, 205)",
  "rgb(170, 215, 66)",
  "rgb(241, 182, 4)",
  "rgb(244, 137, 37)",
];

const TECHS_COLORS = [
  "rgb(106, 190, 205)",
  "rgb(62, 84, 163)",
  "rgb(207, 99, 144)",
  "rgb(170, 215, 66)",
];

function ChallengeItemCard({
  image,
  title,
  techs,
  level,
  description,
}: BoxProps) {
  return (
    <Flex
      border="1px solid"
      borderColor="gray.200"
      flexDirection="column"
      w="416px"
      h="580px"
      borderRadius="10"
    >
      <Image mb="6" src={image} />
      <Flex flexDirection="column" mb="6" ml="8 ">
        <Heading fontSize="2xl">{title}</Heading>
        <Flex my="6">
          {techs.map((item, index) => (
            <Text
              key={item}
              color={TECHS_COLORS[index]}
              mr="2"
              fontWeight="bold"
              fontSize="xl"
            >
              {item}
            </Text>
          ))}

          <Spacer />
          <Flex mr="2" borderRadius="lg">
            <Text
              display="flex"
              alignItems="center"
              justifyContent="center"
              w="20px"
              color="white"
              border="1px solid "
              borderColor={LEVEL_COLORS[level - 1]}
              borderLeftRadius="lg"
              bg={LEVEL_COLORS[level - 1]}
              fontWeight="bold"
            >
              {level}
            </Text>
            <Text
              display="flex"
              alignItems="center"
              justifyContent="center"
              color={LEVEL_COLORS[level - 1]}
              fontWeight="bold"
              border="1px solid"
              borderRightRadius="lg"
              px="2"
              borderColor={LEVEL_COLORS[level - 1]}
            >
              {LEVELS[level - 1]}
            </Text>
          </Flex>
        </Flex>
        <Text color="gray" fontSize="18px">
          {description}
        </Text>
      </Flex>
    </Flex>
  );
}

export default ChallengeItemCard;
