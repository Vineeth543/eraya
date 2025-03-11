import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactData, ContactResponse } from '../interfaces/custom.interface';

@Injectable({ providedIn: 'root' })
export class ContactService {
    private readonly EMAIL_ENDPOINT: string = 'http://localhost:3000/contact';
    private readonly EMAIL_SENT_KEY: string = 'sentEmail';
    private readonly sessionStorage: Storage = sessionStorage;

    constructor(private httpClient: HttpClient) {}

    public sendEmail(data: ContactData): Observable<ContactResponse> {
        return this.httpClient.post<ContactResponse>(this.EMAIL_ENDPOINT, data);
    }

    public setSentEmail(): void {
        this.sessionStorage.setItem(this.EMAIL_SENT_KEY, 'true');
    }

    public hasSentEmail(): boolean {
        return this.sessionStorage.getItem(this.EMAIL_SENT_KEY) === 'true';
    }

    public clearSentEmail(): void {
        this.sessionStorage.clear();
    }
}
