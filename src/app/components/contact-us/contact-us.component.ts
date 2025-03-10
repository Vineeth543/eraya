import { SOCIALS } from '../../data/socials.data';
import { Socials } from '../../interfaces/socials.interface';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/button/button.component';
import { FloatingSquaresComponent } from '../../shared/floating-squares/floating-squares.component';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    imports: [CommonModule, ButtonComponent, FloatingSquaresComponent],
    styleUrl: './contact-us.component.less',
})
export class ContactUsComponent {
    public readonly _socials: Socials[] = SOCIALS;

    constructor() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    public _onSubmitForm(): void {}

    public _scrollToContactForm(): void {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }
}
