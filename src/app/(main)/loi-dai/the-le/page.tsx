import Footer from "@/components/footer/footer";

const RulePage = () => {
    type CustomStyleProperties = {
        [key: string]: string | number;
    };

    return (
        <>
            {/* Content Rules */}
            <div
                className="relative w-screen min-h-screen"
                style={{
                    backgroundImage: 'url(/images/event-loidai/bg-content.jpg)',
                    backgroundRepeat: 'repeat-y',
                    backgroundSize: '100% auto',
                    backgroundPosition: 'center top',
                }}
            >
                <div className="relative px-[14%] pb-[12.5%]">
                    <div className="w-full px-[10%]">
                        <h1 className="title py-[2%] block text-center text-4xl font-bold">THỂ LỆ</h1>
                        <p className="pt-3 pb-3">Quý đại hiệp thân mến,</p>
                        <p>Từ tháng 06/2023, nhằm tôn vinh các cao thủ xuất sắc nhất đại diện từng máy chủ, giải đấu đặc biệt Vô Song Hào Kiệt 2023 sẽ chính thức khởi tranh, giúp đại hiệp giang hồ thỏa sức thể hiện bản lĩnh và đoạt lấy vô số phần thưởng giá trị liên thành.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default RulePage;