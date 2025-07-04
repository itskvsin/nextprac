"use client";

// import { useRef, useLayoutEffect, useState } from "react";
// import Image from "next/image";
// import gsap from "gsap";
import GSAPHoverRevealSection from "@/components/temp";

export default function wyg() {
  return (
    <>
      <GSAPHoverRevealSection />
      <GSAPHoverRevealSection />
      <GSAPHoverRevealSection />
    </>
  );
}

// "use client";

// import { useRef, useLayoutEffect, useState } from "react";
// import Image from "next/image";
// import gsap from "gsap";

// export default function GSAPHoverRevealSection() {
//   const [hovered, setHovered] = useState(false);

//   const containerRef = useRef<HTMLDivElement>(null);
//   const bracketL = useRef<HTMLDivElement>(null);
//   const bracketR = useRef<HTMLDivElement>(null);
//   const imageRef = useRef<HTMLDivElement>(null);
//   const descRef = useRef<HTMLParagraphElement>(null);
//   const buttonRef = useRef<HTMLButtonElement>(null);
//   const revealRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     const container = containerRef.current;
//     const reveal = revealRef.current;
//     if (!container || !reveal) return;

//     // Reset reveal section
//     gsap.set(reveal, {
//       height: 0,
//       opacity: 0,
//       overflow: "hidden",
//       visibility: "hidden",
//     });

//     const contentTimeline = gsap.timeline({ paused: true });

//     contentTimeline
//       .to([bracketL.current, bracketR.current], {
//         opacity: 1,
//         y: 0,
//         duration: 0.4,
//         ease: "power3.out",
//       })
//       .to(
//         imageRef.current,
//         {
//           opacity: 1,
//           scale: 1,
//           duration: 0.4,
//           ease: "power3.out",
//         },
//         "-=0.3"
//       )
//       .to(
//         descRef.current,
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.4,
//           ease: "power3.out",
//         },
//         "-=0.3"
//       )
//       .to(
//         buttonRef.current,
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.4,
//           ease: "power3.out",
//         },
//         "-=0.3"
//       );

//     const handleEnter = () => {
//       const fullHeight = reveal.scrollHeight;

//       gsap.to(reveal, {
//         height: fullHeight,
//         opacity: 1,
//         visibility: "visible",
//         duration: 0.5,
//         ease: "power2.out",
//       });

//       contentTimeline.play();
//     };

//     const handleLeave = () => {
//       gsap.to(reveal, {
//         height: 0,
//         opacity: 0,
//         visibility: "hidden",
//         duration: 0.5,
//         ease: "power2.inOut",
//       });

//       contentTimeline.reverse();
//     };

//     container.addEventListener("mouseenter", handleEnter);
//     container.addEventListener("mouseleave", handleLeave);

//     return () => {
//       container.removeEventListener("mouseenter", handleEnter);
//       container.removeEventListener("mouseleave", handleLeave);
//     };
//   }, []);

//   return (
//     <section className="w-full border-b border-white/20">
//       <div
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         ref={containerRef}
//         className="group px-6 py-6 md:py-10 w-full max-w-7xl mx-auto cursor-pointer"
//       >
//         {/* Title Row */}
//         <div className="flex justify-center items-center gap-4 text-3xl md:text-5xl font-extrabold">
//           <div
//             ref={bracketL}
//             className="text-[#F6A511] text-[60px] md:text-[80px] font-bold opacity-0 translate-y-10"
//           >
//             [
//           </div>

//           <div className="flex items-center gap-2">
//             <p className="text-white">Conversion-Centric</p>
//             <div
//               className={`transition-all duration-500 ${
//                 hovered
//                   ? "opacity-100 scale-100 text-[#F6A511]"
//                   : "opacity-0 scale-50"
//               }`}
//             >
//               <div
//                 ref={imageRef}
//                 //   className="w-14 h-14 md:w-20 md:h-20 overflow-hidden rounded-xl scale-50 opacity-0"
//                 className={`transition-all duration-500 flex h-10 justify-center items-center ${
//                   hovered ? "w-30 mx-3 h-30" : "w-1 mx-0"
//                 } overflow-hidden`}
//               >
//                 <Image
//                   src="/images/img1.png"
//                   alt="hover"
//                   width={80}
//                   height={80}
//                   className="rounded-xl object-cover w-full h-full"
//                 />
//               </div>
//             </div>
//             <p className="text-white">Ad Creatives</p>
//           </div>

//           <div
//             ref={bracketR}
//             className="text-[#F6A511] text-[60px] md:text-[80px] font-bold opacity-0 translate-y-10"
//           >
//             ]
//           </div>
//         </div>

//         {/* Hidden Reveal Section */}
//         <div className="flex items-center justify-center">
//           <div
//             ref={revealRef}
//             className="invisible text-center flex w-full flex-col items-center h-0 mt-4 transition-all space-y-3"
//           >
//             <p
//               ref={descRef}
//               className="text-white/70 text-sm md:text-base max-w-md mx-auto opacity-0 translate-y-4"
//             >
//               High-converting creatives crafted to elevate your brand
//               performance.
//             </p>
//             <button
//               ref={buttonRef}
//               className="px-5 py-2 rounded-full w-2/12 bg-[#F6A511] text-black text-sm font-semibold hover:bg-[#ffbd3b] transition-all opacity-0 translate-y-4"
//             >
//               Explore More
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
