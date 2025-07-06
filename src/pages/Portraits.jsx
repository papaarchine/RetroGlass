import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "/images/_O3A2254 copy.jpg"
import img2 from "/images/Portrait1.jpg"
import img3 from "/images/Portrait2.JPG"
import img4 from "/images/Portrait3.jpg"
import img5 from "/images/Portrait4.jpg"
import { RiCloseLargeLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const photos = [
  { id: 1, src: img1, alt: "Landscape 1" },
  { id: 2, src: img2 , alt: "Portrait 1" },
  { id: 3, src: img3 , alt: "Nature 1" },
  { id: 4, src: img4 , alt: "Urban 1" },
  { id: 5, src: img5 , alt: "Event 1" }
];

export default function Portraits() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeModal = () => setSelectedIndex(null);

  const goNext = () =>
    setSelectedIndex((prev) => (prev + 1) % photos.length);

  const goPrev = () =>
    setSelectedIndex((prev) =>
      prev === 0 ? photos.length - 1 : prev - 1
    );

  return (
    <div className="p-6 max-w-7xl  min-h-screen mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Portrait</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedIndex(index)}
            className="cursor-pointer shadow-lg overflow-hidden bg-white"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl p-4"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <img
                src={photos[selectedIndex].src}
                alt={photos[selectedIndex].alt}
                className="w-full md:h-full md:max-h-screen"
              />
              <button
                onClick={goPrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl"
              >
                <FaChevronLeft />

              </button>
              <button
                onClick={goNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl"
              >
                <FaChevronRight />
              </button>
              <button
                onClick={closeModal}
                className="absolute top-9 right-9 text-white text-2xl"
              >
                <RiCloseLargeLine />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// hello