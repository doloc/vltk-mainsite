const Footer = () => {
    type CustomStyleProperties = {
        [key: string]: string | number;
    };
    
    return (
        <>
            <div className="relative text-[1vw] mb:text-[1.3vw] text-[#EED7B4] w-full flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat aspect-[1920/241] mb:aspect-[640/138] bg-[image:var(--pc-footer-url)] mb:bg-[image:var(--mb-footer-url)]" style={{'--pc-footer-url': `url(/images/event-loidai/pc-footer.jpg)`, '--mb-footer-url': `url(/images/event-loidai/mb-footer.jpg)`} as CustomStyleProperties}>
                <div className="w-full flex justify-center gap-[2%]">
                    <img className='w-[5%] mb:w-[10%]' src="/images/event-loidai/logo-vng.png" alt="" />
                    <img className='w-[5%] mb:w-[10%]' src="/images/event-loidai/logo-kingsoft.png" alt="" />
                </div>
                <span className='mt-[1%]'>Công ty Cổ phần VNG.</span>
                <span>Địa chỉ trụ sở: Z06, Đường 13, phường Tân</span>
                <span>Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số: 251/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 22/6/2015</span>
                <span>Quyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số: 345/QĐ-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 24/09/2018</span>
            </div>
        </>
    )
}

export default Footer;