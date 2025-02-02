import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrl: './button.component.less',
})
export class ButtonComponent {
    @Input() text: string = '';
}
