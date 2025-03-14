import { Project, VideoCard } from '../interfaces/custom.interface';
import { Procedure, Service } from '../interfaces/services.interface';

export const SERVICES: Service[] = [
    {
        title: 'Home Interior',
        icon: 'home',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        title: 'Office Interior',
        icon: 'office',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        title: 'Restaurant Interior',
        icon: 'kitchen',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        title: 'Architecture',
        icon: 'architecture',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        title: 'Resort Interior',
        icon: 'home',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        title: 'Hospital Interior',
        icon: 'office',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        title: 'Institute Interior',
        icon: 'kitchen',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        title: 'Showroom Interior',
        icon: 'architecture',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
];

export const WORK_PROCEDURE_1: Procedure = {
    header: 'HOW WE WORK',
    title: 'OUR WORK PROCEDURE',
    titleClass: '',
    backgroundColor: 'bg-[#F8F8F8]',
    services: [
        {
            title: 'CLIENT DESIGN CONSULTATION',
            icon: 'consult',
            theme: 'light',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        },
        {
            title: 'PROTOTYPING HOME DESIGN',
            icon: 'pencil',
            theme: 'dark',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        },
        {
            title: 'PROCESSING TO DESIGN HOME',
            icon: 'house',
            theme: 'light',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        },
    ],
};

export const WORK_PROCEDURE_2: Procedure = {
    header: '',
    title: 'HOW WE WORK',
    titleClass: 'text-center',
    backgroundColor: 'bg-[#F6FFFE]',
    services: [
        {
            title: 'Statement of the problem',
            serial: '01',
            theme: 'light',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
        },
        {
            title: 'Project presentation',
            serial: '02',
            theme: 'dark',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
        },
        {
            title: 'Development of renderings',
            serial: '03',
            theme: 'light',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
        },
    ],
};

export const SERVICES_CARD: VideoCard[] = [
    {
        title: 'HOME DESIGN CONSULTATION SERVICES',
        header: 'Design Consultation',
        videoUrl: 'https://www.youtube.com/embed/NopJnAhO9w0?si=-E5IEA_a2Tq0ZYTP',
        cardType: 'primary',
        buttonUrl: '/contact',
        buttonType: 'primary',
        buttonLabel: 'Contact Us',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        leftStrengths: ['Flexible Time', 'Perfect Work', 'Client Priority'],
        rightStrengths: ['Quality Work', 'Client Priority', 'Perfect Work'],
        backgroundColor: 'bg-[#F6FFFE]',
        floatingSquaresSide: 'right',
        floatingSquaresType: 'secondary',
    },
    {
        title: 'HOME DESIGN 3D 2D INTERIOR SERVICES',
        header: 'Design Consultation',
        videoUrl: 'https://www.youtube.com/embed/NopJnAhO9w0?si=-E5IEA_a2Tq0ZYTP',
        cardType: 'secondary',
        buttonUrl: '/contact',
        buttonType: 'primary',
        buttonLabel: 'Contact Us',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        leftStrengths: ['Flexible Time', 'Perfect Work', 'Client Priority'],
        rightStrengths: [],
        backgroundColor: 'bg-[#F8F8F8]',
        floatingSquaresSide: 'left',
        floatingSquaresType: 'primary',
    },
    {
        title: 'ALL IN ONE HOME INTERIOR DESIGN',
        header: 'Design Consultation',
        videoUrl: 'https://www.youtube.com/embed/NopJnAhO9w0?si=-E5IEA_a2Tq0ZYTP',
        cardType: 'primary',
        buttonUrl: '/contact',
        buttonType: 'primary',
        buttonLabel: 'Contact Us',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        leftStrengths: ['Flexible Time', 'Perfect Work', 'Client Priority'],
        rightStrengths: ['Quality Work', 'Client Priority', 'Perfect Work'],
        backgroundColor: 'bg-[#F6FFFE]',
        floatingSquaresSide: 'right',
        floatingSquaresType: 'secondary',
    },
];

export const ABOUT_US_CARDS: VideoCard[] = [
    {
        title: 'WE ARE PERFECT TEAM FOR HOME INTERIOR DECORATION',
        header: 'Who We Are',
        imageSrc: '/images/living-room-5.png',
        cardType: 'primary',
        buttonUrl: '',
        buttonType: 'primary',
        buttonLabel: '',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. h Ipsum has been the industry's standard dummy text ever since the 1500s",
        leftStrengths: ['Flexible Time', 'Perfect Work', 'Client Priority'],
        rightStrengths: ['Quality Work', 'Client Priority', 'Perfect Work'],
        backgroundColor: 'bg-[#F6FFFE]',
        floatingSquaresSide: 'left',
        floatingSquaresType: 'secondary',
    },
    {
        title: 'WHY TO CHOOSE OUR HOME DESIGN INTERIOR SERVICES',
        header: 'TRUST US NOW',
        videoUrl: 'https://www.youtube.com/embed/NopJnAhO9w0?si=-E5IEA_a2Tq0ZYTP',
        cardType: 'primary',
        buttonUrl: '',
        buttonType: 'primary',
        buttonLabel: '',
        description:
            "Lorem ipsum dolor Lorem Ipsum is simply dummy text of the printing and typesetting industry. h Ipsum has been the industry's standard dummy text ever since the 1500s amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        leftStrengths: ['Flexible Time', 'Perfect Work', 'Client Priority'],
        rightStrengths: ['Quality Work', 'Client Priority', 'Perfect Work'],
        backgroundColor: '',
        floatingSquaresSide: 'right',
        floatingSquaresType: 'secondary',
    },
];

export const PROJECTS: Project[] = [
    {
        title: 'PRE MADE HOME CONSULTATION',
        image: '/images/living-room-1.png',
        highlights: ['Office Meeting', 'Working Time Call', 'Come to Place'],
    },
    {
        title: 'INTERIOR DESIGN REPAIR',
        image: '/images/living-room-2.jpg',
        highlights: ['Repair Design', 'Color Selection', 'Furniture Design'],
    },
    {
        title: 'FULL HOUSE DECORATION',
        image: '/images/living-room-3.jpg',
        highlights: ['Color Selection', 'Furniture Design', 'Office Meeting'],
    },
    {
        title: 'PRE BUILDING HOME DESIGN',
        image: '/images/living-room-4.jpg',
        highlights: ['Office Meeting', 'Working Time Call', 'Come to Place'],
    },
    {
        title: 'FULL PACKAGE DECORATION',
        image: '/images/living-room-5.png',
        highlights: ['Frame Design', 'Color Selection', 'Furniture Design'],
    },
    {
        title: 'EXPERIENCE FRAME DESIGN',
        image: '/images/living-room-6.jpg',
        highlights: ['Frame Design', 'Color Selection', 'Furniture Design'],
    },
];
