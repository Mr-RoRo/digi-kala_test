import { iconsMenu } from "../data/icons-menu";
import { iconTextMenu } from "../data/icons-menu";
import style from "./SliderProducts.module.css";
import { GrMenu } from "react-icons/gr";
import { IconType } from "react-icons";
import { Center, Divider, HStack, Icon, Text } from "@chakra-ui/react";
import CategoryLarge from "./CategoryLarge";

const iconMap: { [key: number]: IconType } = {
  0: iconsMenu[0],
  1: iconsMenu[1],
  2: iconsMenu[2],
  3: iconsMenu[3],
};

export const MenuLg = () => {
  return (
    <HStack dir="rtl">
      <HStack className={style.underLineEff}>
        <Icon as={GrMenu} />
        <CategoryLarge />
        {/* <Text fontSize="14px" >دسته بندی کالا ها</Text> */}
      </HStack>
      <Center height="25px">
        <Divider orientation="vertical" />
      </Center>
      {iconTextMenu.map((text, index) => (
        <HStack  key={index}>
          {index === 4 && (
            <Center height="25px">
              <Divider orientation="vertical" />
            </Center>
          )}
          <a className={style.underLineEff} href="#">
            <HStack fontSize="12px" marginX={2} color="#888">
              {index < 4 && <Icon as={iconMap[index]} />}
              <Text>{text}</Text>
            </HStack>
          </a>
        </HStack>
      ))}
    </HStack>
  );
};
