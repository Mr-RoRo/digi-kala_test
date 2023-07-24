import { Swiper, SwiperSlide } from "swiper/react";
import { small } from "../data/images";
import { big } from "../data/images";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "./SliderProducts.module.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";


export const ImageSSlider = () => {
    const [width,setWidth] = useState([""])
    useEffect(()=>{
    if (window.innerWidth < 1024){
        setWidth(small)
    }else{
        setWidth(big)
    }
    },[width])
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className={style.newSwiper}
    >
      {width.map((small,index) => (
        <SwiperSlide key={index} className={style.SwiperSlide}>
          <Image className={style.ImageCards} src={small} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
