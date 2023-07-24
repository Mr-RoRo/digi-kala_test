import {
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import categoryInfo from "../data/category-info";

const Categoryes = () => {
  return (
    <>
      <Heading fontSize={{base:"18px",lg:"21px"}} marginY={10} textAlign="center">دسته بندی های دیجی کالا</Heading>
      <Grid
        marginY={5}
        marginX={{base:20 , lg:8}}
        justifyItems="center"
        gap={{ base: "3", lg: "2" }}
        templateColumns={{
          base: "repeat(3,1fr)",
          lg: "repeat(6,1fr)",
        }}
        templateRows={{
          base: "repeat(4,1fr)",
          lg: "repeat(2,1fr)",
        }}
      >
        {categoryInfo.map((info, index) => (
          <GridItem key={index}>
            <a href="#">
              <VStack>
                <Image
                  boxSize={{ base: "90px", lg: "170px" }}
                  src={info.image}
                />
                <Text fontSize="12px" textAlign="center">{info.categoryName}</Text>
              </VStack>
            </a>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Categoryes;
