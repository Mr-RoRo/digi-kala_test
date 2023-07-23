import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Badge,
  Text,
  HStack,
} from "@chakra-ui/react";
import styles from "./SliderProducts.module.css";
import { price } from "../data/image-cards-info";
import { off } from "../data/image-cards-info";

interface Props {
  image: string;
  index: number;
}

export const ImageCards = ({ image, index }: Props) => {
  const Price = price[index].number;
  const offPrice = off[index].off;
  const finalOff = Price - (Price * offPrice) / 100;
  return (
    <Card dir="ltr" className={styles.ImageCards}>
      <CardHeader w="100%" h="150px" display="block" overflow="hidden">
        <Image
          w="100%"
          h="100%"
          display="block"
          pointerEvents="none"
          src={image}
        />
      </CardHeader>
      <CardBody>
        <HStack
          fontSize="1rem"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>{finalOff}</Text>
          <Badge fontSize="0.8rem" variant="solid" colorScheme="red">
            {off[index].offTitle}
          </Badge>
        </HStack>
      </CardBody>
    </Card>
  );
};
