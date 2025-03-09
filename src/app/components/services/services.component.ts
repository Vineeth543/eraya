import { Component } from '@angular/core';
import { VideoCard } from '../../interfaces/custom.interface';
import { Procedure } from '../../interfaces/services.interface';
import { CommonModule } from '@angular/common';
import { WorkCardComponent } from '../../shared/work-card/work-card.component';
import { VideoCardComponent } from '../../shared/video-card/video-card.component';
import { ServiceListComponent } from '../../shared/service-list/service-list.component';
import { SERVICES_CARD, WORK_PROCEDURE_1 } from '../../data/services.data';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrl: './services.component.less',
    imports: [CommonModule, ServiceListComponent, VideoCardComponent, WorkCardComponent],
})
export class ServicesComponent {
    public readonly _procedure: Procedure = WORK_PROCEDURE_1;
    public readonly _servicesCard: VideoCard[] = SERVICES_CARD;

    constructor() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
