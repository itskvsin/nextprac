"use client";

import { motion } from "framer-motion";

interface CarouselProps {
  images: string[];
  speed?: number; // seconds per full cycle
  imageWidth?: number; // width in px
}

const InfiniteSingleImageCarousel = ({
  images,
  speed = 10,
  imageWidth = 400,
}: CarouselProps) => {
  const allImages = [...images, ...images]; // duplicate for loop
  const totalWidth = allImages.length * imageWidth;

  return (
    <div className="overflow-hidden mx-auto" style={{ width: `${imageWidth * images.length}px` }}>
      <motion.div
        className="flex"
        animate={{ x: [0, -totalWidth / 2] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {allImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`carousel-${i}`}
            draggable={false}
            style={{ width: `${imageWidth}px`, height: "auto" }}
            className="object-cover rounded-xl"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteSingleImageCarousel;
