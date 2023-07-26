import {
  Text,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  Heading,
  PopoverFooter,
  VStack,
  Box,
} from "@chakra-ui/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import SupportQuestions from "./SupportQuestions";
import { BiSupport } from "react-icons/bi";

const SupportTeamOnline = () => {
  return (
    <Box position="fixed" top="90%" left="2rem" zIndex={52}>
      <Popover>
        <PopoverTrigger>
          <Button
            color="#fff"
            background="#ef394e"
            boxSize="50px"
            padding={2}
            borderRadius="100%"
          >
            <BiSupport size="100%" />
          </Button>
        </PopoverTrigger>
        <PopoverContent marginX={5} maxH="500px" overflowY="auto">
          <PopoverArrow />
          <PopoverHeader background="#ef3f55" color="#fff">
            <Text dir="rtl">پشتیبانی آنلاین</Text>
          </PopoverHeader>
          <PopoverBody>
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
          </PopoverBody>
          <PopoverFooter justifyContent="center">
            <VStack>
              <Text>جواب سوالتون رو پیدا نکردید ؟</Text>
              <Button color="#fff" colorScheme="cyan">
                <MdKeyboardArrowLeft />
                گفتگو با پشتیبان آنلاین
              </Button>
            </VStack>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default SupportTeamOnline;
