import { SOCIALS } from '../../data/socials.data';
import { Socials } from '../../interfaces/socials.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import { ButtonComponent } from '../button/button.component';
import { RouterVideos, Tabs } from '../../interfaces/routes.interface';
import { ROUTER_VIDEOS, TABS } from '../../data/routes.data';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-hero',
    imports: [CommonModule, FormsModule, ButtonComponent],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
    private readonly routeAndBackgroundMap: RouterVideos = ROUTER_VIDEOS;

    public readonly _tabs: Tabs = TABS;
    public readonly _socials: Socials[] = SOCIALS;

    public _name: string = '';
    public _phone: string = '';
    public _email: string = '';
    public _message: string = '';
    public _loading: boolean = false;
    public _currentTab: string = '';
    public _videoSource$: Observable<string> = new Observable<string>();
    public _isFormVisible: boolean = false;
    public _isFormSubmissionError: boolean = false;
    public _isFormSubmissionSuccess: boolean = false;

    constructor(
        private cdr: ChangeDetectorRef,
        private elRef: ElementRef,
        private router: Router,
        private contactService: ContactService,
    ) {
        this._videoSource$ = this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map((route: NavigationEnd) => {
                this._currentTab = route.url;
                this.elRef.nativeElement?.querySelector?.('video')?.load();
                return this.routeAndBackgroundMap?.[route.url];
            }),
        );
        this._isFormSubmissionSuccess = this.contactService.hasSentEmail();
    }

    private resetState(visible: boolean, success: boolean, error: boolean): void {
        this.contactService.setSentEmail();
        this._name = '';
        this._phone = '';
        this._email = '';
        this._message = '';
        this._loading = false;
        this._isFormSubmissionError = error;
        this._isFormSubmissionSuccess = success;
        this._isFormVisible = visible;
        this.cdr.detectChanges();
    }

    public _onOpenForm(): void {
        this._isFormVisible = true;
    }

    public _onSubmitAnotherResponseClick(): void {
        this.resetState(true, false, false);
        this.contactService.clearSentEmail();
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
            next: (): void => this.resetState(false, true, false),
            error: (): void => this.resetState(false, false, true),
            complete: (): void => this.contactService.setSentEmail(),
        });
    }
}
