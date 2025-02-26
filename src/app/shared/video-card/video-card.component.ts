import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Component, Input, OnInit } from '@angular/core';
import { FloatingSquaresComponent } from '../floating-squares/floating-squares.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ButtonType, FloatingSquaresSide, FloatingSquaresType, VideoCardType } from '../../interfaces/custom.interface';

@Component({
    selector: 'app-video-card',
    imports: [CommonModule, FloatingSquaresComponent, ButtonComponent],
    templateUrl: './video-card.component.html',
    styleUrl: './video-card.component.less',
})
export class VideoCardComponent implements OnInit {
    @Input() public title: string = '';
    @Input() public header: string = '';
    @Input() public videoUrl: string = '';
    @Input() public cardType!: VideoCardType;
    @Input() public buttonUrl: string = '';
    @Input() public buttonType!: ButtonType;
    @Input() public buttonLabel: string = '';
    @Input() public description: string = '';
    @Input() public leftStrengths: string[] = [];
    @Input() public rightStrengths: string[] = [];
    @Input() public backgroundColor: string = '';
    @Input() public floatingSquaresSide!: FloatingSquaresSide;
    @Input() public floatingSquaresType!: FloatingSquaresType;

    public safeUrl: SafeResourceUrl = '';

    constructor(private sanitizer: DomSanitizer) {}

    public ngOnInit(): void {
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    }
}
