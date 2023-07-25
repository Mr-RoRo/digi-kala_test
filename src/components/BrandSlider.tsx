import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import style from "./SliderProducts.module.css";
// import required modules
import { FreeMode } from "swiper/modules";
import { HStack, Heading, Image, VStack } from "@chakra-ui/react";
import brandImages from "../data/brand-images";
import { BsStars } from "react-icons/bs";

export const BrandSlider = () => {
  return (
    <VStack paddingBottom={5} marginX={{lg:6}} border={{lg:"1px solid #ccc"}} borderRadius={15} marginY={5} dir="rtl">
      <HStack marginY={5}>
        <BsStars color="orange" size="20px" />
        <Heading fontSize={{ base: "18px", lg: "21px" }}>
          محبوب ترین برندها
        </Heading>
      </HStack>
      <Swiper
        slidesPerView={3}
        breakpoints={{
          425: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 7,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className={style.mySwiper}
      >
        {brandImages.map((image, index) => (
          <SwiperSlide key={index} className={style.SwiperSlide}>
              <Image boxSize={{ lg: "110px" }} src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </VStack>
  );
};
