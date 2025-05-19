import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const photos = [
  { id: 1, src: "/images/photo1.jpg", alt: "Landscape 1" },
  { id: 2, src: "/images/photo2.jpg", alt: "Portrait 1" },
  { id: 3, src: "/images/photo3.jpg", alt: "Nature 1" },
  { id: 4, src: "/images/photo4.jpg", alt: "Urban 1" },
  { id: 5, src: "/images/photo5.jpg", alt: "Event 1" },
  { id: 6, src: "/images/photo6.jpg", alt: "Abstract 1" },
];

export default function PhotoPortfolio() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Photography Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-2xl shadow-lg overflow-hidden"
          >
            <Card>
              <CardContent className="p-0">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover"
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
