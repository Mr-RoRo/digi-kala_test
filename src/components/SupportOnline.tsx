import {
  useDisclosure,
  HStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  IconButton,
  DrawerBody,
  Text,
  Heading,
  DrawerFooter,
  Button,
  VStack,
} from "@chakra-ui/react";
import { HiArrowLeft } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { BsQuestionSquare } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import SupportQuestions from "./SupportQuestions";

const SupportOnline = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Support"
        icon={<BsQuestionSquare size="25px" />}
        background="transparent"
        onClick={onOpen}
      >
        <IoIosArrowBack />
        <HStack>
          <GrLocation />
        </HStack>
      </IconButton>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            background="#ef3f55"
            color="#fff"
            borderBottomWidth="1px"
          >
            <HStack dir="rtl" justifyContent="space-between">
              <Text>پشتیبانی آنلاین</Text>
              <IconButton
                background="transparent"
                color="#fff"
                onClick={() => onClose()}
                aria-label={"Close"}
                icon={<HiArrowLeft size="25px" />}
              />
            </HStack>
          </DrawerHeader>
          <DrawerBody paddingRight={3} lineHeight={2}>
            <Heading marginBottom={3} fontSize="16px">
              👋👋 سلام
            </Heading>
            <Text fontSize="14px">
              .جواب سوال‌هاتون رو می‌تونید در زیر پیدا کنید
            </Text>
            <Text fontSize="14px">
              😊 .در غیر اینصورت از ما بپرسید، ما همیشه به سوالاتتون جواب می‌دیم
            </Text>
            <SupportQuestions />
          </DrawerBody>
          <DrawerFooter justifyContent="center">
            <VStack>
              <Text>جواب سوالتون رو پیدا نکردید ؟</Text>
              <Button color="#fff" colorScheme="cyan">
                <MdKeyboardArrowLeft />
                گفتگو با پشتیبان آنلاین
              </Button>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SupportOnline;
