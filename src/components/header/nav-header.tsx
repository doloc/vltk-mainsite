'use client'
import { cn } from '@/utils/common';
import Link from 'next/link';
import { useState } from 'react';

const NavHeader = () => {
    type CustomStyleProperties = {
        [key: string]: string | number;
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <nav className="fixed z-50 mb:flex mb:items-center w-full bg-cover bg-center bg-no-repeat aspect-[1920/79] mb:aspect-[640/80] bg-[image:var(--bg-pc-url)] mb:bg-[image:var(--bg-mobile-url)] " style={{'--bg-mobile-url': `url(/images/mb-bg-nav-header.jpg)`, '--bg-pc-url': `url(/images/pc-bg-nav-header.jpg)`} as CustomStyleProperties}>
            <img className='absolute w-[7.4%] mb:w-[19%] top-[12%] mb:top-[15%] left-[11%] mb:left-[3%]' src="/images/icon-game.png" alt="" />
            <img className='mb:hidden absolute w-[9.3%] top-[12%] left-[20%]' src="/images/logo-game.png" alt="" />
            <div className="mb:hidden absolute w-[47%] h-full left-[33%] flex justify-between items-center text-[#FCF2E3] text-[1vw] leading-[2vw]" style={{fontFamily: `"Roboto", sans-serif`}}> 
                <Link className='flex gap-2 hover:text-[#EED7B4]' href="/"><img src="/images/icon-home.svg" alt="" />TRANG CHỦ</Link>
                <Link className='flex gap-2 hover:text-[#EED7B4]' href="/about"><img src="/images/icon-news.svg" alt="" />TIN TỨC</Link>
                <Link className='flex gap-2 hover:text-[#EED7B4]' href="/event"><img src="/images/icon-event.svg" alt="" />SỰ KIỆN</Link>
                <Link className='flex gap-2 hover:text-[#EED7B4]' href="/support"><img src="/images/icon-support.svg" alt="" />HỖ TRỢ</Link>
                <Link className='flex gap-2 hover:text-[#EED7B4]' href="/social"><img src="/images/icon-social.svg" alt="" />CỘNG ĐỒNG</Link>
            </div>

            <Link className="pc:hidden absolute w-[25%] left-[25%] bg-cover bg-center bg-no-repeat aspect-[165/60] bg-[url('/images/btn-choingay-mb.png')]" href=""></Link>
            <Link className="pc:hidden absolute w-[25%] right-[23%] bg-cover bg-center bg-no-repeat aspect-[165/60] bg-[url('/images/btn-napthe-mb.png')]" href=""></Link>
            <img className='pc:hidden absolute right-[16.5%] w-[3%]' src="/images/icon-dot.png" alt="" />
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={cn("pc:hidden absolute right-[5%] w-[7%] bg-cover bg-center bg-no-repeat", isMenuOpen ? "aspect-[45/45] bg-[url('/images/icon-close.png')]": "aspect-[53/44] bg-[url('/images/icon-menu.png')]")}
            >
            </button>
            {isMenuOpen && (
               <div className="absolute -z-10 top-[99%] left-0 w-full bg-cover bg-center bg-no-repeat aspect-[640/613] bg-[url('/images/mb-menu-tab.png')]">
                    <div className="mt-[5%] w-full h-[75%] flex flex-col justify-between items-center text-[#FFFCDC] text-[5vw]">
                        <Link href="" >Trang Chủ</Link>
                        <Link href="" >Tin Tức</Link>
                        <Link href="" >Sự Kiện</Link>
                        <Link href="" >Hỗ Trợ</Link>
                        <Link href="" >Cộng Đồng</Link>
                        <Link href="" >Hướng Dẫn</Link>
                    </div>
               </div>
            )}
        </nav>
    )
}

export default NavHeader