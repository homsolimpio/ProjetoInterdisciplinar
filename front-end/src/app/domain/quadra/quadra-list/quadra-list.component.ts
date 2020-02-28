import { Component, OnInit } from "@angular/core";
import { QuadraService } from "../quadra.service";
import { Quadra } from "../quadra";

@Component({
    selector: 'app-quadra-lits',
    templateUrl: './quadra-list.component.html',
    styleUrls: ['./quadra-list.component.css']
})
export class QuadraListComponent implements OnInit{

    quadras: Quadra[];

    constructor(private quadraService: QuadraService){ }
    
    ngOnInit(){
        
    this.quadraService.findAll().subscribe(quadras =>{
    this.quadras = quadras;
    console.log(this.quadras);
})

    }

}