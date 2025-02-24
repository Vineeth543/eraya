import { RouterVideos, Routes } from '../interfaces/routes.interface';

export const ROUTES: Routes[] = [
    { path: '/home', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/services', text: 'Services' },
    { path: '/projects', text: 'Projects' },
    { path: '/contact', text: 'Contact' },
];

export const ROUTER_VIDEOS: RouterVideos = {
    '/home': '/videos/modern-living-room.mp4',
    '/about': '/videos/modern-living-room.mp4',
    '/services': '/videos/building-projects.mp4',
    '/projects': '/videos/modern-living-room.mp4',
    '/contact': '/videos/contact.mp4',
};
