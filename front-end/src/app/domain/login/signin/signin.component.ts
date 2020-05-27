import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PlatformDetectorService } from "src/app/core/plataform-detector/plataform-detector.service";
import { LoginService } from "../login.service";
import { LoginModule } from "../login.module";

@Component({
    selector:'app-signin-component',
    templateUrl:'signin.component.html',
    styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit{

    signinForm: FormGroup;
    //@ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
       // private authService: AuthService,
        private router: Router,
        private loginService: LoginService) { }

    ngOnInit(){
        this.signinForm = this.formBuilder.group({
            email:['', [
                Validators.required,
                Validators.email]
            ],
            senha:['', [
                Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ]
        })
    }

    login(){
        var email = this.signinForm.get('email').value;
        var senha = this.signinForm.get('senha').value;

        this.loginService.findUserClienteByEmailAndSenha(email, senha)
        .subscribe(bool => {
            console.log("boolean " + bool);
            
            if(bool){
                this.router.navigate(["/ginasio"]);
            }else{
                console.log("ERROR");                
            }
        });
    }
    
}