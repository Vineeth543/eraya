import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/button/button.component';
import { FloatingSquaresComponent } from '../../shared/floating-squares/floating-squares.component';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.less',
    imports: [CommonModule, FloatingSquaresComponent, ButtonComponent],
})
export class AboutUsComponent {
    public readonly leftStrengths: string[] = ['Flexible Time', 'Perfect Work', 'Client Priority'];
    public readonly rightStrengths: string[] = ['Innovative Ideas', 'Quality Work', 'Fast Delivery'];
}
