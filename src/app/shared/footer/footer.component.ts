import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FOOTER_IMAGES } from '../../data/footer.data';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    imports: [CommonModule],
    styleUrl: './footer.component.less',
})
export class FooterComponent {
    public readonly currentYear: number = new Date().getFullYear();

    public readonly recentWorkImages: string[] = FOOTER_IMAGES;
}
