import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { LoginService } from './login.service';
// import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent

    ],
    imports: [
        CommonModule,
        //LoginRoutingModule,
        FormsModule,
        CoreModule,
        ReactiveFormsModule,
        SharedModule,
    ],
    providers: [LoginService],
    exports: [
        SigninComponent, 
        SignupComponent
    ]
})
export class LoginModule { }