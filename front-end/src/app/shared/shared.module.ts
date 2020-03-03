import { NgModule } from "@angular/core";
import { ValorMonetarioPipes } from "./pipes/pipe.valorMonetario";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    ValorMonetarioPipes,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    ValorMonetarioPipes,
  ],
  providers: []
})
export class SharedModule { }
