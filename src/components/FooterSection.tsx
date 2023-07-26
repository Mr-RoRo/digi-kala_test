import {
  Box,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Show,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import digikalaLogo from "../assets/digi.svg";
import { footerInfo } from "../data/footer-info";
import { footerItem } from "../data/footer-info";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { SiAparat } from "react-icons/si";
import { FormEmail } from "./FormEmail";
import InstallDigi from "./InstallDigi";
import FooterCompany from "./FooterCompany";
const FooterSection = () => {
  return (
    <Box
      marginY="6rem"
      dir="rtl"
      w="100vw"
      h="20rem"
      borderTop="1px solid #ccc"
    >
      <Box paddingX={{ base: "1.3rem", lg: "2rem", "2xl": "5rem" }}>
        <Image marginY="1.5rem" src={digikalaLogo} />
        <Text paddingBottom="2rem" fontSize="12px" color="#3f4064">
          تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱ | ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
        </Text>
      </Box>
      <Show above="lg">
        <HStack
          paddingX={{ base: "1.3rem", lg: "2rem", "2xl": "5rem" }}
          justifyContent="space-between"
        >
          {footerInfo.map((info) => (
            <VStack key={info.id}>
              <Image src={info.image} />
              <Text color="#3f4064" fontSize="13px">
                {info.title}
              </Text>
            </VStack>
          ))}
        </HStack>
      </Show>
      <Grid
        paddingX={{ base: "1.3rem", lg: "2rem", "2xl": "5rem" }}
        gap={5}
        templateColumns={{ base: "repeat(2,auto)", lg: "repeat(4,1fr)" }}
        templateRows={{ base: "repeat(2,auto)", lg: "repeat(1,1fr)" }}
      >
        {footerItem.map((item) => (
          <GridItem key={item.title} marginY="2.5rem">
            <Heading paddingBottom="13px" fontSize="16px">
              {item.title}
            </Heading>
            <List>
              {item.content.map((data, index) => (
                <ListItem
                  key={index + 100}
                  paddingY="8px"
                  fontSize="12px"
                  color="#767790"
                >
                  {data}
                </ListItem>
              ))}
            </List>
          </GridItem>
        ))}
        <Show above="lg">
          <GridItem
            w="30rem"
            marginTop="4rem"
            paddingX={{ base: "1.3rem", lg: "2rem", "2xl": "5rem" }}
          >
            <Stack color="#767790">
              <Heading color="black" fontSize="18px">
                همراه ما باشید!
              </Heading>
              <HStack gap={10} marginY="1rem">
                <SiAparat size="2rem" />
                <AiFillLinkedin size="2rem" />
                <AiOutlineTwitter size="2rem" />
                <BsInstagram size="2rem" />
              </HStack>
            </Stack>
            <FormEmail />
          </GridItem>
        </Show>
      </Grid>
      <Show below="lg">
        <Box paddingX={{ base: "1.3rem", lg: "2rem", "2xl": "5rem" }}>
          <HStack justifyContent="space-between" color="#767790">
            <Heading color="black" fontSize="14px">
              همراه ما باشید!
            </Heading>
            <HStack>
              <SiAparat size="2rem" />
              <AiFillLinkedin size="2rem" />
              <AiOutlineTwitter size="2rem" />
              <BsInstagram size="2rem" />
            </HStack>
          </HStack>
          <FormEmail />
        </Box>
      </Show>
      <Box paddingX={{ base: "1.3rem", lg: "2rem", "2xl": "5rem" }}>
        <InstallDigi />
        <Divider />
        <Text
          textAlign="center"
          color="gray.500"
          fontSize="10px"
          marginY="1.5rem"
        >
          برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
          کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
          آنلاین دیجی‌کالا) است.
        </Text>
      </Box>
      <FooterCompany />
    </Box>
  );
};

export default FooterSection;
