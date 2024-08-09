import { Post } from "@/entity/post";
import { get } from "@/lib/api-helper";

const dataApiUrl = `${process.env.NEXT_PUBLIC_DATA_API}`;

const homePageApiRequest = {
    getContentInfo: async (gameId: number, type: string, from: number, count: number) => {    
        const url = dataApiUrl + "/post";
        const resp = await get<{
            data: Post[];
            error_code: number;
            message: string
        }>(url, {
            gameId,
            type,
            from,
            count,
            public: true,
        });
        return resp;
    }
}

export default homePageApiRequest;