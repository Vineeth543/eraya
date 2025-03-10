import { ButtonType } from '../../interfaces/custom.interface';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    imports: [CommonModule, RouterModule],
    styleUrl: './button.component.less',
})
export class ButtonComponent {
    @Input() text: string = '';
    @Input() type: ButtonType = 'primary';
    @Input() block: boolean = false;
    @Input() redirectUrl: string = '';
}
