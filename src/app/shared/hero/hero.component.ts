import { SOCIALS } from '../../data/socials.data';
import { Socials } from '../../interfaces/socials.interface';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { RouterVideos, Tabs } from '../../interfaces/routes.interface';
import { ROUTER_VIDEOS, TABS } from '../../data/routes.data';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-hero',
    imports: [CommonModule, ButtonComponent],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
    private readonly routeAndBackgroundMap: RouterVideos = ROUTER_VIDEOS;

    public readonly _tabs: Tabs = TABS;
    public readonly _socials: Socials[] = SOCIALS;

    public _currentTab: string = '';
    public _videoSource$: Observable<string> = new Observable<string>();
    public _isFormVisible: boolean = false;

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

    public _onOpenForm(): void {
        this._isFormVisible = true;
    }

    public _onSubmitForm(): void {
        this._isFormVisible = false;
    }
}
