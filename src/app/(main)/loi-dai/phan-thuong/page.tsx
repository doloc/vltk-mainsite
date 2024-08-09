import Footer from "@/components/footer/footer";

const RewardPage = () => {
    return (
<>
            {/* Content Reward */}
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
                        <h1 className="title py-[2%] block text-center text-4xl font-bold">PHẦN THƯỞNG</h1>
                        <p className="pt-3 pb-3">Quý đại hiệp thân mến,</p>
                        <p>Hãy cùng cập nhật ngay hệ thống phần thưởng cực chất từ giải đấu Bang Hội Tranh Đoạt Chiến 2023 và sẵn sàng chuẩn bị chiến lược phù hợp để tranh đoạt, xưng bá thiên hạ.</p>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default RewardPage;