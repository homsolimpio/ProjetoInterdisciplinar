import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PlatformDetectorService } from "src/app/core/plataform-detector/plataform-detector.service";

@Component({
    selector:'app-signin-component',
    templateUrl:'signin.component.html'
})
export class SigninComponent implements OnInit{

    signinForm: FormGroup;
    //@ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
       // private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService) { }

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
    
}