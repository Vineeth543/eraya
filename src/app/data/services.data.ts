import { Service } from '../interfaces/services.interface';
import { VideoCard } from '../interfaces/custom.interface';

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
    {
        title: 'Shop Interior',
        icon: 'home',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
];

export const WORK_PROCEDURE: Service[] = [
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
];

export const SERVICES_CARD: VideoCard[] = [
    {
        title: 'HOME DESIGN CONSULTATION SERVICES',
        header: 'Design Consultation',
        videoUrl: 'https://www.youtube.com/embed/NopJnAhO9w0?si=-E5IEA_a2Tq0ZYTP',
        cardType: 'primary',
        buttonUrl: '/contact',
        buttonType: 'secondary',
        buttonLabel: 'Contact Us',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        leftStrengths: ['Flexible Time', 'Perfect Work', 'Client Priority'],
        rightStrengths: ['Quality Work', 'Client Priority', 'Perfect Work'],
        backgroundColor: 'bg-[#F6FFFE]',
        floatingSquaresSide: 'left',
        floatingSquaresType: 'primary',
    },
    {
        title: 'HOME DESIGN 3D 2D INTERIOR SERVICES',
        header: 'Design Consultation',
        videoUrl: 'https://www.youtube.com/embed/NopJnAhO9w0?si=-E5IEA_a2Tq0ZYTP',
        cardType: 'secondary',
        buttonUrl: '/contact',
        buttonType: 'secondary',
        buttonLabel: 'Contact Us',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        leftStrengths: ['Flexible Time', 'Perfect Work', 'Client Priority'],
        rightStrengths: [],
        backgroundColor: 'bg-[#F8F8F8]',
        floatingSquaresSide: 'right',
        floatingSquaresType: 'primary',
    },
    {
        title: 'ALL IN ONE HOME INTERIOR DESIGN',
        header: 'Design Consultation',
        videoUrl: 'https://www.youtube.com/embed/NopJnAhO9w0?si=-E5IEA_a2Tq0ZYTP',
        cardType: 'primary',
        buttonUrl: '/contact',
        buttonType: 'secondary',
        buttonLabel: 'Contact Us',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        leftStrengths: ['Flexible Time', 'Perfect Work', 'Client Priority'],
        rightStrengths: ['Quality Work', 'Client Priority', 'Perfect Work'],
        backgroundColor: 'bg-[#F6FFFE]',
        floatingSquaresSide: 'left',
        floatingSquaresType: 'primary',
    },
];
