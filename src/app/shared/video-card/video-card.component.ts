import { VideoCard } from '../../interfaces/custom.interface';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FloatingSquaresComponent } from '../floating-squares/floating-squares.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-video-card',
    imports: [CommonModule, FloatingSquaresComponent, ButtonComponent],
    templateUrl: './video-card.component.html',
    styleUrl: './video-card.component.less',
})
export class VideoCardComponent implements OnInit {
    @Input() public card!: VideoCard;

    public _safeUrl: SafeResourceUrl = '';

    constructor(private sanitizer: DomSanitizer) {}

    public ngOnInit(): void {
        if (this.card.videoUrl) this._safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.card.videoUrl);
    }
}
