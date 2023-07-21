import { Flex, HStack, Input, InputGroup, InputRightElement, Link } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

export const SearchBar = () => {
  return (
    <HStack>
      <Link>
        <AiOutlineShoppingCart size="25px" />
      </Link>
      <Link paddingX={5}>
        <Flex>
          ورود
          <BiLogIn size="25px" />
        </Flex>
      </Link>
      <InputGroup>
        <InputRightElement children={<BsSearch />} />
        <Input background="gray.100" placeholder="جستجو" />
      </InputGroup>
    </HStack>
  );
};
