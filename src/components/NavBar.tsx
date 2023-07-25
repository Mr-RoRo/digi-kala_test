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
        <HStack marginBottom={3} justifyContent="space-between">
          <LoginCardBtn />
          <SearchBar />
          <Image src={logo} />
        </HStack>
        <HStack justifyContent="space-between">
          <SelectCity />
          <MenuLg />
        </HStack>
      </Show>
    </Box>
  );
};

export default NavBar;
