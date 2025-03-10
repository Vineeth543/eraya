import { ROUTES } from '../../data/routes.data';
import { Routes } from '../../interfaces/routes.interface';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    imports: [CommonModule, RouterLink, RouterLinkActive],
    styleUrl: './header.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    public readonly _routes: Routes[] = ROUTES;
}
