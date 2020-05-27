import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "src/app/core/core.module";
import { QuadraService } from "./quadra.service";
import { QuadraListComponent } from "./quadra-list/quadra-list.component";
import { QuadraFormComponent } from "./quadra-form/quadra-form.component";
import { QuadraRoutingModule } from "./quadra-routing.module";
import { TipoQuadraService } from "./tipo-quadra/tipo-quadra.service";
import { SharedModule } from "src/app/shared/shared.module";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { QuadraListUserComponent } from "./quadra-list-user/quadra-list-user.component";

@NgModule({
    declarations: [
        QuadraListComponent,
        QuadraFormComponent,
        QuadraListUserComponent

    ],
    imports: [
        CommonModule,
        QuadraRoutingModule,
        FormsModule,
        CoreModule,
        ReactiveFormsModule,
        SharedModule,
        CurrencyMaskModule,
    ],
    providers: [QuadraService,
        TipoQuadraService],
    exports: []
})
export class QuadraModule { }