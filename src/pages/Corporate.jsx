import React from "react";
import { motion } from "framer-motion";
import img1 from "/images/_O3A2254 copy.jpg"

const photos = [
  { id: 1, src: img1, alt: "Landscape 1" },
  { id: 2, src: img1 , alt: "Portrait 1" },
  { id: 3, src: "/images/photo3.jpg", alt: "Nature 1" },
  { id: 4, src: "/images/photo4.jpg", alt: "Urban 1" },
  { id: 5, src: "/images/photo5.jpg", alt: "Event 1" },
  { id: 6, src: "/images/photo6.jpg", alt: "Abstract 1" },
  { id: 7, src: "/images/photo6.jpg", alt: "Abstract 1" }
];

export default function Corporate() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Corporate</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shadow-lg overflow-hidden bg-white"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 object-cover object-[5%_20%]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
