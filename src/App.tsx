import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar"

function App() {

  return (
    <Grid
      templateAreas={`"nav" "main" "footer"`}
    >
      <GridItem padding={3} area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"main"}>
        
      </GridItem>
      <GridItem area={"footer"}>
        
      </GridItem>
    </Grid>
  )
}

export default App
