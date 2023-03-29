import { Flex, Spacer, Text } from "@chakra-ui/react";

const FOOTER_LİST = ["Terms", "Cookie Policy", "Privacy Policy", "License"];
function Footer() {
  return (
    <>
      <Flex mb="5" mt="16" borderTop="1px solid " borderTopColor="gray.200">
        <Text ml="8" mt="5" color="gray" fontSize="19px">
          © Frontend Mentor 2019 - 2023
        </Text>
        <Spacer />
        {FOOTER_LİST.map((item) => (
          <Text
            _hover={{ borderBottom: "1px solid gray" }}
            cursor="pointer"
            fontSize="17px"
            mt="5"
            color="gray"
            mr="8"
            key={item}
          >
            {item}
          </Text>
        ))}
      </Flex>
    </>
  );
}

export default Footer;
