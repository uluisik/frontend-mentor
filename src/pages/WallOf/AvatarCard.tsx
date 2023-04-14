import { Avatar, Flex, Heading, Box, Text } from '@chakra-ui/react';

type AvatarProps = {
  image: any;
  title: string;
  description: string;
  level: number;
};
function AvatarCard({ image, title, level, description }: AvatarProps) {
  return (
    <Flex borderRadius="lg" border="1px solid" borderColor="gray.200" w="312px" h="120px">
      <Flex ml="6" gap="4" alignItems="center" flexWrap="wrap">
        <Avatar name="Segun Adebayo" src={image} />
        <Box>
          <Heading size="sm">{title}</Heading>
          <Text>{description}</Text>
          <Text>{level}</Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default AvatarCard;
