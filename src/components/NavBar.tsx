import { HStack, Link, Image, Divider } from "@chakra-ui/react";
import { BsQuestionSquare } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import logo from "../assets/logo.svg";
import { SearchBar } from "./SearchBar";
const NavBar = () => {
  return (
    <>
      <HStack marginBottom={3} justifyContent="space-between">
        <Link>
          <BsQuestionSquare size="25px" />
        </Link>
        <Image src={logo} />
        <Link>
          <GrMenu size="25px" />
        </Link>
      </HStack>
      <Divider marginBottom={2}/>
      <SearchBar />
      
    </>
  );
};

export default NavBar;
