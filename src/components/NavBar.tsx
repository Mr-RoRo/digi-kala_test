import { HStack, Link, Image, Divider } from "@chakra-ui/react";
import { GrMenu } from "react-icons/gr";
import logo from "../assets/logo.svg";
import { SearchBar } from "./SearchBar";
import { SelectCity } from "./SelectCity";
import SupportOnline from "./SupportOnline";
const NavBar = () => {
  return (
    <>
      <HStack marginBottom={3} justifyContent="space-between">
        <Link>
          <SupportOnline />
        </Link>
        <Image src={logo} />
        <Link>
          <GrMenu size="25px" />
        </Link>
      </HStack>
      <Divider marginBottom={2} />
      <SearchBar />
      <Divider marginTop={2} />
      <SelectCity />
    </>
  );
};

export default NavBar;
