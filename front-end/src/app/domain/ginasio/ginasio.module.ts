import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { GinasioService } from "./ginasio.service";
import { GinasioListComponent } from "./ginasio-list/ginasio-list.component";
import { GinasioRoutingModule } from "./ginasio-routing.module";
import { CidadeService } from "../endereco/cidade/cidade.service";
import { EstadoService } from "../endereco/estado/estado.service";
import { GinasioFormComponent } from "./ginasio-form/ginasio-form.component";

@NgModule({
  declarations: [GinasioListComponent, GinasioFormComponent],
  imports: [
    CommonModule,
    GinasioRoutingModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule
  ],
  providers: [GinasioService, CidadeService, EstadoService],
  exports: []
})
export class GinasioModule {}
