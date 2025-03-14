import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
    { path: 'about', loadComponent: () => import('./components/about-us/about-us.component').then(m => m.AboutUsComponent) },
    { path: 'services', loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent) },
    { path: 'projects', loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent) },
    { path: 'contact', loadComponent: () => import('./components/contact-us/contact-us.component').then(m => m.ContactUsComponent) },
];
