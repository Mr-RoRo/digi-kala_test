import { Grid, GridItem, Image, LinkOverlay } from "@chakra-ui/react";
import adsImages from "../data/ads-images";
const AdsGrid = () => {
  return (
    <Grid
    marginY={5}
    marginX={5}
    gap={5}
      templateColumns={{
        base: "repeat(2,1fr)",
        lg: "repeat(4,1fr)",
      }}
      templateRows={{
        base: "repeat(2,1fr)",
        lg: "repeat(1,1fr)",
      }}
    >
      {adsImages.map((image,index) => (
        <GridItem key={index}>
            <LinkOverlay href="#">
                <Image borderRadius="1rem" src={image} />
            </LinkOverlay>
        </GridItem>
      ))}
    </Grid>
  );
};

export default AdsGrid;
