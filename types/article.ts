
interface Tags {
    id?: number;
    name: string;
    link?: string;
}

interface Article {
    _id?: number;
    title: string;
    description: string;
    cover: string;
    link: string;
    created_at: string;
    updated_at: string;
    tags?: Tags[];
    post_icon?: string;
}



export type { Tags, Article };