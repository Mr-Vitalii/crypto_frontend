export interface ISingleNews {
    body: string;
    categories: string;
    downvotes: string;
    guid: string;
    id: string;
    imageurl: string;
    lang: string;
    published_on: number;
    source: any;
    source_info: { name: string; img: string; lang: string };
    tags: string;
    title: string;
    upvotes: string;
    url: string;
}

export interface ISingleNewsProps {
    element: ISingleNews;
}

//* REDUX

export interface INewsState {
    news: ISingleNews[];
    isLoading: boolean;
}
