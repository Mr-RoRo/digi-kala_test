import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Text,
  Divider,
  Center,
  Button,
  Heading,
  Stack,
  Grid,
  Mark,
  GridItem,
} from "@chakra-ui/react";
import { headingCategorys } from "../data/categoryes";
import { useState } from "react";
const CategoryLarge = () => {
  const [btnRef, setBtnRef] = useState(0);
  return (
    <Popover placement="bottom-end" openDelay={0} trigger="hover">
      <PopoverTrigger>
        <Text fontSize="14px">دسته بندی کالاها</Text>
      </PopoverTrigger>
      <PopoverContent h="25rem" w="95vw">
        <PopoverArrow />
        <Stack direction="row">
          <Stack direction="column">
            {headingCategorys.map((info, index) => (
              <Button
                onMouseEnter={() => {
                  setBtnRef(index);
                }}
                _hover={{ color: "#ef394e", background: "#FFF3F5" }}
                background="transparent"
                w="10rem"
                key={index + 300}
              >
                {info.title}
              </Button>
            ))}
          </Stack>
          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>
          <PopoverBody>
            <Grid
              gap={{ lg: "1rem", xl: "5rem" }}
              justifyContent="space-between"
              templateColumns={"repeat(5,1fr)"}
            >
              {headingCategorys[btnRef].content.map((info) => (
                <GridItem key={info.id + 50}>
                  <Heading fontSize="14px">
                    <Mark fontSize="25px" color="red">
                      |
                    </Mark>
                    {info.title}
                  </Heading>
                  {info.content.map((content) => (
                    <Text key={content.id + 150} fontSize="12px">
                      {content.content}
                    </Text>
                  ))}
                </GridItem>
              ))}
            </Grid>
          </PopoverBody>
        </Stack>
      </PopoverContent>
    </Popover>
  );
};

export default CategoryLarge;
