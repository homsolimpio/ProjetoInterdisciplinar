import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuadraListComponent } from "./quadra-list/quadra-list.component";
import { QuadraFormComponent } from "./quadra-form/quadra-form.component";
import { QuadraListUserComponent } from "./quadra-list-user/quadra-list-user.component";
import { QuadraReservaComponent } from "./quadra-reserva/quadra-reserva.component";

const routes: Routes = [
    {path: '', component: QuadraListComponent},
    {path: 'novo', component: QuadraFormComponent},
    {path: 'editar/:id', component: QuadraFormComponent},
    {path: 'visualizar/:id', component: QuadraFormComponent},
    {path: 'listar-quadras', component: QuadraListUserComponent},
    {path: 'reserva/:id', component: QuadraReservaComponent},
    
    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuadraRoutingModule { }