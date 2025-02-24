import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterVideos, Routes } from '../../interfaces/routes.interface';
import { ROUTER_VIDEOS, ROUTES } from '../../data/routes.data';
import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    imports: [CommonModule, RouterLink, RouterLinkActive],
    styleUrl: './header.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    private readonly routeAndBackgroundMap: RouterVideos = ROUTER_VIDEOS;
    public readonly routes: Routes[] = ROUTES;
    public currentBg$: Observable<string> = new Observable<string>();

    constructor(
        private router: Router,
        private elRef: ElementRef,
    ) {
        this.currentBg$ = this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map((route: NavigationEnd) => {
                this.elRef.nativeElement?.querySelector?.('video')?.load();
                return this.routeAndBackgroundMap?.[route.url];
            }),
        );
    }
}
