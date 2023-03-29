import { Text } from "@chakra-ui/react";

function HeaderItemCard({ text }: { text: string }) {
  return (
    <Text
      _hover={{ borderBottom: "3px solid red" }}
      ml="4"
      as="em"
      fontWeight="bold"
      cursor="pointer"
    >
      {text}
    </Text>
  );
}

export default HeaderItemCard;
