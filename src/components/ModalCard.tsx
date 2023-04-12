import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Badge,
  Divider,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import React from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';

function ModalCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  return (
    <Flex justifyContent="flex-end" mr="100px" mb="6">
      <Flex
        cursor="pointer"
        onClick={onOpen}
        ref={finalRef}
        tabIndex={-1}
        aria-label="Focus moved to this box"
        alignItems="center"
        fontWeight="bold"
        fontSize="17px"
        _hover={{ color: 'gray.500' }}
      >
        Learn about our challenge types
        <Text ml="1" mt="1">
          <AiFillInfoCircle color="rgb(106, 190, 205)" />
        </Text>
      </Flex>
      <Modal size="2xl" finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent position="relative">
          <ModalHeader fontSize="2xl">What are the different challenge types?</ModalHeader>
          <ModalCloseButton
            width="70px"
            height="70px"
            position="absolute"
            right="-380"
            top="-8"
            bg="white"
            fontSize="2xl"
            borderRadius="50%"
          />
          <ModalBody>
            <Flex
              borderRadius="20"
              bg="gray.100"
              color="blue.700"
              p="1"
              fontSize="lg"
              fontWeight="semibold"
              mr="1"
              px="2"
              w="16"
              alignItems="center"
              justifyContent="center"
            >
              FREE
            </Flex>
            <Text fontSize="18">
              Free challenges can be started by anyone. All the starter code including the assets
              and designs in JPG format are free to download.
            </Text>
            <br />
            <Text fontSize="18">
              There are Sketch and Figma design files for these challenges but they need to be
              purchased with design credits. Design credits are available with a
              <Badge mx="1" color="white" bg="rgb(62, 84, 163)" colorScheme="blue">
                PRO
              </Badge>
              subscription.
            </Text>
            <br />
            <Divider />
            <br />
            <Flex
              borderRadius="20"
              bg="orange.300"
              color="white"
              p="1"
              fontSize="lg"
              fontWeight="semibold"
              mr="1"
              px="2"
              w="20"
              alignItems="center"
              justifyContent="center"
            >
              FREE+
            </Flex>
            <br />
            <Text fontSize="18">
              Free+ challenges can be started by anyone. All the starter code including the assets
              are free to download.
            </Text>
            <br />
            <Text fontSize="18">
              The Sketch and Figma design files are freely available to download for all users.
              These challenges allow anyone to trial premium challenges without subscribing as a
              <Badge mx="1" color="white" bg="rgb(62, 84, 163)" colorScheme="blue">
                PRO
              </Badge>
              member.
            </Text>
            <br />
            <Divider />
            <br />
            <Flex
              borderRadius="20"
              bg="blue.700"
              color="white"
              p="1"
              fontSize="lg"
              fontWeight="semibold"
              mr="1"
              px="2"
              w="24"
              alignItems="center"
              justifyContent="center"
            >
              PREMIUM
            </Flex>
            <br />
            <Text fontSize="18">
              Premium challenges can only be started by{' '}
              <Badge mx="1" color="white" bg="rgb(62, 84, 163)" colorScheme="blue">
                PRO
              </Badge>
              members. The Sketch and Figma design files are included.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default ModalCard;
