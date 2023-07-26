import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import OtherCompany from "./components/OtherCompany";
import { SliderProducts } from "./components/SliderProducts";
import AdsGrid from "./components/AdsGrid";
import Categoryes from "./components/Categoryes";
import Banre from "./components/Baner";
import { DigiPshnahad } from "./components/DigiPshnahad";
import { BrandSlider } from "./components/BrandSlider";
import NewBaner from "./components/NewBaner";
import ProductsPeshnahad from "./components/ProductsPeshnahad";
import { ImageSSlider } from "./components/ImageSlider";
import SupportTeamOnline from "./components/SupportTeamOnline";
import DigiClub from "./components/DigiClub";
import productsInfo from "./data/products-peshnahadi";
import productsNew from "./data/products-new";
import ReadingMag from "./components/ReadingMag";

function App() {
  return (
    <Grid
      templateAreas={`"nav nav"
    "main main"
    "footer footer"`}
    >
      <GridItem
        padding={{ base: "12px 5px 5px 12px", lg: "12px 12px 5px 12px" }}
        area={"nav"}
      >
        <NavBar />
      </GridItem>
      <GridItem area={"main"}>
        <ImageSSlider />
        <Box w="99vw" h="100vh" paddingX={{ xl: "45px", "2xl": "20rem" }}>
          <OtherCompany />
          <SliderProducts />
          <AdsGrid />
          <Categoryes />
          <Banre />
          <DigiPshnahad />
          <BrandSlider />
          <NewBaner />
          <ProductsPeshnahad Products={productsInfo} />
          <DigiClub />
          <ProductsPeshnahad Products={productsNew} />
          <ReadingMag />
        </Box>
        <Show above="lg">
          <SupportTeamOnline />
        </Show>
        <GridItem area={"footer"}></GridItem>
      </GridItem>
    </Grid>
  );
}

export default App;
