export type FloatingSquaresSide = 'left' | 'right';

export type FloatingSquaresType = 'primary' | 'secondary';

export type VideoCardType = 'primary' | 'secondary';

export type ButtonType = 'primary' | 'secondary';

export interface VideoCard {
    title: string;
    header: string;
    videoUrl?: string;
    imageSrc?: string;
    cardType: VideoCardType;
    buttonUrl: string;
    buttonType: ButtonType;
    buttonLabel: string;
    description: string;
    leftStrengths: string[];
    rightStrengths: string[];
    backgroundColor: string;
    floatingSquaresSide: FloatingSquaresSide;
    floatingSquaresType: FloatingSquaresType;
}

export interface Project {
    title: string;
    image: string;
    highlights: string[];
}

export interface ContactData {
    name: string;
    phone: string;
    email: string;
    message: string;
}

export interface ContactResponse {
    message: string;
}
