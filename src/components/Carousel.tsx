"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface CarouselProps {
  images: string[];
  speed?: number;      // seconds for one full scroll
  imageWidth?: number; // in px
}

const InfiniteSingleImageCarousel = ({
  images,
  speed = 15,
  imageWidth = 500,
}: CarouselProps) => {
  const allImages = [...images, ...images]; // Duplicate for seamless loop
  const totalWidth = allImages.length * imageWidth;

  return (
    <div className="overflow-hidden mx-auto w-screen">
      <motion.div
        className="flex gap-10"
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
          <div
            key={i}
            style={{ width: `${imageWidth}px`, flexShrink: 0 }}
            className="relative h-[300px]  md:h-[400px]"
          >
            <Image
              src={src}
              alt={`carousel-${i}`}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover rounded-xl"
              draggable={false}
              priority={i < images.length} // prioritize original images
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteSingleImageCarousel;
