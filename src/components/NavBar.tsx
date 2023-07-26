import { HStack, Image, Divider, Show, Box } from "@chakra-ui/react";

import logo from "../assets/logo.svg";
import { SearchBar } from "./SearchBar";
import { SelectCity } from "./SelectCity";
import SupportOnline from "./SupportOnline";
import { MenuMobile } from "./MenuMobile";
import LoginCardBtn from "./LoginCardBtn";
import { MenuLg } from "./MenuLg";
const NavBar = () => {
  return (
    <Box>
      <Show below="lg">
        <HStack marginBottom={3} justifyContent="space-between">
          <SupportOnline />
          <Image src={logo} />
          <MenuMobile />
        </HStack>
        <Divider marginBottom={2} />
        <HStack>
          <LoginCardBtn />
          <SearchBar />
        </HStack>
        <Divider marginTop={2} />
        <SelectCity />
      </Show>
      <Show above="lg">
        <HStack
        paddingX={3}
          h="4rem"
          background="#fff"
          position="fixed"
          top={0}
          right="0"
          left="0"
          marginBottom={3}
          justifyContent="space-between"
          zIndex={2}
        >
          <LoginCardBtn />
          <SearchBar />
          <Image src={logo} />
        </HStack>
        <HStack marginTop="3rem" justifyContent="space-between">
          <SelectCity />
          <MenuLg />
        </HStack>
      </Show>
    </Box>
  );
};

export default NavBar;
