'use client'
import NavHeader from "@/components/header/nav-header"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import SideBar from "@/components/side-bar/side-bar";
import { useRecoilState } from "recoil";
import { loadingState } from "@/components/atom/atom";
import homePageApiRequest from "@/api-requests/home-page";
import { Post } from "@/entity/post";
import { convertPostDate } from "@/lib/utils";
import Footer from "@/components/footer/footer";

const HomePage = () => {
    const [isLoading, setIsLoading] = useRecoilState(loadingState)
    const effect1Ref = useRef<HTMLImageElement>(null);
    const effect2Ref = useRef<HTMLImageElement>(null);
    const effect3Ref = useRef<HTMLImageElement>(null);
    const [posts, setPosts] = useState<Post[]>([]);

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

    const fetchContent = async () => {
        setIsLoading(true)
        try {
            const res = await homePageApiRequest.getContentInfo(59012, 'NEWS', 0, 5);
            if (res && res.data.error_code >= 0) {
                setPosts(res.data.data);
            }
        } catch (error) {
            console.log('error', error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchContent()
    }, [])
    
    return (
        <>
            <NavHeader />
            
            {/* Section 1 */}
            <div className="relative overflow-x-hidden w-full flex justify-center bg-cover bg-center bg-no-repeat aspect-[1920/1024] mb:aspect-[640/1115] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" style={{'--bg-mobile-url': `url(/images/mb-banner-bg.jpg)`, '--bg-pc-url': `url(/images/pc-banner-bg.jpg)`} as CustomStyleProperties}>
                <img ref={effect3Ref} className="mb:hidden absolute w-[37%] top-[0.5%] right-[2%] mix-blend-plus-lighter" src="/images/effect-sword.png" alt="" />
                <img className="absolute w-[8%] mb:w-[17%] top-[9%] mb:top-[13%] left-[1%] mb:left-[5%]" src="/images/tag18.jpg" alt="" />
                <img className="absolute w-[19%] mb:w-[27%] bottom-[40%] mb:bottom-[42%] right-[19%] mb:right-[5%]" src="/images/text-phienbanzalo.png" alt="" />
                <img className="mb:hidden absolute w-[82%] bottom-[2%]" src="/images/text-volamtruyenky-pc.png" alt="" />
                <img ref={effect1Ref} className="mb:hidden absolute w-[16.5%] bottom-[19.5%] left-[36%] mix-blend-plus-lighter" src="/images/effect-text-lam.png" alt="" />
                <img ref={effect2Ref} className="mb:hidden absolute w-[16.5%] bottom-[28.5%] right-[16%] mix-blend-plus-lighter" src="/images/effect-text-h5.png" alt="" />
                <img className="pc:hidden absolute w-[75%] bottom-[32%]" src="/images/text-volamtruyenky-mb.png" alt="" />
                <img className="absolute w-[55%] mb:w-[98%] bottom-[19%] mb:bottom-[27%]" src="/images/text-volamchiton.png" alt="" />
                <div className="absolute w-[35%] mb:w-[95%] bottom-[2%] mb:bottom-[11%] flex justify-center items-center gap-[2%] bg-cover bg-center bg-no-repeat aspect-[714/190] bg-[url('/images/app-info-bg.png')]">
                    <Link href="" className="w-[30%] bg-cover bg-center bg-no-repeat aspect-[194/165] bg-[url('/images/btn-napthe.png')] hover:cursor-pointer hover:brightness-110"></Link>
                    <div className="w-[30%] flex flex-col justify-center items-center gap-1">
                        <Link href="" className="w-full bg-cover bg-center bg-no-repeat aspect-[247/76] bg-[url('/images/btn-hotro.png')] hover:cursor-pointer hover:brightness-110"></Link>
                        <Link href="" className="w-full bg-cover bg-center bg-no-repeat aspect-[247/76] bg-[url('/images/btn-zalo.png')] hover:cursor-pointer hover:brightness-110"></Link>
                    </div>
                    <Link href="" className="w-[30%] bg-cover bg-center bg-no-repeat aspect-[194/165] bg-[url('/images/btn-choingay-inapp.png')] hover:cursor-pointer hover:brightness-110"></Link>
                </div>
                <div className="absolute pc:hidden w-full bottom-[1%] flex justify-center animate-bounce">
                    <img className='pc:hidden w-[35%] ' src="/images/scrolling.png" alt="" />
                </div>
            </div>

            <SideBar />

            {/* Section 2 */}
            <div className="relative flex justify-center w-full bg-cover bg-center bg-no-repeat aspect-[1920/1136] mb:aspect-[640/1155] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" style={{'--bg-mobile-url': `url(/images/mb-event-bg.jpg)`, '--bg-pc-url': `url(/images/pc-event-bg.jpg)`} as CustomStyleProperties}>
                <div className="mb:flex mb:flex-col absolute w-[63.4%] mb:w-[82%] top-[25.8%] mb:top-[16.5%] left-[20.6%] mb:left-[10%] pc:grid pc:grid-cols-[58%_42%]">
                    <div className="flex w-full h-full justify-center items-center">
                        <div className="w-full p-[1%] flex justify-center items-center bg-cover bg-center bg-no-repeat aspect-[705/413] bg-[url('/images/picture-frame.png')]">
                            <img className="w-full" src="/images/jieshao-pic.jpg" alt="" />
                        </div>
                    </div>
                    <div className="p-[8%] flex flex-col w-full h-full">
                        <div className="w-full h-full">
                            {posts && posts.map((post, index) => (
                                <div key={index} className="flex flex-col text-[1vw] mb:text-[3vw] text-[#8D5435]">
                                    <div className="flex justify-between items-center">
                                        <Link className="max-w-[85%] whitespace-nowrap overflow-hidden text-ellipsis hover:text-[#BD7039] hover:brightness-110" href={'/tin-tuc/'+post.path}>{post.title}</Link>
                                        <span className="text-xs">{convertPostDate(post.time)}</span>
                                    </div>
                                    <div className="my-[3%] custom-line"></div>
                                </div>
                            ))}
                            <div className="mt-[3%] w-full flex justify-center">
                                <Link href="/" className="w-[35%] bg-cover bg-center bg-no-repeat aspect-[177/39] bg-[url('/images/btn-xemthem.png')] hover:cursor-pointer hover:brightness-110"></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute w-[50%] mb:w-[90%] bottom-[2%] mb:bottom-[1%] flex flex-col items-between gap-[8px]">
                    <div className="w-full flex justify-between">
                        <Link href="" className="w-[45%] bg-cover bg-center bg-no-repeat aspect-[417/159] bg-[url('/images/card-huongdan.png')] hover:cursor-pointer hover:brightness-110"></Link>
                        <Link href="" className="w-[45%] bg-cover bg-center bg-no-repeat aspect-[417/159] bg-[url('/images/card-dieukhoan.png')] hover:cursor-pointer hover:brightness-110"></Link>
                    </div>
                    <div className="w-full flex justify-between">
                        <Link href="" className="w-[45%] bg-cover bg-center bg-no-repeat aspect-[417/159] bg-[url('/images/card-camnang.png')] hover:cursor-pointer hover:brightness-110"></Link>
                        <Link href="" className="w-[45%] bg-cover bg-center bg-no-repeat aspect-[417/159] bg-[url('/images/card-hotro.png')] hover:cursor-pointer hover:brightness-110"></Link>
                    </div>
                </div>
            </div>

            {/* Section 3 */}
            <div className="relative flex justify-center w-full bg-cover bg-center bg-no-repeat aspect-[1920/1081] mb:aspect-[640/1129] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" style={{'--bg-mobile-url': `url(/images/mb-sec3-bg.jpg)`, '--bg-pc-url': `url(/images/pc-sec3-bg.jpg)`} as CustomStyleProperties}>
            </div>

            {/* Section 4 */}
            <div className="relative flex justify-center w-full bg-cover bg-center bg-no-repeat aspect-[1920/1078] mb:aspect-[640/1005] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" style={{'--bg-mobile-url': `url(/images/mb-sec4-bg.jpg)`, '--bg-pc-url': `url(/images/pc-sec4-bg.jpg)`} as CustomStyleProperties}>
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default HomePage