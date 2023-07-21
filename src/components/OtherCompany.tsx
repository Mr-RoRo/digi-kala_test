import {
  Grid,
  GridItem,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import companyImage from "../data/company-image";
import { BsThreeDots } from "react-icons/bs";

const textMap: { [key: number]: string } = {
  0: "خرید عمده و سازمانی",
  1: "گیم نت",
  2: "دیجی کالا جت",
  3: "خرید اقساطی",
  4: "گزارش سال",
  5: "حراج استایل",
  6: "ارسال امروز",
};

function OtherCompany() {
  return (
    <Grid
      marginTop={6}
      dir="rtl"
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(2, 1fr)"
      gap={4}
    >
      {companyImage.map((image, index) => (
        <GridItem key={index}>
            <a href="#">
          <VStack>
              <Image boxSize="50px" src={image} />
            <Text textAlign="center" fontSize="12px">
              {textMap[index]}
            </Text>
          </VStack>
            </a>
        </GridItem>
      ))}
      <GridItem>
          <a href="#">
        <VStack>
            <IconButton
              borderRadius="100%"
              boxSize="50px"
              aria-label={"More"}
              icon={<BsThreeDots />}
            ></IconButton>
          <Text textAlign="center" fontSize="12px">
            بیشتر
          </Text>
        </VStack>
          </a>
      </GridItem>
    </Grid>
  );
}

export default OtherCompany;
