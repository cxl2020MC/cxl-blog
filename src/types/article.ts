interface Article {
    id?: number;
    title: string;
    description: string;
    image: string;
    link: string;
    createdAt?: string;
    updatedAt?: string;
    tags?: string[];
    post_icon?: string;
}

export type { Article };