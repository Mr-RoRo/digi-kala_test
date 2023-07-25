import ProductPeshnahadi from "./ProductPeshnahadi";
import productsInfo from "../data/products-peshnahadi";
import { Grid, GridItem } from "@chakra-ui/react";

const ProductsPeshnahad = () => {
  return (
    <Grid
      margin={5}
      borderRadius={10}
      paddingY={1}
      borderY={{ lg: "1px solid #ccc" }}
      templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(4,1fr)" }}
      templateRows={{ base: "repeat(4,1fr)", lg: "repeat(1,1fr)" }}
    >
      {productsInfo.map((info) => (
        <GridItem borderX={{ lg: "1px solid #ccc" }}>
          <ProductPeshnahadi
            key={info.id}
            heading={info.title}
            images={info.images.map((image) => image)}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProductsPeshnahad;
