import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  VStack,
  useDisclosure,
  Text,
  HStack,
  SimpleGrid,
  Image,
  Box,
  Link,
  LinkBox,
  LinkOverlay,
  Show,
  ModalContent,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Grid,
} from "@chakra-ui/react";
import { BsArrowLeftShort, BsThreeDots } from "react-icons/bs";
import { HiArrowLeft } from "react-icons/hi";
import { Service } from "../data/company-image";
import { serviceGroup } from "../data/company-image";

const MoreCompony = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <VStack>
        <IconButton
          onClick={onOpen}
          borderRadius="100%"
          boxSize="50px"
          aria-label={"More"}
          icon={<BsThreeDots />}
        ></IconButton>
        <Text textAlign="center" fontSize="12px">
          بیشتر
        </Text>
      </VStack>
      <Show below="lg">
        <Drawer
          placement={"bottom"}
          size="full"
          onClose={onClose}
          isOpen={isOpen}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              <HStack dir="rtl" justifyContent="space-between">
                <Text>خدمات دیجی کالا</Text>
                <IconButton
                  background="transparent"
                  onClick={onClose}
                  aria-label={"Close"}
                  icon={<HiArrowLeft size="25px" />}
                />
              </HStack>
            </DrawerHeader>
            <DrawerBody>
              <SimpleGrid marginY="3rem" rowGap="3rem" columns={3}>
                {Service.map((image) => (
                  <VStack>
                    <Image boxSize="48px" src={image.image} />
                    <Text fontSize="10px" textAlign="center">
                      {image.title}
                    </Text>
                  </VStack>
                ))}
              </SimpleGrid>
              <Text marginBottom={3} fontSize="14px" color="gray.500">
                سرویس‌های گروه دیجی‌کالا
              </Text>
              {serviceGroup.map((image) => (
                <HStack
                  justifyContent="space-between"
                  as={Link}
                  href="#"
                  padding={3}
                  borderBottom="1px solid #ccc"
                  dir="rtl"
                >
                  <HStack>
                    <Image boxSize="50px" src={image.image} />
                    <Box>
                      <Text fontSize="15px">{image.title}</Text>
                      <Text color="gray.500" fontSize="12px">
                        {image.title}
                      </Text>
                    </Box>
                  </HStack>
                  <BsArrowLeftShort size="30px" color="gray" />
                </HStack>
              ))}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>
      <Show above="lg">
        <Modal
          scrollBehavior="inside"
          onClose={onClose}
          isOpen={isOpen}
          isCentered
          size="2xl"
        >
          <ModalOverlay />
          <ModalContent w="50%" >
            <ModalHeader>
              <HStack dir="rtl" justifyContent="space-between">
                <Text>خدمات دیجی کالا</Text>
                <IconButton
                  background="transparent"
                  onClick={onClose}
                  aria-label={"Close"}
                  icon={<HiArrowLeft size="25px" />}
                />
              </HStack>
            </ModalHeader>
            <ModalBody>
              <SimpleGrid marginY="3rem" rowGap="3rem" columns={3}>
                {Service.map((image) => (
                  <VStack>
                    <Image boxSize="48px" src={image.image} />
                    <Text fontSize="10px" textAlign="center">
                      {image.title}
                    </Text>
                  </VStack>
                ))}
              </SimpleGrid>
              <Text marginBottom={3} fontSize="14px" color="gray.500">
                سرویس‌های گروه دیجی‌کالا
              </Text>
              <Grid
                templateColumns="repeat(2,1fr)"
                templateRows="repeat(4,1fr)"
                justifyContent="space-between"
                gap={3}
                dir="rtl"
              >
                {serviceGroup.map((image) => (
                  <>
                    <HStack padding="8px 10px " border="1px solid #ccc" borderRadius="10px" as={Link} href="#" justifyContent="space-between">
                      <HStack>
                        <Image boxSize="50px" src={image.image} />
                        <Box>
                          <Text fontSize="15px">{image.title}</Text>
                          <Text color="gray.500" fontSize="12px">
                            {image.title}
                          </Text>
                        </Box>
                      </HStack>
                      <BsArrowLeftShort size="30px" color="gray" />
                    </HStack>
                  </>
                ))}
              </Grid>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Show>
    </>
  );
};

export default MoreCompony;
