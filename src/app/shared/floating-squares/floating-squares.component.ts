import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-float-square',
    templateUrl: './floating-squares.component.html',
    imports: [CommonModule],
    styleUrl: './floating-squares.component.less',
})
export class FloatingSquaresComponent {
    @Input() public side: 'left' | 'right' = 'left';
    @Input() public type: 'primary' | 'secondary' = 'primary';
}
