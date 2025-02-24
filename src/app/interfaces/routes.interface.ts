export interface Routes {
    path: string;
    text: string;
}

export interface RouterVideos {
    [key: string]: string;
}

export interface Tabs {
    [key: string]: {
        title: string;
        description: string;
    };
}
