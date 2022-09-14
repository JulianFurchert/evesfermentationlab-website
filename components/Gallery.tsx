import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { ProgressBar } from "./ProgressBar";
import Image from 'next/image'

const variants = {
  enter: (direction: number) => {
    return {
      // x: direction > 0 ? 800 : -800,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      // x: direction < 0 ? 800 : -800,
      opacity: 0.5
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

type Gallery = {
  images: string[]
}

export const Gallery: React.FC<Gallery> = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleOnChange = (index: number) => {
    paginate(1)
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        
        <motion.div
          className='absolute w-full h-full cursor-pointer'
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          onClick={() => paginate(1)}
        >
          <Image alt="" layout="fill" objectFit="cover" src={images[imageIndex]} />
        </motion.div>


        {/* preload Image */}
        <div className='absolute w-full h-full cursor-pointer opacity-0'>
          <Image alt="" layout="fill" objectFit="cover" src={images[imageIndex + 1 % images.length]} />
        </div>

      </AnimatePresence>
      <div className="absolute w-full bottom-4 px-4">
        <ProgressBar 
          duration={4} 
          currentIndex={page % images.length} 
          onChange={handleOnChange} 
          count={images.length} 
        />
      </div>
    </>
  );
};
