import { Box, Image, VStack } from "@chakra-ui/react";
import box from "../assets/box.png";
import boxText from "../assets/Amazings.svg";
import { ImageCards } from "./ImageCards";
import { imageDrag } from "../data/image-drag";
import { register } from "swiper/element";
import style from "./SliderProducts.module.css";
register();
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

export const SliderProducts = () => {
  return (
    <Box background="#ef394e" h="15rem" padding="10px">
      <Swiper
        spaceBetween={10}
        breakpoints={{
          375: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 60,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={style.mySwiper}
      >
        <SwiperSlide className={style.SwiperSlide}>
          <VStack>
            <Image boxSize="5rem" src={boxText} />
            <Image boxSize="5rem" src={box} />
            <a className={style.link} href="#">
              مشاهده همه
            </a>
          </VStack>
        </SwiperSlide>
        {imageDrag.map((image) => (
          <SwiperSlide className={style.SwiperSlide}>
            <ImageCards image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
