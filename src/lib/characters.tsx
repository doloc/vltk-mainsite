export interface Character {
    name: string;
    icon: string;
    avatar: string;
    imgName: string;
    detail: string;
    element: string;
    weapon: string;
    restrainer: string;
    desc: string;
}

export const characters: Character[] = [
    {
        name: "NGA MY",
        icon: "/images/characters/icon-NgaMy.png",
        avatar: "/images/characters/character-NgaMy.png",
        imgName: "/images/characters/name-NgaMy.png",
        detail: "Tầm Xa, Trị Liệu, Làm Chậm",
        element: "Thủy",
        weapon: "Kiếm",
        restrainer: "Cái Bang, Võ Hồn, Thiên Nhẫn",
        desc: "Nga My chuyên trị liệu và làm chậm địch, khiến địch giảm tốc đánh và di chuyển"
    },
    // {
    //     name: "CÁI BANG",
    //     icon: "/images/characters/icon-NgaMy.png",
    //     avatar: "/images/characters/character-NgaMy.png",
    //     imgName: "/images/characters/name-NgaMy.png",
    //     detail: "Cận Chiến, Bộc Phát, Hỗ Trợ",
    //     element: "Hỏa",
    //     weapon: "Côn",
    //     restrainer: "Thiên Vương, Thiếu Lâm",
    //     desc: "Cái Bang thuộc hệ Hỏa, côn pháp vang danh thiên hạ, có khả năng giảm phòng thủ địch, tăng tấn công của bản thân và đồng đội trong thời gian ngắn"
    // },
]