import { RouterVideos, Routes, Tabs } from '../interfaces/routes.interface';

export const ROUTES: Routes[] = [
    { path: '/home', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/services', text: 'Services' },
    { path: '/projects', text: 'Projects' },
    { path: '/contact', text: 'Contact' },
];

export const ROUTER_VIDEOS: RouterVideos = {
    '': '/videos/modern-living-room.mp4',
    '/': '/videos/modern-living-room.mp4',
    '/home': '/videos/modern-living-room.mp4',
    '/about': '/videos/modern-living-room.mp4',
    '/services': '/videos/building-projects.mp4',
    '/projects': '/videos/modern-living-room.mp4',
    '/contact': '/videos/contact.mp4',
};

export const TABS: Tabs = {
    '/about': {
        title: 'About Us',
        description:
            "About Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    '/services': {
        title: 'Our Services',
        description:
            "Services Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    '/projects': {
        title: 'Projects',
        description:
            "Projects Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    '/contact': {
        title: 'Contact Us',
        description:
            "Contact Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
};
