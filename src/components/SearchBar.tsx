import {
  Flex,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

export const SearchBar = () => {
  return (
    <HStack>
      <a href="#">
        <AiOutlineShoppingCart size="25px" />
      </a>
      <a href="#">
        <Flex paddingX="5px">
          ورود
          <BiLogIn size="25px" />
        </Flex>
      </a>
      <InputGroup>
        <InputRightElement children={<BsSearch />} />
        <Input background="gray.100" placeholder="جستجو" />
      </InputGroup>
    </HStack>
  );
};
