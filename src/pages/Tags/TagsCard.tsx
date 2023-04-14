import { Flex, Divider, Button, Text, Center } from '@chakra-ui/react';

function TagsCard({ text }: { text: string }) {
  return (
    <Flex
      borderRadius="lg"
      mt="12"
      border="1px solid"
      borderColor="gray.300"
      w="418px"
      h="220px"
      flexDirection="column"
    >
      <Text fontWeight="bold" fontSize="xl" ml="6" mt="8" mb="12">
        {text}
      </Text>
      <Center>
        <Divider w="90%" />
      </Center>

      <Button
        fontStyle="italic"
        borderRadius="3xl"
        color="white"
        bg="rgb(62, 84, 163)"
        mt="4"
        ml="6"
        w="25%"
        _hover={{ bg: 'blue.800' }}
        width="140px"
        height="53px"
        fontWeight="bold"
      >
        FOLLOW
      </Button>
    </Flex>
  );
}

export default TagsCard;
