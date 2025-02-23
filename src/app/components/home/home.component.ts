import { Service } from '../../interfaces/services.interface';
import { SERVICES } from '../../data/services.data';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/button/button.component';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
    selector: 'app-home',
    imports: [CommonModule, ButtonComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements AfterViewInit {
    @ViewChild('cardContainer', { static: true }) private cardContainer!: ElementRef;

    private readonly MAX_ROWS: number = 2;
    private readonly CARD_GAP: number = 28;
    private readonly CARD_WIDTH: number = 454;

    public services: Service[] = SERVICES;
    public visibleServices: Service[] = [];
    public moreServicesCount: number = 0;
    public cardContainerWidth: number = 0;

    constructor(private readonly cdr: ChangeDetectorRef) {}

    @HostListener('window:resize')
    public onWindowResize(): void {
        this.updateVisibleServices();
    }

    public ngAfterViewInit(): void {
        this.updateVisibleServices();
    }

    private updateVisibleServices(): void {
        const containerWidth: number = this.cardContainer.nativeElement.offsetWidth;
        const cardsPerRow: number = Math.floor((containerWidth + this.CARD_GAP - this.CARD_WIDTH) / (this.CARD_WIDTH + this.CARD_GAP));
        const maxCards: number = cardsPerRow * this.MAX_ROWS;
        this.visibleServices = this.services.slice(0, maxCards);
        this.moreServicesCount = this.services.length - maxCards;
        this.cardContainerWidth = cardsPerRow * (this.CARD_WIDTH + this.CARD_GAP) - this.CARD_GAP;
        this.cardContainerWidth < 0 && (this.cardContainerWidth = 0);
        this.cdr.detectChanges();
    }
}
