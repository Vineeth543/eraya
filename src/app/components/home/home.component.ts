import { Procedure } from '../../interfaces/services.interface';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/button/button.component';
import { WORK_PROCEDURE_2 } from '../../data/services.data';
import { WorkCardComponent } from '../../shared/work-card/work-card.component';
import { ServiceListComponent } from '../../shared/service-list/service-list.component';
import { FloatingSquaresComponent } from '../../shared/floating-squares/floating-squares.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-home',
    imports: [CommonModule, ButtonComponent, FloatingSquaresComponent, ServiceListComponent, WorkCardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    public readonly _procedure: Procedure = WORK_PROCEDURE_2;

    public _isFormVisible: boolean = false;

    constructor() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    public _onOpenForm(): void {
        this._isFormVisible = true;
    }

    public _onSubmitForm(): void {
        this._isFormVisible = false;
    }
}
