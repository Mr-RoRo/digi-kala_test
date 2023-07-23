import { Card, CardBody, CardHeader, Image } from "@chakra-ui/react";
import styles from "./SliderProducts.module.css";

interface Props {
  image: string;
}

export const ImageCards = ({ image }: Props) => {
  return (
    <Card className={styles.ImageCards}>
      <CardHeader w="100%" h="150px" display="block" overflow="hidden">
        <Image
          w="100%"
          h="100%"
          display="block"
          pointerEvents="none"
          src={image}
        />
      </CardHeader>
      <CardBody>122200</CardBody>
    </Card>
  );
};
