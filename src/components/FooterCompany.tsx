import { Grid, Image, VStack } from "@chakra-ui/react";
import footerCompanyLogo from "../data/footer-company-logo";

const FooterCompany = () => {
  return (
    <Grid
      background="#f1f2f4"
      templateColumns={{ base: "repeat(3,1fr)", lg: "repeat(9,1fr)" }}
      templateRows={{ base: "repeat(6,1fr)", lg: "repeat(2,1fr)" }}
    >
      {footerCompanyLogo.map((image) => (
        <VStack border="1px solid #e0e0e6" padding="1rem">
          <Image src={image} />
        </VStack>
      ))}
    </Grid>
  );
};

export default FooterCompany;
