import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

import { BsSearch } from "react-icons/bs";

export const SearchBar = () => {
  return (
    <InputGroup marginX={3}>
      <InputRightElement children={<BsSearch />} />
      <Input background="gray.100" placeholder="جستجو" />
    </InputGroup>
  );
};
