import {
  useDisclosure,
  HStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  IconButton,
  DrawerBody,
  Image,
  Text,
  Icon,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { GrMenu } from "react-icons/gr";
import digiFa from "../assets/digi.svg";
import { IconType } from "react-icons";
import { iconsMenu } from "../data/icons-menu";
import { iconTextMenu } from "../data/icons-menu";
import { ProductsCategorization } from "./ProductsCategorization";

const iconMap: { [key: number]: IconType } = {
  0: iconsMenu[0],
  1: iconsMenu[1],
  2: iconsMenu[2],
  3: iconsMenu[3],
  4: iconsMenu[4],
  5: iconsMenu[5],
  6: iconsMenu[6],
};

export const MenuMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        aria-label="Menu"
        justifyContent="center"
        background="transparent"
        onClick={onOpen}
        icon={<GrMenu />}
      ></IconButton>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent >
          <DrawerHeader  borderBottomWidth="1px">
            <HStack dir="rtl" justifyContent="space-between">
              <Image w="90px" src={digiFa} />
            </HStack>
          </DrawerHeader>
          <DrawerBody paddingX="0" dir="rtl">
            {iconTextMenu.map((text, index) => (
              <a href="#">
                <HStack paddingX="10px" marginY="20px">
                  <Icon boxSize="25px" as={iconMap[index]}></Icon>
                  <Text>{text}</Text>
                </HStack>
              </a>
            ))}
            <Divider/>
            <Text margin={4}>دسته بندی کالاها</Text>
            <ProductsCategorization />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
