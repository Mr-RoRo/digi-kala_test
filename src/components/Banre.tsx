import { HStack, Image, Link, Show } from "@chakra-ui/react";
import baner1 from "../assets/baner1.webp";
import baner2 from "../assets/baner2.gif";
const images = [baner1, baner2];

const Banre = () => {
  return (
    <HStack justifyContent="center" padding="0 15px" w="100%">
      <Show above="base">
        <Link w={{ base: "100%", lg: "50%" }}>
          <Image  src={baner1} />
        </Link>
      </Show>
      <Show above="lg">
        <Link w={{ base: "100%", lg: "50%" }}>
          <Image  src={baner2} />
        </Link>
      </Show>
    </HStack>
  );
};

export default Banre;
