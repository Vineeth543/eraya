import { Component } from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.less',
})
export class ProjectsComponent {
    constructor() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
