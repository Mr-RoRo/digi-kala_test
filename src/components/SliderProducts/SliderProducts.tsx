import styles from "./SliderProducts.module.css";
import { motion } from "framer-motion";
import { ImageCard } from "./ImageCard";
import { useState, useRef, useEffect } from "react";

export const SliderProducts = () => {
  const [width, setWidth] = useState(0);
  const moRef = useRef<any>(null);

  useEffect(() => {
    setWidth(moRef.current.scrollWidth - moRef.current.offsetWidth);
  },[]);
  return (
    <div>
      <motion.div ref={moRef} className={styles.innerCarousel}>
        <ImageCard left={width} />
      </motion.div>
    </div>
  );
};
