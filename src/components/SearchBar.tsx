import { Flex, HStack, Input, Link } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";

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
      <Input background="gray.100" textAlign={"right"} placeholder="جستجو" />
    </HStack>
  );
};
