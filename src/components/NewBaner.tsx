import { Grid, GridItem, Image } from "@chakra-ui/react";
import baner1 from "../assets/baner3.webp";
import baner2 from "../assets/baner4.webp";

const NewBaner = () => {
  return (
    <Grid
    marginX={5}
      templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)", }}
      templateRows={{base:"repeat(2,1fr)" , lg:"repeat(1,1fr)",}}
    >
      <GridItem padding={1}>
        <Image borderRadius={12} w="100%" src={baner1} />
      </GridItem>
      <GridItem padding={1}>
        <Image borderRadius={12} w="100%" src={baner2} />
      </GridItem>
    </Grid>
  );
};

export default NewBaner;
