import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuadraListComponent } from "./quadra-list/quadra-list.component";
import { QuadraFormComponent } from "./quadra-form/quadra-form.component";

const routes: Routes = [
    {path: '', component: QuadraListComponent},
    {path: 'cadastro', component: QuadraFormComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuadraRoutingModule { }