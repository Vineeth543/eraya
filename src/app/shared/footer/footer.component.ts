import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FOOTER_IMAGES } from '../../data/footer.data';
import { FloatingSquaresComponent } from '../floating-squares/floating-squares.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    imports: [CommonModule, FloatingSquaresComponent],
    styleUrl: './footer.component.less',
})
export class FooterComponent {
    public readonly currentYear: number = new Date().getFullYear();

    public readonly recentWorkImages: string[] = FOOTER_IMAGES;
}
