'use client'
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Section1 = () => {
    const effect1Ref = useRef<HTMLImageElement>(null);
  const effect2Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (effect1Ref.current && effect2Ref.current) {
      gsap.to(effect1Ref.current, {
        // rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "linear"
      });

      gsap.to(effect2Ref.current, {
        // rotation: -360,
        duration: 10,
        repeat: -1,
        ease: "linear"
      });

      gsap.to([effect1Ref.current, effect2Ref.current], {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, []);

  
    return (
        <div className="relative w-full h-[50vw] bg-gray-300">
            <img className="absolute w-[50%] bottom-10" src="/images/text-volamtruyenky.png" alt="" />
            <img ref={effect1Ref} className="absolute bottom-24 left-[13%] mix-blend-plus-lighter" src="/images/effect-text-lam.png" alt="" />
            {/* <img ref={effect2Ref} src="/images/effect-text-h5.png" alt="" /> */}
        </div>
    )
}

export default Section1