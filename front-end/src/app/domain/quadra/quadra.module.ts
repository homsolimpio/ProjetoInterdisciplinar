import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "src/app/core/core.module";
import { QuadraService } from "./quadra.service";
import { QuadraListComponent } from "./quadra-list/quadra-list.component";
import { QuadraFormComponent } from "./quadra-form/quadra-form.component";
import { QuadraRoutingModule } from "./quadra-routing.module";
import { TipoQuadraService } from "./tipo-quadra/tipo-quadra.service";


@NgModule({
    declarations:[
        QuadraListComponent,
        QuadraFormComponent
    
    ],
    imports: [
        CommonModule,
        QuadraRoutingModule,
        FormsModule,
        CoreModule,
        ReactiveFormsModule
    ],
    providers: [QuadraService,
                TipoQuadraService],
    exports:[]
})
export class QuadraModule { }