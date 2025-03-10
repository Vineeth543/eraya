import { Component } from '@angular/core';
import { VideoCard } from '../../interfaces/custom.interface';
import { CommonModule } from '@angular/common';
import { ABOUT_US_CARDS } from '../../data/services.data';
import { VideoCardComponent } from '../../shared/video-card/video-card.component';
import { PromoCardComponent } from '../../shared/promo-card/promo-card.component';
import { FloatingSquaresComponent } from '../../shared/floating-squares/floating-squares.component';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.less',
    imports: [CommonModule, FloatingSquaresComponent, VideoCardComponent, PromoCardComponent],
})
export class AboutUsComponent {
    public readonly _aboutUsCards: VideoCard[] = ABOUT_US_CARDS;
    public readonly _promoCardBackground: string = `bg-[url('/images/living-area-armchair-1.png')] bg-cover bg-center bg-no-repeat bg-[#f6fffee3] bg-blend-lighten`;

    constructor() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
