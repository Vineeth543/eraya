import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-projects',
    imports: [HeaderComponent],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.less',
})
export class ProjectsComponent {}
