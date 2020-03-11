import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GinasioListComponent } from "./ginasio-list/ginasio-list.component";
import { GinasioFormComponent } from "./ginasio-form/ginasio-form.component";

const routes: Routes = [
  { path: "", component: GinasioListComponent },
  { path: "novo", component: GinasioFormComponent },
  { path: "editar/:id", component: GinasioFormComponent },
  { path: "visualizar/:id", component: GinasioFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GinasioRoutingModule {}
