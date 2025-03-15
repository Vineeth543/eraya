import { SOCIALS } from '../../data/socials.data';
import { Socials } from '../../interfaces/socials.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FOOTER_IMAGES } from '../../data/footer.data';
import { Component, Input } from '@angular/core';
import { FloatingSquaresComponent } from '../floating-squares/floating-squares.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    imports: [CommonModule, FloatingSquaresComponent, RouterModule],
    styleUrl: './footer.component.less',
})
export class FooterComponent {
    @Input() public currentTab: string = '';

    public readonly _socials: Socials[] = SOCIALS;
    public readonly _currentYear: number = new Date().getFullYear();
    public readonly _recentWorkImages: string[] = FOOTER_IMAGES;
}
