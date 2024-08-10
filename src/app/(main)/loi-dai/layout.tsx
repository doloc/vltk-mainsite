'use client'
import Footer from "@/components/footer/footer";
import VideoBackground from "@/components/video-background/video_background";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EventLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const router = useRouter();
    type CustomStyleProperties = {
        [key: string]: string | number;
    };

    return (
        <>
            {/* Section 1 */}
            <div className="mb:hidden relative w-full aspect-[2560/1536] overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full aspect-[2560/1536] object-cover"
                    src="/images/event-loidai/pc-banner-vid-loop.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <img className="absolute top-[4%] left-[1.5%] w-[8%] mb:hidden" src="/images/event-loidai/tag18.png" alt="" />
                <div className="absolute pc:hidden top-0 left-0 w-full bg-cover bg-center bg-no-repeat mb:aspect-[639/76] mb:bg-[image:var(--bg-mobile-url)]" style={{'--bg-mobile-url': `url(/images/event-loidai/mobile-event-header-bg.jpg)`} as CustomStyleProperties}>
                    <img className="absolute w-[25%] top-[13%] left-[24%] hover:cursor-pointer hover:brightness-110" src="/images/event-loidai/btn-choingay.png" alt="" onClick={() =>  router.push("https://zalo.vltkh5.zing.vn/play-game")} />
                    <img className="absolute w-[25%] top-[13%] right-[21%] hover:cursor-pointer hover:brightness-110" src="/images/event-loidai/btn-trangchu.png" alt="" onClick={() =>  router.push("/")} />
                    <img className="absolute w-[10%] top-0 right-[2.5%]" src="/images/event-loidai/tag.png" alt="" />
                </div>pc-b
                <img className="absolute top-[3.6%] mb:top-[0.5%] left-[10%] mb:left-[1%] w-[7.4%] mb:w-[22%]" src="/images/icon-loi-dai.png" alt="" />
                <img className="absolute mb:hidden top-[3.6%] mb:top-[0.5%] left-[17.5%] mb:left-[1%] w-[7.4%] mb:w-[22%]" src="/images/logo-game.png" alt="" />
                <img className="absolute mb:hidden w-[10%] top-[5%] right-[4.5%] hover:cursor-pointer hover:brightness-110" src="/images/btn-choingay.png" alt="" onClick={() =>  router.push("https://zalo.vltkh5.zing.vn/play-game")} />
                <img className="absolute mb:hidden w-[10%] top-[5%] right-[16%] hover:cursor-pointer hover:brightness-110" src="/images/btn-trangchu.png" alt="" onClick={() =>  router.push("/")} />
                <img className="absolute w-[45%] mb:w-[85%] top-[23%] mb:top-[25%] left-[27.5%] mb:left-[3%]" src="/images/event-loidai/text-loidaiquyetchien.png" alt="" />
                <img className="absolute w-[5%] mb:w-[13%] top-[24%] mb:top-[24%] right-[25%] mb:right-[1%]" src="/images/event-loidai/event-date.png" alt="" />
                <div className="absolute bottom-[8%] mb:bottom-[11%] flex w-full justify-center items-center text-[1.4vw] mb:text-[10px] text-[#FCFFC5] font-bold" style={{fontFamily: 'UTM Alberta Heavy'}}>
                    <Link href="/loi-dai" className="flex justify-center items-center w-[16%] mb:w-[28%] -mx-[0.7%] mb:-mx-[2.5%] bg-cover bg-center bg-no-repeat aspect-[328/101] bg-[url('/images/event-loidai/btn-nav-bg.png')] hover:cursor-pointer hover:brightness-110">GIỚI THIỆU</Link>
                    <Link href="/loi-dai/the-le" className="flex justify-center items-center w-[16%] mb:w-[28%] -mx-[0.7%] mb:-mx-[2.5%] bg-cover bg-center bg-no-repeat aspect-[328/101] bg-[url('/images/event-loidai/btn-nav-bg.png')] hover:cursor-pointer hover:brightness-110">THỂ LỆ</Link>
                    <Link href="/loi-dai/phan-thuong" className="flex justify-center items-center w-[16%] mb:w-[28%] -mx-[0.7%] mb:-mx-[2.5%] bg-cover bg-center bg-no-repeat aspect-[328/101] bg-[url('/images/event-loidai/btn-nav-bg.png')] hover:cursor-pointer hover:brightness-110">PHẦN THƯỞNG</Link>
                    <Link href="/su-kien" className="flex justify-center items-center w-[16%] mb:w-[28%] -mx-[0.7%] mb:-mx-[2.5%] bg-cover bg-center bg-no-repeat aspect-[328/101] bg-[url('/images/event-loidai/btn-nav-bg.png')] hover:cursor-pointer hover:brightness-110">TIN TỨC</Link>
                </div>
                <div className="absolute pc:hidden w-full bottom-[2%] flex justify-center animate-bounce">
                    <img className='pc:hidden w-[25%] ' src="/images/event-loidai/scrolling.png" alt="" />
                </div>
            </div>

            {/* Use Image */}
            <div className="pc:hidden relative w-full bg-cover bg-center bg-no-repeat aspect-[1920/1085] mb:aspect-[640/960] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" style={{'--bg-mobile-url': `url(/images/event-loidai/mobile-banner-event.jpg)`, '--bg-pc-url': `url(/images/event-loidai/pc-banner-event.jpg)`} as CustomStyleProperties}>
                <img className="absolute top-[4%] left-[1.5%] w-[8%] mb:hidden" src="/images/event-loidai/tag18.png" alt="" />
                <div className="absolute pc:hidden top-0 left-0 w-full bg-cover bg-center bg-no-repeat mb:aspect-[639/76] mb:bg-[image:var(--bg-mobile-url)]" style={{'--bg-mobile-url': `url(/images/event-loidai/mobile-event-header-bg.jpg)`} as CustomStyleProperties}>
                    <img className="absolute w-[25%] top-[13%] left-[24%] hover:cursor-pointer hover:brightness-110" src="/images/event-loidai/btn-choingay.png" alt="" onClick={() =>  router.push("https://zalo.vltkh5.zing.vn/play-game")} />
                    <img className="absolute w-[25%] top-[13%] right-[21%] hover:cursor-pointer hover:brightness-110" src="/images/event-loidai/btn-trangchu.png" alt="" onClick={() =>  router.push("/")} />
                    <img className="absolute w-[10%] top-0 right-[2.5%]" src="/images/event-loidai/tag.png" alt="" />
                </div>pc-b
                <img className="absolute top-[3.6%] mb:top-[0.5%] left-[10%] mb:left-[1%] w-[7.4%] mb:w-[22%]" src="/images/icon-loi-dai.png" alt="" />
                <img className="absolute mb:hidden top-[3.6%] mb:top-[0.5%] left-[17.5%] mb:left-[1%] w-[7.4%] mb:w-[22%]" src="/images/logo-game.png" alt="" />
                <img className="absolute mb:hidden w-[10%] top-[5%] right-[4.5%] hover:cursor-pointer hover:brightness-110" src="/images/btn-choingay.png" alt="" onClick={() =>  router.push("https://zalo.vltkh5.zing.vn/play-game")} />
                <img className="absolute mb:hidden w-[10%] top-[5%] right-[16%] hover:cursor-pointer hover:brightness-110" src="/images/btn-trangchu.png" alt="" onClick={() =>  router.push("/")} />
                <img className="absolute w-[45%] mb:w-[85%] top-[23%] mb:top-[25%] left-[27.5%] mb:left-[3%]" src="/images/event-loidai/text-loidaiquyetchien.png" alt="" />
                <img className="absolute w-[5%] mb:w-[13%] top-[24%] mb:top-[24%] right-[25%] mb:right-[1%]" src="/images/event-loidai/event-date.png" alt="" />
                <div className="absolute bottom-[8%] mb:bottom-[11%] flex w-full justify-center items-center text-[1.4vw] mb:text-[10px] text-[#FCFFC5] font-bold" style={{fontFamily: 'UTM Alberta Heavy'}}>
                    <Link href="/loi-dai" className="flex justify-center items-center w-[16%] mb:w-[28%] -mx-[0.7%] mb:-mx-[2.5%] bg-cover bg-center bg-no-repeat aspect-[328/101] bg-[url('/images/event-loidai/btn-nav-bg.png')] hover:cursor-pointer hover:brightness-110">GIỚI THIỆU</Link>
                    <Link href="/loi-dai/the-le" className="flex justify-center items-center w-[16%] mb:w-[28%] -mx-[0.7%] mb:-mx-[2.5%] bg-cover bg-center bg-no-repeat aspect-[328/101] bg-[url('/images/event-loidai/btn-nav-bg.png')] hover:cursor-pointer hover:brightness-110">THỂ LỆ</Link>
                    <Link href="/loi-dai/phan-thuong" className="flex justify-center items-center w-[16%] mb:w-[28%] -mx-[0.7%] mb:-mx-[2.5%] bg-cover bg-center bg-no-repeat aspect-[328/101] bg-[url('/images/event-loidai/btn-nav-bg.png')] hover:cursor-pointer hover:brightness-110">PHẦN THƯỞNG</Link>
                    <Link href="/su-kien" className="flex justify-center items-center w-[16%] mb:w-[28%] -mx-[0.7%] mb:-mx-[2.5%] bg-cover bg-center bg-no-repeat aspect-[328/101] bg-[url('/images/event-loidai/btn-nav-bg.png')] hover:cursor-pointer hover:brightness-110">TIN TỨC</Link>
                </div>
                <div className="absolute pc:hidden w-full bottom-[2%] flex justify-center animate-bounce">
                    <img className='pc:hidden w-[25%] ' src="/images/event-loidai/scrolling.png" alt="" />
                </div>
            </div>
            {children}

            {/* Fotter */}
            <Footer />
        </>
       
    );
}