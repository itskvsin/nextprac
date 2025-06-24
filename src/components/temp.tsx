"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function GSAPHoverReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bracketL = useRef<HTMLDivElement>(null);
  const bracketR = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tl = gsap.timeline({ paused: true });

    tl.to([bracketL.current, bracketR.current], {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power3.out",
    })
      .to(
        imageRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .to(
        descRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.3"
      );

    const handleEnter = () => tl.play();
    const handleLeave = () => tl.reverse();

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white w-full px-6">
      <div
        ref={containerRef}
        className="text-center w-full max-w-7xl cursor-pointer"
      >
        {/* Title Row */}
        <div className="flex justify-center items-center gap-4 text-4xl md:text-5xl font-extrabold relative w-full">
          {/* Left Bracket */}
          <div
            ref={bracketL}
            className="text-purple-400 text-[60px] md:text-[80px] font-bold opacity-0 translate-y-10"
          >
            [
          </div>

          {/* Text + Image */}
          <div className="flex items-center gap-2">
            <p className="text-white">Conversion-Centric</p>

            {/* Middle Image */}
            <div
              ref={imageRef}
              className="w-14 h-14 md:w-20 md:h-20 overflow-hidden rounded-xl scale-50 opacity-0 transition-all duration-300"
            >
              <Image
                src="/images/img1.png"
                alt="hover"
                width={80}
                height={80}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>

            <p className="text-white">Ad Creatives</p>
          </div>

          {/* Right Bracket */}
          <div
            ref={bracketR}
            className="text-purple-400 text-[60px] md:text-[80px] font-bold opacity-0 translate-y-10"
          >
            ]
          </div>
        </div>

        {/* Description */}
        <p
          ref={descRef}
          className="text-white/70 text-sm md:text-base max-w-md mx-auto mt-4 opacity-0 translate-y-4"
        >
          High-converting creatives crafted to elevate your brand performance.
        </p>

        {/* Button */}
        <button
          ref={buttonRef}
          className="px-5 py-2 mt-3 rounded-full bg-[#F6A511] text-black text-sm font-semibold hover:bg-[#ffbd3b] transition-all opacity-0 translate-y-4"
        >
          Explore More
        </button>
      </div>
    </div>
  );
}


// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";

// export default function P() {
//   const [hovered, setHovered] = useState(false);

//   //   useEffect(() => {
//   //     const split = new SplitType(".split", {
//   //       types: "words",
//   //     });

//   //     gsap.from(split.words, {
//   //       opacity: 0,
//   //       y: 20,
//   //       stagger: 0.1,
//   //       duration: 0.6,
//   //       ease: "power2.out",
//   //     });
//   //   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen bg-black text-white">
//       <div
//         className="text-6xl font-bold flex items-center justify-center border-b w-full border-white pb-6 transition-all duration-500"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         <p className="text-white">Conversion-Centric </p>

//         <div
//           className={`transition-all duration-500 ${
//             hovered
//               ? "opacity-100 scale-100 text-[#F6A511]"
//               : "opacity-0 scale-50"
//           }`}
//         >
//           <div
//             className={`transition-all duration-500 flex h-10 justify-center items-center ${
//               hovered ? "w-50 mx-3 h-40" : "w-1 mx-0"
//             } overflow-hidden`}
//           >
//             <div className="bg-[#343434]/40 border border-transparent rounded-xl p-4 shadow-xl cursor-pointer overflow-hidden relative">
//               {/* <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#F6A511] group-hover:w-full transition-all duration-500 ease-in-out -translate-x-1/2 origin-center" />
//               <div className="text-2xl mb-3 relative z-10 flex items-center gap-2">
//                 <h3 className="text-xl font-semibold text-[#F6A511] mb-2 relative z-10">
//                   title
//                 </h3>
//               </div>
//               <p className="text-white/80 text-md relative z-10 px-6">desc</p>
//             </div>*/}
//           <Image
//             src="/Images/img1.png"
//             width={300}
//             height={300}
//             className="w-30 h-30"
//             alt="image"
//             />
//             </div> 
//         </div>
//             </div>
//         {/* <div
//           className={`transition-all duration-500 flex justify-center items-center ${
//             hovered ? "w-10 mx-3" : "w-1 mx-0"
//           } overflow-hidden`}
//         >
//           <FaStar
//             className={`transition-all duration-500 ${
//               hovered
//                 ? "opacity-100 scale-100 text-[#F6A511]"
//                 : "opacity-0 scale-50"
//             }`}
//           />
//         </div> */}

//         <p className="text-white">Ad Creatives</p>
//       </div>
//     </div>
//   );
// }
