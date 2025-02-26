export type theme = 'light' | 'dark';

export interface Service {
    title: string;
    icon: string;
    description: string;
    theme?: theme;
}
