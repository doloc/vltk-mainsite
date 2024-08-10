import Footer from '@/components/footer/footer';
import LeaderboardTable from '@/components/leaderboard/leaderboard';
import Link from 'next/link'

const LoiDaiLDP = () => {
    type CustomStyleProperties = {
        [key: string]: string | number;
    };

    return (
        <>
            {/* Section 2 */}
            <div className="relative w-full flex justify-center bg-cover bg-center bg-no-repeat aspect-[1920/1019] mb:aspect-[640/936] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" style={{'--bg-mobile-url': `url(/images/event-loidai/mb-sec2-bg.jpg)`, '--bg-pc-url': `url(/images/event-loidai/pc-sec2-bg.jpg)`} as CustomStyleProperties}>
                <div className="absolute top-[8%] mb:top-[3%] w-[38%] mb:w-[75%] flex justify-center items-center bg-cover bg-center bg-no-repeat aspect-[729/149] bg-[url('/images/event-loidai/text-title-bg.png')]">
                    <span className='bg-gradient-to-b from-[#B43616] to-[#CB130B] inline-block text-transparent bg-clip-text text-[2.5vw] mb:text-xl font-semibold tracking-wide' style={{fontFamily: 'SVN Desire'}}>QUẦN HÙNG HỘI TỤ</span>
                </div>
                <div className="absolute bottom-[15%] mb:bottom-0 w-[52%] mb:w-[98%] bg-cover bg-center bg-no-repeat aspect-[990/592] mb:aspect-[624/729] pc:bg-[image:var(--pc-video-bg-url)] mb:bg-[image:var(--mb-video-bg-url)]" style={{'--pc-video-bg-url': `url(/images/event-loidai/pc-video-bg-2.png)`, '--mb-video-bg-url': `url(/images/event-loidai/mb-video-bg.png)`} as CustomStyleProperties}>
                </div>
            </div>

            {/* Section 3 */}
            <div className="relative overflow-x-hidden w-full flex justify-center bg-cover bg-center bg-no-repeat aspect-[1920/1095] mb:aspect-[640/837] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" style={{'--bg-mobile-url': `url(/images/event-loidai/mb-sec3-bg.jpg)`, '--bg-pc-url': `url(/images/event-loidai/pc-sec3-bg.jpg)`} as CustomStyleProperties}>
                <div className="absolute top-[5%] mb:top-[5%] w-[38%] mb:w-[75%] flex justify-center items-center bg-cover bg-center bg-no-repeat aspect-[729/149] bg-[url('/images/event-loidai/text-title-bg.png')]">
                    <span className='bg-gradient-to-b from-[#B43616] to-[#CB130B] inline-block text-transparent bg-clip-text text-[2.5vw] mb:text-xl font-semibold tracking-wide' style={{fontFamily: 'SVN Desire'}}>PHẦN THƯỞNG</span>
                </div>
                <img className='absolute w-[11%] mb:w-[20%] bottom-[26%] mb:bottom-[32%] right-[19%] mb:right-0 animate-zoom' src="/images/event-loidai/reward-1.png" alt="" />
                <img className='absolute w-[10%] mb:w-[17%] bottom-[17%] mb:bottom-[33%] left-[23%] mb:left-[3%] animate-zoom' src="/images/event-loidai/reward-2.png" alt="" />
                <img className='absolute w-[9%] mb:w-[14%] bottom-[16%] mb:bottom-[26%] right-[19%] mb:-right-[2%] animate-zoom' src="/images/event-loidai/reward-3.png" alt="" />
                <img className='absolute w-[9%] mb:w-[16%] bottom-[20%] mb:bottom-[15%] right-[26%] mb:right-[7%] animate-zoom' src="/images/event-loidai/reward-4.png" alt="" />
                <img className='absolute w-[9%] mb:w-[17%] bottom-[40%] mb:bottom-[57%] right-[17%] mb:-right-[2%] animate-zoom' src="/images/event-loidai/reward-5.png" alt="" />
                <img className='absolute w-[10%] mb:w-[19%] bottom-[38%] mb:bottom-[64%] right-[24%] mb:right-[17%] animate-zoom' src="/images/event-loidai/reward-6.png" alt="" />
                <img className='absolute w-[8%] mb:w-[20%] bottom-[23%] mb:bottom-[66%] left-[17%] mb:left-[3%] animate-zoom' src="/images/event-loidai/reward-7.png" alt="" />
                <img className='absolute w-[10.5%] mb:w-[17%] bottom-[29%] mb:bottom-[17%] left-[21%] mb:-left-[2%] animate-zoom' src="/images/event-loidai/reward-8.png" alt="" />
                <img className="absolute bottom-[5%] mb:bottom-[7%] w-[56%] mb:w-[90%]" src="/images/event-loidai/text-reward.png" alt="" />
            </div>

            {/* Section 4 */}
            <div className="relative overflow-x-hidden w-full flex justify-center bg-cover bg-center bg-no-repeat aspect-[1920/1154] mb:aspect-[640/997] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" style={{'--bg-mobile-url': `url(/images/event-loidai/mb-sec4-bg.jpg)`, '--bg-pc-url': `url(/images/event-loidai/pc-sec4-bg.jpg)`} as CustomStyleProperties}>
                <div className="absolute top-[7%] mb:top-[2%] w-[42%] mb:w-[77%] flex justify-center items-center bg-cover bg-center bg-no-repeat aspect-[729/149] bg-[url('/images/event-loidai/text-title-bg.png')]">
                    <span className='bg-gradient-to-l from-[#EA1D13] to-[#9D1605] inline-block text-transparent bg-clip-text text-[2.5vw] mb:text-xl font-semibold tracking-wide' style={{fontFamily: 'SVN Desire'}}>VINH DANH ĐẠI CAO THỦ</span>
                </div>
                <div className="z-10 absolute w-[15%] top-[21%] mb:w-[35%] mb:top-[12%] inline-block">
                    <select className='relative w-full appearance-none bg-[#fdf2e9] border border-[#8b0000] text-[#898988] text-[1vw] mb:text-[3vw] text-center py-2 px-4 pr-10 rounded-md leading-tight' name="" id="" style={{fontFamily: 'UTM Swiss Condensed'}}>
                        <option>Chọn Máy Chủ</option>
                        <option value="">Máy Chủ 1</option>
                        <option value="">Máy Chủ 2</option>
                        <option value="">Máy Chủ 3</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#FDD38C] bg-[#C81009] rounded-r-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                {/* BXH */}
                <div className="absolute w-[66%] mb:w-full bottom-[2%] flex flex-col items-center bg-cover bg-center bg-no-repeat aspect-[1224/785] mb:aspect-[640/783] 
                    bg-[image:var(--pc-bxh-bg-url)] mb:bg-[image:var(--mb-bxh-bg-url)]" style={{'--pc-bxh-bg-url': `url(/images/event-loidai/pc-bxh-bg.png)`, '--mb-bxh-bg-url': `url(/images/event-loidai/mb-bxh-bg.png)`, fontFamily: 'UTM Swiss Condensed'} as CustomStyleProperties}>
                    <span className='relative mt-[5%] text-[#851915] text-[1.5vw] mb:text-base'>Bảng Xếp Hạng được cập nhật vào ... mỗi ngày</span>
                    <div className="relative w-[82%] mb:w-[90%] h-[30vw] mb:h-[100vw] mt-[1%]">
                        <LeaderboardTable />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoiDaiLDP