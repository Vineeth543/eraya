export type FloatingSquaresSide = 'left' | 'right';

export type FloatingSquaresType = 'primary' | 'secondary';

export type VideoCardType = 'primary' | 'secondary';

export type ButtonType = 'primary' | 'secondary';

export interface VideoCard {
    title: string;
    header: string;
    videoUrl: string;
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
