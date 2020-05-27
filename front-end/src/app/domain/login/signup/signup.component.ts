import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserCliente } from "../login";
import Validation from "src/app/core/util/validation";
import { LoginService } from "../login.service";

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
        private loginService: LoginService
    ){ }
    ngOnInit(){
        this.signupForm = this.formBuilder.group({
            id:[],
            nome:['',Validators.required],
            email:['',[Validators.required, Validators.email]],
            senha:['',[Validators.required, Validators.min(4)]]
        })
        this.boolConfirmarSenha = true;
    }
    conferirSenha(senha: any){
        
       var teste = this.signupForm.get('senha').value;

       if((teste == senha) && this.signupForm.invalid == false) {
           this.boolConfirmarSenha = false;
       }else {
            this.boolConfirmarSenha = true;
       }
    }

    onSave(userCliente: UserCliente) {
        if (this.signupForm.invalid) {
          //Valida todos os campos do formulario
          Validation.allFormFields(this.signupForm);
        } else {
          this.loginService.save(userCliente).subscribe(() => {
            //Redireciona para a lista de quadra
            //this.router.navigate(["/quadra"]);
            this.signupForm.reset();
          });
        }
      }
}