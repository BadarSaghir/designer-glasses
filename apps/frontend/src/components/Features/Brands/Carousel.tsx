import React, { PropsWithChildren, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const Carousel = ({ children }:PropsWithChildren) => {
    const [xOffset, setXOffset] = useState(0);
    const screenWidth = window.innerWidth;
    const itemWidth = screenWidth / 3;
  
    const handleNext = () => {
      setXOffset((prev) => prev - itemWidth);
    };
  
    const handlePrev = () => {
      setXOffset((prev) => prev + itemWidth);
    };
  
    return (
      <>
        <motion.div
          className="flex"
          style={{ x: xOffset }}
          animate={{ x: xOffset }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </>
    );
  };
  
  export default  Carousel;