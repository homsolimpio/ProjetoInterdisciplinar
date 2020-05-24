import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector:'app-signup-component',
    templateUrl:'signup.component.html',
    styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit{
    signupForm: FormGroup;
    boolConfirmarSenha: boolean;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
    ){ }
    ngOnInit(){
        this.signupForm = this.formBuilder.group({
            id:[],
            nome:['',Validators.required],
            email:['',Validators.required],
            senha:['',Validators.required]
        })
    }
    conferirSenha(senha: any){
        
       var teste = this.signupForm.get('senha').value;

       console.log("senha: " + teste );

       console.log("confirmar senha: " + senha);

       if(teste == senha){
           console.log("Consegui talvez");
           this.boolConfirmarSenha = false;
       }else{
            this.boolConfirmarSenha = true;
       }
       
       
    }
}