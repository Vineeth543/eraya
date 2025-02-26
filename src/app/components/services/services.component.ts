import { Service } from '../../interfaces/services.interface';
import { Component } from '@angular/core';
import { VideoCard } from '../../interfaces/custom.interface';
import { CommonModule } from '@angular/common';
import { VideoCardComponent } from '../../shared/video-card/video-card.component';
import { ServiceListComponent } from '../../shared/service-list/service-list.component';
import { FloatingSquaresComponent } from '../../shared/floating-squares/floating-squares.component';
import { SERVICES_CARD, WORK_PROCEDURE } from '../../data/services.data';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrl: './services.component.less',
    imports: [CommonModule, FloatingSquaresComponent, ServiceListComponent, VideoCardComponent],
})
export class ServicesComponent {
    public readonly procedures: Service[] = WORK_PROCEDURE;
    public readonly servicesCard: VideoCard[] = SERVICES_CARD;
}
