import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GinasioListComponent } from "./ginasio-list/ginasio-list.component";

const routes: Routes = [
    {path: '', component: GinasioListComponent},
    //{path: 'novo', component: QuadraFormComponent},
    //{path: 'editar/:id', component: QuadraFormComponent},
    //{path: 'visualizar/:id', component: QuadraFormComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GinasioRoutingModule { }