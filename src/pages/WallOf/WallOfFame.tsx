import { Flex, Spacer, Tab, TabList, Tabs, Text } from '@chakra-ui/react';
import Aside from '../../components/Aside';
import MainSearch from '../../components/Main/MainSearch';
import ModalCard from '../../components/ModalCard';
import AvatarCard from './AvatarCard';

const AVATAR_ITEMS = [
  {
    image: 'https://bit.ly/sage-adebayo',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/25.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/26.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/27.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/28.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/29.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/30.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/31.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/32.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/33.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/34.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/35.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/36.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/37.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/38.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/39.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/40.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/41.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/42.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/43.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/44.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/32.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/33.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/34.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/35.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/36.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/37.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/38.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/39.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/40.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/41.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/42.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  },
  {
    image: 'image/43.jpg',
    title: 'Segun Adebayo',
    description: 'Creator, Chakra UI',
    level: 2.18
  }
];
function WallOfFame() {
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
          <Text _hover={{ borderBottom: '3px solid red' }} cursor="pointer" mr="8">
            Solutions
          </Text>

          <Text _hover={{ borderBottom: '3px solid red' }} cursor="pointer" mr="8">
            Tags
          </Text>
          <Text _hover={{ borderBottom: '3px solid red' }} cursor="pointer">
            Wall of Fame
          </Text>
        </Flex>
      </Flex>
      <Flex ml="20" gap="615px" mt="20">
        <Text fontWeight="88px" fontSize="4xl">
          Wall of Fame
        </Text>
        <Flex justifyContent="flex-end">
          <Tabs mb="6" colorScheme="blue" ml="20">
            <TabList>
              <Tab fontSize="lg" fontWeight="bold">
                This week
              </Tab>
              <Tab fontSize="lg" fontWeight="bold">
                This month
              </Tab>
              <Tab fontSize="lg" fontWeight="bold">
                This year
              </Tab>
              <Tab fontSize="lg" fontWeight="bold">
                All time
              </Tab>
            </TabList>
          </Tabs>
        </Flex>
      </Flex>
      <Flex mr="-10" justifyContent="end">
        <ModalCard />
      </Flex>
      <Flex mb="40" flexWrap="wrap" ml="20" gap="8">
        {AVATAR_ITEMS.map((item) => (
          <AvatarCard
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
            level={item.level}
          />
        ))}
      </Flex>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <MainSearch />
      </Flex>
      <Aside />
    </>
  );
}

export default WallOfFame;
