import { Procedure } from '../../interfaces/services.interface';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FloatingSquaresComponent } from '../floating-squares/floating-squares.component';

@Component({
    selector: 'app-work-card',
    imports: [CommonModule, FloatingSquaresComponent],
    templateUrl: './work-card.component.html',
    styleUrl: './work-card.component.less',
})
export class WorkCardComponent {
    @Input() card!: Procedure;
}
