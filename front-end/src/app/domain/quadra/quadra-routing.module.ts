import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuadraListComponent } from "./quadra-list/quadra-list.component";

const routes: Routes = [
    {path: '', component: QuadraListComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuadraRoutingModule { }