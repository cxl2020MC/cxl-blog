
interface Tags {
    id?: number;
    name: string;
    link?: string;
}

interface Article {
    id?: number;
    title: string;
    description: string;
    image: string;
    link: string;
    createdAt?: string;
    updatedAt?: string;
    tags?: Tags[];
    post_icon?: string;
}



export type { Tags, Article };