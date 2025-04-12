export interface Media {
    id: number;
    title: string;
    description: string;
    youtube_video_id: string;
    category: string;
    published_at: string;
    thumbnail_url: string;
}

export interface MediaResponse{
    media : Media[]
}