import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { GinasioService } from "./ginasio.service";
import { GinasioListComponent } from "./ginasio-list/ginasio-list.component";
import { GinasioRoutingModule } from "./ginasio-routing.module";

@NgModule({
    declarations: [
        GinasioListComponent
    ],
    imports: [
        CommonModule,
        GinasioRoutingModule,
        FormsModule,
        CoreModule,
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [GinasioService],
    exports: []
})
export class GinasioModule { }