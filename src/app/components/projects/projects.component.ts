import { Project } from '../../interfaces/custom.interface';
import { PROJECTS } from '../../data/services.data';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/button/button.component';
import { PromoCardComponent } from '../../shared/promo-card/promo-card.component';
import { FloatingSquaresComponent } from '../../shared/floating-squares/floating-squares.component';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.less',
    imports: [CommonModule, FloatingSquaresComponent, ButtonComponent, PromoCardComponent],
})
export class ProjectsComponent {
    public readonly _projects: Project[] = PROJECTS;

    constructor() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
