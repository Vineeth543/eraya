import { ButtonComponent } from '../button/button.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-thank-you',
    imports: [ButtonComponent],
    templateUrl: './thank-you.component.html',
    styleUrl: './thank-you.component.less',
})
export class ThankYouComponent {
    @Input() public success: boolean = false;
    @Input() public customClass: string = '';

    @Output() public onConfirm: EventEmitter<void> = new EventEmitter<void>();
}
