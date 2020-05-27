import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../login.service";


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
                this.router.navigate(["/quadra/listar-quadras"]);
            }else{
                console.log("ERROR");                
            }
        });
    }
    
}