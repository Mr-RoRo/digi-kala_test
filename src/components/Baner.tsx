import { HStack, Image, Link, Show } from "@chakra-ui/react";
import baner1 from "../assets/baner1.webp";
import baner2 from "../assets/baner2.gif";

const Baner = () => {
  return (
    <HStack marginY="2rem" justifyContent="center" padding="0 15px" w="100%">
      <Show above="base">
        <Link marginLeft={{lg:2}} w={{ base: "100%", lg: "50%" }}>
          <Image borderRadius={20}  src={baner1} />
        </Link>
      </Show>
      <Show above="lg">
        <Link marginRight={{lg:2}} w={{ base: "100%", lg: "50%" }}>
          <Image borderRadius={20}  src={baner2} />
        </Link>
      </Show>
    </HStack>
  );
};

export default Baner;
