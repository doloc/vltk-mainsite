export interface Post {
    postId: number;
    title: string;
    content: string;
    description: string;
    path: string;
    thumbnail: string;
    type: string;
    game: string;
    gameId: number;
    public: boolean;
    time: string;
}