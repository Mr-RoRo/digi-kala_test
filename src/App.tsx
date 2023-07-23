import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ImgaeSlider from "./components/ImgaeSlider";
import OtherCompany from "./components/OtherCompany";
import { SliderProducts } from "./components/SliderProducts";
import AdsGrid from "./components/AdsGrid";
import Categoryes from "./components/Categoryes";
import Banre from "./components/banre";

function App() {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <GridItem padding="12px 12px 5px 12px" area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"main"}>
        <ImgaeSlider />
        <OtherCompany />
        <SliderProducts />
        <AdsGrid />
        <Categoryes />
        <Banre />
      </GridItem>
      <GridItem area={"footer"}></GridItem>
    </Grid>
  );
}

export default App;
