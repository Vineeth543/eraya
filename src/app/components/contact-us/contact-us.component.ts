import { SOCIALS } from '../../data/socials.data';
import { Socials } from '../../interfaces/socials.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import { ButtonComponent } from '../../shared/button/button.component';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { ThankYouComponent } from '../../shared/thank-you/thank-you.component';
import { FloatingSquaresComponent } from '../../shared/floating-squares/floating-squares.component';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    imports: [CommonModule, FormsModule, ButtonComponent, FloatingSquaresComponent, LoaderComponent, ThankYouComponent],
    styleUrl: './contact-us.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsComponent {
    public readonly _socials: Socials[] = SOCIALS;

    public _name: string = '';
    public _phone: string = '';
    public _email: string = '';
    public _message: string = '';
    public _loading: boolean = false;
    public _isFormSubmissionError: boolean = false;
    public _isFormSubmissionSuccess: boolean = false;

    constructor(
        private cdr: ChangeDetectorRef,
        private contactService: ContactService,
    ) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this._isFormSubmissionSuccess = this.contactService.hasSentEmail();
    }

    private resetState(success: boolean, error: boolean): void {
        this._name = '';
        this._phone = '';
        this._email = '';
        this._message = '';
        this._loading = false;
        this._isFormSubmissionError = error;
        this._isFormSubmissionSuccess = success;
        this.cdr.detectChanges();
    }

    public _onSubmitForm(): void {
        const fields = [
            { id: 'name', value: this._name },
            { id: 'phone', value: this._phone },
            { id: 'email', value: this._email },
            { id: 'message', value: this._message },
        ];

        fields.forEach(field => (document.getElementById(field.id)!.style.border = field.value ? '1px solid white' : '1px solid red'));

        if (fields.some(field => !field.value)) return;

        this._loading = true;

        this.contactService.sendEmail({ name: this._name, phone: this._phone, email: this._email, message: this._message }).subscribe({
            next: (): void => this.resetState(true, false),
            error: (): void => this.resetState(false, true),
            complete: (): void => this.contactService.setSentEmail(),
        });
    }

    public _onSubmitAnotherResponseClick(): void {
        this.resetState(false, false);
        this.contactService.clearSentEmail();
    }

    public _scrollToContactForm(): void {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }
}
