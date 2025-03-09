export type theme = 'light' | 'dark';

export interface Service {
    title: string;
    icon?: string;
    serial?: string;
    description: string;
    theme?: theme;
}

export interface Procedure {
    title: string;
    header: string;
    titleClass: string;
    backgroundColor: string;
    services: Service[];
}
