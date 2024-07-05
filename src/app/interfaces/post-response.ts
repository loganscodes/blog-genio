export interface PostResponse {
    id: number;
    title: {
        rendered: string;
    }
    content: {
        rendered: string;
    }
    slug: string;
    excerpt:{
        rendered: string;
    }
    date: string;
    jetpack_featured_media_url: string;
}