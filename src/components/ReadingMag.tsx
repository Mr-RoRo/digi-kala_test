import {
  Card,
  CardBody,
  CardHeader,
  Grid,
  HStack,
  Heading,
  Image,
  Link,
  LinkOverlay,
  VStack,
} from "@chakra-ui/react";
import ReadingMagInfo from "../data/reading-mag-info";
const ReadingMag = () => {
  return (
    <>
      <HStack dir="rtl" justifyContent="space-between" margin="28px 23px 15px">
        <Heading fontSize="16px">خواندنی ها</Heading>
        <Link fontSize="12px" color="cyan">
          مطالب بیشتر در دیجی کالا مگ
        </Link>
      </HStack>
      <Grid
        gap={5}
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(4,1fr)" }}
        templateRows={{ base: "repeat(4,1fr)", lg: "repeat(1,1fr)" }}
      >
        {ReadingMagInfo.map((data) => (
          <VStack>
            <Card
              w="90%"
              borderRadius="15px"
              overflow="hidden"
              as={Link}
              key={data.id}
            >
              <CardHeader padding={0}>
                <Image w="100%" src={data.image} />
              </CardHeader>
              <CardBody>{data.title}</CardBody>
            </Card>
          </VStack>
        ))}
      </Grid>
    </>
  );
};

export default ReadingMag;
