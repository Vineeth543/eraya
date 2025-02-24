import { SOCIALS } from '../../data/socials.data';
import { Socials } from '../../interfaces/socials.interface';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterVideos, Routes, Tabs } from '../../interfaces/routes.interface';
import { ROUTER_VIDEOS, ROUTES, TABS } from '../../data/routes.data';
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

    public readonly tabs: Tabs = TABS;
    public readonly routes: Routes[] = ROUTES;
    public readonly socials: Socials[] = SOCIALS;

    public _currentTab: string = '';
    public _videoSource$: Observable<string> = new Observable<string>();

    constructor(
        private router: Router,
        private elRef: ElementRef,
    ) {
        this._videoSource$ = this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map((route: NavigationEnd) => {
                this._currentTab = route.url;
                this.elRef.nativeElement?.querySelector?.('video')?.load();
                return this.routeAndBackgroundMap?.[route.url];
            }),
        );
    }

    public _navigateToSocials(url: string): void {
        window.open(url, '_blank');
    }
}
