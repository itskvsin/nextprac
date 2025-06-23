


// // "use client";

// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // const imgs = [
// //   "https://images.unsplash.com/photo-1749587452499-ea1fd591e63f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
// //   "https://images.unsplash.com/photo-1750008267598-7f68e1a25ab8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
// //   "https://images.unsplash.com/photo-1749813482475-3c12a8c4a5bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",

// //   // "/videos/video2.mp4",
// //   //   "/videos/your-work3.mp4",
// // ];

// // export default function PreviousWorkCarousel() {
// //   const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

// //   const paginate = (dir: number) => {
// //     setIndex(([prev]) => {
// //       const next = (prev + dir + img.length) % img.length;
// //       return [next, dir];
// //     });
// //   };

// //   return (
// //     <section className="py-16 bg-white text-black text-center">
// //       <h2 className="text-4xl font-bold mb-8">Previous Work</h2>
// //       <div className="relative max-w-xl mx-auto overflow-hidden rounded-xl">
// //         <AnimatePresence custom={direction} mode="wait">
// //           <motion.img
// //             key={index}
// //             src={videos[index]}
// //             className="w-full h-64 object-cover"
// //             initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
// //             transition={{ duration: 0.5 }}
// //           />
// //         </AnimatePresence>
// //         <button
// //           onClick={() => paginate(-1)}
// //           className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
// //         >
// //           ←
// //         </button>
// //         <button
// //           onClick={() => paginate(1)}
// //           className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
// //         >
// //           →
// //         </button>
// //       </div>
// //     </section>
// //   );

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// const videos = [
//   "/videos/video1.mp4",
//   "/videos/video2.mp4",
// //   "/videos/your-work3.mp4",
// ];

// export default function PreviousWorkCarousel() {
//   const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

//   const paginate = (dir: number) => {
//     setIndex(([prev]) => {
//       const next = (prev + dir + videos.length) % videos.length;
//       return [next, dir];
//     });
//   };

//   return (
//     <section className="py-16 bg-white text-black text-center">
//       <h2 className="text-4xl font-bold mb-8">Previous Work</h2>
//       <div className="relative max-w-xl mx-auto overflow-hidden rounded-xl">
//         <AnimatePresence custom={direction} mode="wait">
//           <motion.video
//             key={index}
//             src={videos[index]}
//             controls
//             className="w-full h-64 object-cover"
//             initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
//             transition={{ duration: 0.5 }}
//           />
//         </AnimatePresence>
//         <button
//           onClick={() => paginate(-1)}
//           className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
//         >
//           ←
//         </button>
//         <button
//           onClick={() => paginate(1)}
//           className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
//         >
//           →
//         </button>
//       </div>
//     </section>
//   );
// }
// <<<<<<< HEAD
// <<<<<<< HEAD
// >>>>>>> 6a86249dbf75fdc8ec3d455c037296fa17c873ce
// =======
// >>>>>>> 6a86249dbf75fdc8ec3d455c037296fa17c873ce
// =======
// >>>>>>> 6a86249dbf75fdc8ec3d455c037296fa17c873ce
