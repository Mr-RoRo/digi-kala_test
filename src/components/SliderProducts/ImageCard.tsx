import { Card, CardHeader, HStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import imagesDrag from "D:/code/digi-kala/src/data/image-darg.ts";

interface Props {
  left: number
}

export const ImageCard = ({left} : Props) => {
  

  return (
      <motion.div drag='x' dragConstraints={{right: 0 , left:-left}}>
    <HStack minW="50rem">
    {imagesDrag.map((image,index) => (
        <Card key={index}>
        <CardHeader>
          <Image pointerEvents="none" src={image} />
        </CardHeader>
      </Card>
    ))}
    </HStack>
    </motion.div>
  );
};
