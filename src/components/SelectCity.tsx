import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Text,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

export const SelectCity = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        alignItems="center"
        justifyContent="space-between"
        background="transparent"
        w="100%"
        onClick={onOpen}
      >
        <IoIosArrowBack />
        <HStack>
          <Text paddingX={2}>انتخاب شهر</Text>
          <GrLocation />
        </HStack>
      </Button>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <HStack dir="rtl" justifyContent="space-between">
              <Text>انتخاب شهر</Text>
              <IconButton
                background="transparent"
                onClick={() => onClose()}
                aria-label={"Close"}
                icon={<AiOutlineClose />}
              />
            </HStack>
          </DrawerHeader>
          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
