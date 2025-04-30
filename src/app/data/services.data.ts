import { Project, VideoCard } from '../interfaces/custom.interface';
import { Procedure, Service } from '../interfaces/services.interface';

export const SERVICES: Service[] = [
    {
        title: 'Interior Design Consultation',
        icon: 'home',
        description: 'Tailored design guidance to understand your style, needs, and vision.',
    },
    {
        title: 'Concept Development',
        icon: 'office',
        description: 'Mood boards, material suggestions, and style themes crafted to set the tone for your space.',
    },
    {
        title: '3D Drawings & Photorealistic Renders',
        icon: 'kitchen',
        description: 'Visualize your space with high-quality, lifelike renderings before execution.',
    },
    {
        title: 'Custom Furniture & Decor Design',
        icon: 'architecture',
        description: 'Unique pieces designed specifically for your space and personality.',
    },
    {
        title: 'Detailed Production Drawings',
        icon: 'home',
        description: 'Accurate, to-scale technical drawings for smooth and precise implementation.',
    },
    {
        title: 'Material & Finish Selection',
        icon: 'office',
        description: 'Expert curation of surfaces, colors, textures, and finishes that elevate your space.',
    },
    {
        title: 'Engineering Support',
        icon: 'architecture',
        description: 'Seamless integration of MEP (Mechanical, Electrical, and Plumbing) systems with the design.',
    },
    {
        title: 'Styling & Final Touches',
        icon: 'architecture',
        description: 'Finishing your space with thoughtful styling, accessories, and décor that bring everything together.',
    },
];

export const WORK_PROCEDURE_1: Procedure = {
    header: 'HOW WE WORK',
    title: 'OUR WORK PROCEDURE',
    titleClass: '',
    backgroundColor: 'bg-[#F8F8F8]',
    services: [
        {
            title: 'DESIGN CONSULTATION',
            icon: 'consult',
            theme: 'light',
            description:
                'At Eraya Interiors, our design consultation is the first step in understanding you—your style, your needs, and how you want to live or work in your space. It’s where creativity meets clarity',
        },
        {
            title: 'PROTOTYPING & DESIGN',
            icon: 'pencil',
            theme: 'dark',
            description:
                'We create a design concept that reflects your vision, including mood boards and material suggestions. This is where we prototype your ideas into a tangible design plan.',
        },
        {
            title: 'DESIGN EXECUTION',
            icon: 'house',
            theme: 'light',
            description:
                'From finishes and fabrics to lighting and accessories, we help you choose every detail. Meanwhile, we prepare precise production drawings for flawless execution.',
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
            title: 'Consultation & Design Development',
            serial: '01',
            theme: 'light',
            description:
                'We start with a detailed consultation to understand your needs and preferences. We then create a design concept that reflects your vision, including mood boards and material suggestions.',
        },
        {
            title: 'Material Selection & Technical Drawings',
            serial: '02',
            theme: 'dark',
            description:
                'From finishes and fabrics to lighting and accessories, we help you choose every detail. Meanwhile, we prepare precise production drawings for flawless execution.',
        },
        {
            title: 'Execution & Project Management',
            serial: '03',
            theme: 'light',
            description:
                'Our skilled team handles the on-site work, coordinating all civil, electrical, and carpentry tasks while ensuring timelines, quality, and transparency. And add the final curated touches',
        },
    ],
};

