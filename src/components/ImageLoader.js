// hooks/useImagesLoaded.js
import { useState, useEffect } from "react";

/**
 * Hook that tracks when a given number of images have finished loading.
 * @param {number} totalImages - Number of images to wait for
 * @returns {object} { handleImageLoad, isReady }
 */
export function ImageLoader(totalImages) {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    if (imagesLoaded >= totalImages) {
      setIsReady(true);
    }
  }, [imagesLoaded, totalImages]);

  return { handleImageLoad, isReady };
}