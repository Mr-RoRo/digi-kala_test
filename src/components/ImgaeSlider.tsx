import { Box, ButtonGroup, IconButton, Image } from "@chakra-ui/react";
import images from "../data/images";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";

const ImgaeSlider = () => {
  const [index, setIndex] = useState(0);
  const handleBack = () => {
    if (index === 0) {
      setIndex(2);
    } else {
      setIndex(index - 1);
    }
  };
  const handleForward = () => {
    if (index === 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleForward();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);
  return (
    <>
      <Box position="relative">
        <Image objectFit={"cover"} w="100%" h={"17rem"} src={images[index]} />
        <ButtonGroup position="absolute" bottom="7" right="2">
          <IconButton
            onClick={handleBack}
            borderRadius="100%"
            aria-label="Back"
            icon={<IoIosArrowBack size="25px" />}
          ></IconButton>
          <IconButton
            onClick={handleForward}
            borderRadius="100%"
            aria-label="Forward"
            icon={<IoIosArrowForward size="25px" />}
          ></IconButton>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default ImgaeSlider;
