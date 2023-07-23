import ProductPeshnahadi from "./ProductPeshnahadi";
import productsInfo from "../data/products-peshnahadi";
import { Grid } from "@chakra-ui/react";

const ProductsPeshnahad = () => {
  return (
    <Grid
      margin={5}
      borderRadius={15}
      border={{ lg: "1px solid #ccc" }}
      templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(4,1fr)" }}
      templateRows={{ base: "repeat(4,1fr)", lg: "repeat(1,1fr)" }}
    >
      {productsInfo.map((info) => (
        <ProductPeshnahadi
          key={info.id}
          heading={info.title}
          images={info.images.map((image) => image)}
        />
      ))}
    </Grid>
  );
};

export default ProductsPeshnahad;
