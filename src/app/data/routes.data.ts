import { RouterVideos, Routes, Tabs } from '../interfaces/routes.interface';

export const ROUTES: Routes[] = [
    { path: '/home', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/services', text: 'Services' },
    { path: '/projects', text: 'Projects' },
    { path: '/contact', text: 'Contact' },
];

export const ROUTER_VIDEOS: RouterVideos = {
    '': 'videos/modern-living-room.mp4',
    '/': 'videos/modern-living-room.mp4',
    '/home': 'videos/modern-living-room.mp4',
    '/about': 'videos/modern-living-room.mp4',
    '/services': 'videos/building-projects.mp4',
    '/projects': 'videos/modern-living-room.mp4',
    '/contact': 'videos/contact.mp4',
};

export const TABS: Tabs = {
    '/about': {
        title: 'About Us',
        description:
            "At Eraya Interiors, we bring creativity and expertise to transform spaces into personalized masterpieces. As a design-focused interior firm, we specialize in custom, end-to-end interior solutions that reflect each client's unique taste and lifestyle.",
    },
    '/services': {
        title: 'Our Services',
        description:
            'At Eraya Interiors, our process is designed to keep you involved, informed, and inspired every step of the way. Here’s how we transform ideas into stunning, functional spaces.',
    },
    '/projects': {
        title: 'Projects',
        description:
            'At Eraya Interiors, every project is a collaboration built on creativity, precision, and trust. Our process is designed to bring your vision to life while ensuring a smooth and stress-free experience from start to finish.',
    },
    '/contact': {
        title: 'Contact Us',
        description:
            "At Eraya Interiors, we believe that every great project starts with a conversation. Whether you have a question, need more information, or are ready to start your design journey, we're here to help.",
    },
};
