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
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { cityes } from "../data/cityes-data";

export const SelectCity = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
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
        <DrawerContent dir="rtl">
          <DrawerHeader borderBottomWidth="1px">
            <HStack justifyContent="space-between">
              <Text>انتخاب شهر</Text>
              <IconButton
                background="transparent"
                onClick={() => onClose()}
                aria-label={"Close"}
                icon={<AiOutlineClose />}
              />
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            {cityes.map((city) => (
              <Accordion
                key={city.title}
                w="100%"
                marginTop={6}
                fontSize="13px"
                dir="rtl"
                allowMultiple
              >
                <AccordionItem key={city.id} padding={2}>
                  <h2>
                    <AccordionButton>
                      <Box fontSize="15px" as="span" flex="1" textAlign="right">
                        {city.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {city.content.map((content) => (
                      <HStack key={content.title} padding={1}>
                        <Button w="100%">{content.title}</Button>
                      </HStack>
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
