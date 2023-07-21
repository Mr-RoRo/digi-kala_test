import { HStack, Image, Divider } from "@chakra-ui/react";

import logo from "../assets/logo.svg";
import { SearchBar } from "./SearchBar";
import { SelectCity } from "./SelectCity";
import SupportOnline from "./SupportOnline";
import { MenuMobile } from "./MenuMobile";
const NavBar = () => {
  return (
    <>
      <HStack marginBottom={3} justifyContent="space-between">
        <SupportOnline />
        <Image src={logo} />
        <MenuMobile />
      </HStack>
      <Divider marginBottom={2} />
      <SearchBar />
      <Divider marginTop={2} />
      <SelectCity />
    </>
  );
};

export default NavBar;
