"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const HeroSection = () => {
  const [coords, setCoords] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setCoords({ x, y });
  };

  return (
    <motion.section
      className="min-h-screen w-full text-white flex items-center px-6 transition-colors duration-300"
      style={{
        background: `radial-gradient(circle at 85% 25%, rgba(246,165,17,0.1), #000000)`
      }}
      onMouseMove={handleMouseMove}
    >
      {/* {console.log(`${coords.x}% ${coords.y}%`)} */}
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          <span className="text-[#F6A511]">Bye–Bye</span> Boring Ads!
        </h1>
        <h2 className="text-3xl font-semibold mb-6">Welcome UGC Videos!</h2>
        <p className="text-lg text-white/80 mb-8">
          Create engaging, <span className="text-[#F6A511] font-bold">conversion-focused</span> UGC videos that connect with your audience and drive real results.
        </p>
        <button className="bg-[#F6A511] hover:bg-[#d48f0e] text-black px-6 py-3 rounded-md font-semibold transition">
          Get Started
        </button>
      </div>
    </motion.section>
  );
};

export default HeroSection;