export const SERVICES_CARD: VideoCard[] = [
    {
        title: 'Tailor-Made Designs with a Personal Touch',
        header: 'Design Consultation',
        imageSrc: '/images/living-room-8.jpg',
        cardType: 'primary',
        buttonUrl: '/contact',
        buttonType: 'primary',
        buttonLabel: 'Contact Us',
        description:
            'We don’t do templates. Every project is custom designed to reflect your individuality, lifestyle, and taste. We believe in a collaborative process, where your input is invaluable.',
        leftStrengths: ['Great Design', 'Attention to Detail', 'Quality Work'],
        rightStrengths: ['Flexible Time', 'Perfect Work', 'Client Priority'],
        backgroundColor: 'bg-[#F6FFFE]',
        floatingSquaresSide: 'right',
        floatingSquaresType: 'secondary',
    },
    {
        title: 'Visual Clarity with 3D Renders & Drawings',
        header: 'PROTOTYPING & DESIGN',
        imageSrc: '/images/3d-render.jpg',
        cardType: 'secondary',
        buttonUrl: '/contact',
        buttonType: 'primary',
        buttonLabel: 'Contact Us',
        description:
            "See your space before it's built. Our photorealistic 3D visuals ensure you know exactly what to expect. We also provide detailed production drawings for precise implementation.",
        leftStrengths: ['Perfect Work', 'Great Design', 'Flexible Time'],
        rightStrengths: [],
        backgroundColor: 'bg-[#F8F8F8]',
        floatingSquaresSide: 'left',
        floatingSquaresType: 'primary',
    },
    {
        title: 'Quality Without Compromise',
        header: 'DESIGN EXECUTION',
        imageSrc: '/images/living-room-7.jpg',
        cardType: 'primary',
        buttonUrl: '/contact',
        buttonType: 'primary',
        buttonLabel: 'Contact Us',
        description:
            'From materials to finishes, we obsess over the details to deliver quality that lasts. Our skilled team handles everything from civil work to final styling, ensuring a seamless experience.',
        leftStrengths: ['Quality Work', 'Great Design', 'Attention to Detail'],
        rightStrengths: ['Flexible Time', 'Perfect Work', 'Client Priority'],
        backgroundColor: 'bg-[#F6FFFE]',
        floatingSquaresSide: 'right',
        floatingSquaresType: 'secondary',
    },
];

export const ABOUT_US_CARDS: VideoCard[] = [
    {
        title: 'Designers of Space, Curators of Identity',
        header: 'Who We Are',
        imageSrc: '/images/living-room-5.png',
        cardType: 'primary',
        buttonUrl: '',
        buttonType: 'primary',
        buttonLabel: '',
        description:
            'We are Eraya Interiors—a passionate team of designers, engineers, and creators driven by the belief that great design can transform lives.  We don’t believe in copy-paste design. Every space we create tells a unique story of yours.',
        leftStrengths: ['Flexible Time', 'Perfect Work', 'Client Priority'],
        rightStrengths: ['Quality Work', 'Great Design', 'Attention to Detail'],
        backgroundColor: 'bg-[#F6FFFE]',
        floatingSquaresSide: 'left',
        floatingSquaresType: 'secondary',
    },
    {
        title: 'WHY TO CHOOSE OUR INTERIOR DESIGN SERVICES',
        header: 'TRUST US NOW',
        imageSrc: '/images/living-room-9.jpg',
        cardType: 'primary',
        buttonUrl: '',
        buttonType: 'primary',
        buttonLabel: '',
        description:
            'Our strength lies in blending creative design thinking with technical expertise, offering everything from concept development and 3D visualization to turnkey execution and engineering support.',
        leftStrengths: ['Quality Work', 'Great Design', 'Attention to Detail'],
        rightStrengths: ['Flexible Time', 'Perfect Work', 'Client Priority'],
        backgroundColor: '',
        floatingSquaresSide: 'right',
        floatingSquaresType: 'secondary',
    },
];

export const PROJECTS: Project[] = [
    {
        title: 'PRE MADE INTERIOR CONSULTATION',
        image: '/images/living-room-1.png',
        highlights: ['Office Meeting', 'Working Time Call', 'Come to Place'],
    },
    {
        title: 'INTERIOR DESIGN REPAIR',
        image: '/images/living-room-2.jpg',
        highlights: ['Repair Design', 'Color Selection', 'Furniture Design'],
    },
    {
        title: 'FULL INTERIOR DECORATION',
        image: '/images/living-room-3.jpg',
        highlights: ['Color Selection', 'Furniture Design', 'Office Meeting'],
    },
    {
        title: 'PRE BUILDING INTERIOR DESIGN',
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
