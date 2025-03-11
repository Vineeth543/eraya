import { HeroComponent } from './shared/hero/hero.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, HeroComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    public _route: string = '';

    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this._route = event.url;
            }
        });
    }
}
