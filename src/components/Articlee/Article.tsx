import { Flex, Heading, Input, Text } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";

const ARTICLE_ITEMS = [
  {
    title: "FRONTEND MENTOR",
    link: ["Unlock Pro", "Contact us", "Blog"],
  },
  {
    title: "EXPLORE",
    link: ["Challenges", "Solutions", "Resources"],
  },
  {
    title: "COMMUNITY",
    link: ["Slack", "Guidelines", "FAQs"],
  },
  {
    title: "FOR COMPANIES",
    link: ["Hire developers"],
  },
];

function Article() {
  return (
    <Flex w="100%">
      <Flex flexDirection="column">
        <Heading
          fontWeight="semibold"
          fontSize="3xl"
          color="blue.500"
          ml="8"
          mb="20px"
        >
          Stay up to date
        </Heading>
        <Text fontSize="lg" ml="8">
          with new challenges, featured solutions,
        </Text>
        <Text fontSize="lg" ml="8" mb="20px">
          selected articles and our latest news
        </Text>
        <Flex>
          <Input
            ml="8"
            mt="2"
            w="300px"
            h="50px"
            placeholder="email@example.com"
          />
          <Flex
            h="56px"
            w="180px"
            borderRadius="3xl"
            mr="6"
            ml="4"
            as="em"
            fontWeight="bold"
            alignItems="center"
            justifyContent="center
            "
            bg="rgb(237, 44, 73)"
            color="white"
            cursor="pointer"
          >
            SUBSCRIBE
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        {ARTICLE_ITEMS.map(({ title, link }) => (
          <ArticleCard key={title} title={title} link={link} />
        ))}
      </Flex>
    </Flex>
  );
}

export default Article;
