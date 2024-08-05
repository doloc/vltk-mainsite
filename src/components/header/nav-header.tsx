import Image from 'next/image'

const NavHeader = () => {
    type CustomStyleProperties = {
        [key: string]: string | number;
    };

    return (
        <nav className="fixed z-50 w-full bg-cover bg-center bg-no-repeat pc:aspect-[1920/79] bg-[image:var(--bg-mobile-url)] pc:bg-[image:var(--bg-pc-url)]" style={{'--bg-mobile-url': `url(/images/pc-bg-nav-header.jpg)`, '--bg-pc-url': `url(/images/pc-bg-nav-header.jpg)`} as CustomStyleProperties}>
            <img className='absolute top-[12%] left-[11%] w-[7.4%]' src="/images/icon-game.png" alt="" />
            <img className='absolute top-[12%] left-[20%] w-[9.3%]' src="/images/logo-game.png" alt="" />
            {/* <ul className="w-full h-full flex justify-center items-center gap-20 text-[#FCF2E3] text-xl">
                <li className="ml-32"><a href="/">TRANG CHỦ</a></li>
                <li><a href="/about">TIN TỨC</a></li>
                <li><a href="/contact">SỰ KIỆN</a></li>
                <li><a href="/contact">HỖ TRỢ</a></li>
                <li><a href="/contact">CỘNG ĐỒNG</a></li>
            </ul> */}
        </nav>
    )
}

export default NavHeader