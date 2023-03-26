import { Flex, Heading, Text } from "@chakra-ui/react";

import { IconType } from "react-icons/lib";

type CardProps = {
  text: string;
  heading: string;
  Icon: IconType;
};

function MainItemCard({ text, heading, Icon }: CardProps) {
  return (
    <Flex flexDirection="column" alignItems="center" w="316px" h="220px">
      <Text color="blue.700" fontSize="5xl" mb="6">
        {<Icon />}
      </Text>
      <Heading mb="3" fontWeight="semibold" fontSize="2xl">
        {heading}
      </Heading>
      <Text textAlign="center" fontSize="lg">
        {text}
      </Text>
    </Flex>
  );
}

export default MainItemCard;
