export interface FeedPost {
    title: string;
    author?: string;
    date: string;
    preview: string;
    link: string;
    description: string;
    categories: string[]
}

export interface Feed {
    title: string;
    description: string;
    feedUrl: string;
    posts: FeedPost[];
    site: string;
    pubDate?: string;
}
