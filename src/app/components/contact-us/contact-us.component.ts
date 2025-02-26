import { Component } from '@angular/core';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.less',
})
export class ContactUsComponent {
    constructor() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
