'use client'
import NavHeader from "@/components/header/nav-header"
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';

const HomePage = () => {
    const effect1Ref = useRef<HTMLImageElement>(null);
    const effect2Ref = useRef<HTMLImageElement>(null);
    const effect3Ref = useRef<HTMLImageElement>(null);

    type CustomStyleProperties = {
        [key: string]: string | number;
    };

    useEffect(() => {
        if (effect1Ref.current && effect2Ref.current && effect3Ref.current) {
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

        gsap.to(effect3Ref.current, {
            x: 5,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
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
        <>
            <NavHeader />
            
            {/* Section 1 */}
            <div className="relative overflow-x-hidden w-full flex justify-center bg-cover bg-center bg-no-repeat aspect-[1920/1024] mb:aspect-[640/1115] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" style={{'--bg-mobile-url': `url(/images/mb-banner-bg.jpg)`, '--bg-pc-url': `url(/images/pc-banner-bg.jpg)`} as CustomStyleProperties}>
                <img ref={effect3Ref} className="mb:hidden absolute top-[0.5%] right-[2%] mix-blend-plus-lighter" src="/images/effect-sword.png" alt="" />
                <img className="absolute w-[8%] mb:w-[17%] top-[9%] mb:top-[13%] left-[1%] mb:left-[5%]" src="/images/tag18.jpg" alt="" />
                <img className="absolute w-[19%] mb:w-[27%] bottom-[40%] mb:bottom-[42%] right-[19%] mb:right-[5%]" src="/images/text-phienbanzalo.png" alt="" />
                <img className="mb:hidden absolute w-[82%] bottom-[2%]" src="/images/text-volamtruyenky-pc.png" alt="" />
                <img ref={effect1Ref} className="mb:hidden absolute bottom-[19.5%] left-[36%] mix-blend-plus-lighter" src="/images/effect-text-lam.png" alt="" />
                <img ref={effect2Ref} className="mb:hidden absolute bottom-[28.5%] right-[16%] mix-blend-plus-lighter" src="/images/effect-text-h5.png" alt="" />
                <img className="pc:hidden absolute w-[75%] bottom-[32%]" src="/images/text-volamtruyenky-mb.png" alt="" />
                <img className="absolute w-[55%] mb:w-[98%] bottom-[19%] mb:bottom-[27%]" src="/images/text-volamchiton.png" alt="" />
                <div className="absolute w-[35%] mb:w-[95%] bottom-[2%] mb:bottom-[11%] flex justify-center items-center gap-[2%] bg-cover bg-center bg-no-repeat aspect-[714/190] bg-[image:var(--app-info-bg-url)]" style={{'--app-info-bg-url': `url(/images/app-info-bg.png)`} as CustomStyleProperties}>
                    <Link href="/loi-dai" className='flex justify-center items-center w-[30%] bg-cover bg-center bg-no-repeat aspect-[194/165] bg-[image:var(--bg-nav-url)] hover:cursor-pointer hover:brightness-110' style={{'--bg-nav-url': `url(/images/btn-napthe.png)`} as CustomStyleProperties}></Link>
                    <div className="w-[30%] flex flex-col justify-center items-center gap-1">
                        <Link href="/loi-dai" className='flex justify-center items-center w-full bg-cover bg-center bg-no-repeat aspect-[247/76] bg-[image:var(--bg-nav-url)] hover:cursor-pointer hover:brightness-110' style={{'--bg-nav-url': `url(/images/btn-hotro.png)`} as CustomStyleProperties}></Link>
                        <Link href="/loi-dai" className='flex justify-center items-center w-full bg-cover bg-center bg-no-repeat aspect-[247/76] bg-[image:var(--bg-nav-url)] hover:cursor-pointer hover:brightness-110' style={{'--bg-nav-url': `url(/images/btn-zalo.png)`} as CustomStyleProperties}></Link>
                    </div>
                    <Link href="/loi-dai" className='flex justify-center items-center w-[30%] bg-cover bg-center bg-no-repeat aspect-[194/165] bg-[image:var(--bg-nav-url)] hover:cursor-pointer hover:brightness-110' style={{'--bg-nav-url': `url(/images/btn-choingay-inapp.png)`} as CustomStyleProperties}></Link>
                </div>
                <div className="absolute pc:hidden w-full bottom-[1%] flex justify-center animate-bounce">
                    <img className='pc:hidden w-[35%] ' src="/images/scrolling.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default HomePage