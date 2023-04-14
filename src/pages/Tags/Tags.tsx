import { Flex, Input, Spacer, Text, Link } from '@chakra-ui/react';
import Aside from '../../components/Aside';
import TagsCard from './TagsCard';

const TAGS_ITEMS = [
  '#accessibility',
  '#airtable',
  '#angular',
  '#animation',
  '#astro',
  '#axios',
  '#backbone',
  '#bem',
  '#bootstrap',
  '#bulma',
  '#chai',
  '#chakra-ui',
  '#chart-js',
  '#contentful',
  '#cube-css',
  '#cypress',
  '#d3',
  '#deno',
  '#django',
  '#editor-x',
  '#eleventy',
  '#elm',
  '#ember',
  '#emotion',
  '#express',
  '#fetch',
  '#fire-cms',
  '#firebase',
  '#flask',
  '#flutter',
  '#foundation',
  '#framer-motion',
  '#fresh',
  '#gatsby',
  '#golang',
  '#graphql'
];
function Tags() {
  return (
    <>
      <Flex
        border="1px solid"
        borderColor="gray.300"
        borderLeftColor="white"
        borderRightColor="white"
        h="60px"
        mb="8"
      >
        <Flex
          alignItems="center"
          ml="8"
          borderLeft="1px solid"
          borderRight="1px solid"
          borderColor="gray.300"
          px="8"
          fontWeight="bold"
          fontSize="lg"
        >
          SOLUTIONS
        </Flex>
        <Spacer />
        <Flex alignItems="center" mr="12" fontWeight="semibold" fontSize="md">
          <Link href="solutions">
            <Text _hover={{ borderBottom: '3px solid red' }} cursor="pointer" mr="8">
              Solutions
            </Text>
          </Link>
          <Text _hover={{ borderBottom: '3px solid red' }} cursor="pointer" mr="8">
            Tags
          </Text>
          <Link href="wall-of-fame">
            <Text _hover={{ borderBottom: '3px solid red' }} cursor="pointer">
              Wall of Fame
            </Text>
          </Link>
        </Flex>
      </Flex>
      <Flex mt="20" mx="20">
        <Text fontWeight="88px" fontSize="4xl">
          Tags
        </Text>
        <Spacer />
        <Input h="50px" w="300px" placeholder="Search tags..." _placeholder={{ fontSize: 'lg' }} />
      </Flex>
      <Flex mx="20" gap="8" flexDirection="row" flexWrap="wrap">
        {TAGS_ITEMS.map((item) => (
          <TagsCard key={item} text={item} />
        ))}
      </Flex>
      <Aside />
    </>
  );
}

export default Tags;
