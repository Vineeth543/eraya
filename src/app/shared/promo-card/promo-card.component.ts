import { ButtonComponent } from '../button/button.component';
import { Component, Input } from '@angular/core';
import { FloatingSquaresComponent } from '../floating-squares/floating-squares.component';

@Component({
    selector: 'app-promo-card',
    imports: [FloatingSquaresComponent, ButtonComponent],
    templateUrl: './promo-card.component.html',
    styleUrl: './promo-card.component.less',
})
export class PromoCardComponent {
    @Input() background: string = '';
}
