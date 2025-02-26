import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FloatingSquaresSide, FloatingSquaresType } from '../../interfaces/custom.interface';

@Component({
    selector: 'app-float-square',
    templateUrl: './floating-squares.component.html',
    imports: [CommonModule],
    styleUrl: './floating-squares.component.less',
})
export class FloatingSquaresComponent {
    @Input() public side: FloatingSquaresSide = 'left';
    @Input() public type: FloatingSquaresType = 'primary';
}
