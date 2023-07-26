import {
  Text,
  HStack,
  VStack,
  Icon,
  Heading,
  Image,
  ComponentWithAs,
  StackProps,
} from "@chakra-ui/react";

import digiclupData from "../data/digiclup-data";
import { useEffect, useState } from "react";

const DigiClub = () => {
  const [VvV, setVvV] = useState<ComponentWithAs<"div", StackProps>>(VStack);
  useEffect(() => {
    setVvV(window.innerWidth < 1024 ? VStack : HStack);
  }, [VvV]);
  return (
    <VvV
      marginY="1rem"
      justifyContent={{ base: "center", lg: "space-around" }}
      w="100%"
      borderRadius={{ base: 0, lg: "15px" }}
      h="12rem"
      background="linear-gradient(143deg, rgba(53,166,200,1) 0%, rgba(0,114,149,1) 100%)"
    >
      <Heading color="#fff" paddingY={1}>
        digiclub
      </Heading>
      <HStack fontSize="14px" borderRadius="15px" overflow="hidden">
        {digiclupData.map((data) => (
          <VStack key={data.title} boxSize="120px" background="#fff">
            <Icon as={data.icon} boxSize="40px" color="cyan" />
            <Text>{data.title}</Text>
            <Image src={data.image} />
          </VStack>
        ))}
      </HStack>
    </VvV>
  );
};

export default DigiClub;
