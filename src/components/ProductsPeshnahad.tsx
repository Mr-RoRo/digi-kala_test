import ProductPeshnahadi from "./ProductPeshnahadi";
import { Grid, GridItem } from "@chakra-ui/react";

interface Products {
  id: number;
  title: string;
  images: string[];
}

interface Props {
  Products : Products[]
}

const ProductsPeshnahad = ({Products} : Props) => {
  return (
    <Grid
      margin={5}
      borderRadius={10}
      paddingY={1}
      borderY={{ lg: "1px solid #ccc" }}
      templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(4,1fr)" }}
      templateRows={{ base: "repeat(4,1fr)", lg: "repeat(1,1fr)" }}
    >
      {Products.map((info) => (
        <GridItem key={info.title} borderX={{ lg: "1px solid #ccc" }}>
          <ProductPeshnahadi
            heading={info.title}
            images={info.images.map((image) => image)}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProductsPeshnahad;
