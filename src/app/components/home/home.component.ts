import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/button/button.component';
import { ServiceListComponent } from '../../shared/service-list/service-list.component';
import { FloatingSquaresComponent } from '../../shared/floating-squares/floating-squares.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-home',
    imports: [CommonModule, ButtonComponent, FloatingSquaresComponent, ServiceListComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
