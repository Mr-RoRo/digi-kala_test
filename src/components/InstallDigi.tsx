import { HStack, Heading, IconButton, Image, Show, Stack, VStack } from "@chakra-ui/react";
import bazar from "../assets/coffe-bazzar.svg";
import myket from "../assets/myket.svg";
import sibApp from "../assets/sib-app.svg";
import footerLogo from "../assets/footerlogo2.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
const images = [bazar, myket, sibApp];

const InstallDigi = () => {
  return (
    <>
      <Show below="lg">
        <Stack
          marginBottom={22}
          direction="column"
          justifyContent="space-around"
          color="#fff"
          background="#3c4b6d"
          w="100%"
          h="9rem"
          borderRadius="15px"
        >
          <HStack justifyContent="center">
            <Image boxSize="35px" src={footerLogo} />
            <Heading fontSize="16px"> دانلود اپلیکیشن دیجی‌کالا</Heading>
          </HStack>
          <HStack  justifyContent="center">
            {images.map((image) => (
              <Image w={{base:"7rem" , md:"10rem"}} src={image} />
            ))}
          </HStack>
          <VStack>
            <HStack>
              <a href="#">اطلاعات بیشتر</a>
              <MdKeyboardArrowLeft />
            </HStack>
          </VStack>
        </Stack>
      </Show>
      <Show above="lg">
        <Stack
          marginBottom={22}
          direction="row"
          justifyContent="space-between"
          paddingX="1rem"
          color="#fff"
          background="#3c4b6d"
          w="100%"
          h="5rem"
          borderRadius="15px"
        >
          <HStack justifyContent="center">
            <Image boxSize="50px" src={footerLogo} />
            <Heading fontSize="25px"> دانلود اپلیکیشن دیجی‌کالا</Heading>
          </HStack>
          <HStack justifyContent="center">
            {images.map((image) => (
              <Image src={image} />
            ))}
            <IconButton aria-label={"more"} icon={<BsThreeDots size="25px" />}>

            </IconButton>
          </HStack>
        </Stack>
      </Show>
    </>
  );
};

export default InstallDigi;
