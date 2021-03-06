import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes , RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';

const router: Routes =[
  {path: 'quadra', loadChildren: './domain/quadra/quadra.module#QuadraModule'},
  {path: 'ginasio', loadChildren: './domain/ginasio/ginasio.module#GinasioModule'},
  {path: 'login', loadChildren: './domain/login/login.module#LoginModule'},
  {path: '', component: HomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
