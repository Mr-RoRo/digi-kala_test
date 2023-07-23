import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import categoryInfo from "../data/category-info";
import { register } from "swiper/element";
import style from "./SliderProducts.module.css";
register();
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/grid";

export const DigiPshnahad = () => {
  return (
    <VStack>
      <Heading fontSize={{ base: "18px", lg: "21px" }}>
        پیشنهاد دیجی‌کالا
      </Heading>
      <Box
        w="95vw"
        h="38vh"
        dir="rtl"
        marginY="25px"
        border="1px solid #ccc"
        borderRadius="15px"
      >
        <Swiper
          slidesPerView={3}
          breakpoints={{
            
          }}
          spaceBetween={30}
          freeMode={true}
          grid={{
            rows: 2,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Grid]}
          className={style.Swiper}
        >
          {categoryInfo.map((info, index) => (
            <SwiperSlide key={index} className={style.GridSwiper}>
              <a href="#" className={style.aLink}>
                <VStack>
                  <Image boxSize="90px" src={info.image} />
                  <Text fontSize="12px" textAlign="center">
                    {info.categoryName}
                  </Text>
                </VStack>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </VStack>
  );
};
