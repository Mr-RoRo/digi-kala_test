import {
  Flex,
  Show,
  Button,
  Link,
  Divider,
  Center,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";

const LoginCardBtn = () => {
  return (
    <>
      <Show below="lg">
        <a href="#">
          <AiOutlineShoppingCart size="25px" />
        </a>
        <a href="#">
          <Flex paddingX="5px">
            ورود
            <BiLogIn size="25px" />
          </Flex>
        </a>
      </Show>
      <Show above="lg">
        <a href="#">
          <AiOutlineShoppingCart size="25px" />
        </a>
        <Center height="25px">
          <Divider orientation="vertical" />
        </Center>
        <Button fontSize="12px" marginRight={35} variant="outline" as={Link} href="#">
          ورود | ثبت نام
          <BiLogIn size="50px" />
        </Button>
      </Show>
    </>
  );
};

export default LoginCardBtn;
