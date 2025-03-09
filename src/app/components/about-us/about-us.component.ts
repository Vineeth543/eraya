import { Component } from '@angular/core';
import { VideoCard } from '../../interfaces/custom.interface';
import { CommonModule } from '@angular/common';
import { ABOUT_US_CARDS } from '../../data/services.data';
import { ButtonComponent } from '../../shared/button/button.component';
import { VideoCardComponent } from '../../shared/video-card/video-card.component';
import { FloatingSquaresComponent } from '../../shared/floating-squares/floating-squares.component';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.less',
    imports: [CommonModule, FloatingSquaresComponent, ButtonComponent, VideoCardComponent],
})
export class AboutUsComponent {
    public readonly aboutUsCards: VideoCard[] = ABOUT_US_CARDS;

    constructor() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
