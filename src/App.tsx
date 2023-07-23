import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ImgaeSlider from "./components/ImgaeSlider";
import OtherCompany from "./components/OtherCompany";
import { SliderProducts } from "./components/SliderProducts";

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
      </GridItem>
      <GridItem area={"footer"}></GridItem>
    </Grid>
  );
}

export default App;
