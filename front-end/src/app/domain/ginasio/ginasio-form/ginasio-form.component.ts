import { OnInit, Component } from "@angular/core";
import { GinasioService } from "../ginasio.service";
import { FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-ginasio-form',
    templateUrl: './ginasio-form.component.html',
    styleUrls: ['./ginasio-form.component.css']
})
export class GinasioFormComponent implements OnInit {

    constructor(
        private ginasioService: GinasioService,
        private builder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute
    )
    {}

    ngOnInit(){}
}