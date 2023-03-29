import { Flex, Heading, Text } from "@chakra-ui/react";
type ArticleProps = {
  title: string;
  a: string[];
};
function ArticleCard({ title, a }: ArticleProps) {
  return (
    <Flex ml="16" mr="6" flexDirection="column">
      <Heading fontSize="lg" mb="4">
        {title}
      </Heading>
      {a.map((item) => (
        <Text
          _hover={{ borderBottom: "1px solid gray" }}
          cursor="pointer"
          fontSize="18px"
          color="gray"
          mb="2"
          w="-webkit-max-content"
        >
          {item}
        </Text>
      ))}
    </Flex>
  );
}

export default ArticleCard;
