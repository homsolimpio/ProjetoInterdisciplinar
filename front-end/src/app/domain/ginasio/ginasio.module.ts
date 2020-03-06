import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { GinasioService } from "./ginasio.service";

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        //QuadraRoutingModule,
        FormsModule,
        CoreModule,
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [GinasioService],
    exports: []
})
export class GinasioModule { }