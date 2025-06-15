
// animateWork1.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animation1(containerRef, imag1Ref, imag2Ref) {
  return gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(imag1Ref.current, { y: -200, ease: "none" }, 0);
    tl.to(imag2Ref.current, { y: 200, ease: "none" }, 0);
  }, containerRef);
}