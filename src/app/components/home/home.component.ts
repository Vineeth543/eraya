import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { CommonModule } from '@angular/common';

export interface Service {
    title: string;
    icon: string;
    description: string;
}

@Component({
    selector: 'app-home',
    imports: [CommonModule, ButtonComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.less',
})
export class HomeComponent {
    services: Service[] = [
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
    ];
}
