import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
interface Props {
  heading: string;
  images: string[];
}

const ProductPeshnahadi = ({ heading, images }: Props) => {
  return (
    <Box
      borderBottom={{ base: "1px solid #ccc", lg: 0 }}
      margin={5}
      lineHeight={8}
    >
      <Heading fontSize="14px">{heading}</Heading>
      <Text fontSize="12px">بر اساس بازدیدهای شما</Text>
      <Grid templateColumns={"repeat(2,1fr)"} templateRows={"repeat(2,1fr)"}>
        {images.map((image, index) => (
          <GridItem key={index} paddingY={2}>
            <VStack>
              <Image boxSize={{ 425: "155px" }} src={image} />
            </VStack>
          </GridItem>
        ))}
      </Grid>
      <VStack color="cyan" as={Link} href="#">
        <HStack>
          <IoIosArrowBack />
          <Text fontSize="12px">مشاهده</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProductPeshnahadi;
