import { Component, OnInit } from "@angular/core";
import { Quadra } from "../quadra";
import { QuadraService } from "../quadra.service";

@Component({
    selector: 'app-quadra-lits-user',
    templateUrl: './quadra-list-user.component.html',
    styleUrls: ['./quadra-list-user.component.css']
})
export class QuadraListUserComponent implements OnInit{

    quadras: Quadra[];

    constructor(private quadraService: QuadraService){}

    ngOnInit(){
        this.quadraService.findAll().subscribe(quadras =>{
            this.quadras = quadras;
            console.log(this.quadras);
        })
    }
}