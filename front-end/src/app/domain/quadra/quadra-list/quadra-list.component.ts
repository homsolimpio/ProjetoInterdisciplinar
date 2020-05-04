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
    arrayVazio: boolean;
    titulo: string = "Quadra";

    constructor(private quadraService: QuadraService){ }
    
    ngOnInit(){
        
        this.quadraService.findAll().subscribe(quadras =>{
            this.quadras = quadras;
            this.tabelaVazia(this.quadras.length);
        })

    }
    onDelete(id: number) {
        this.quadraService.deleteById(id)
          .subscribe(() => {
            this.quadras = this.quadras.filter(carro => carro.id !== id);
            this.tabelaVazia(this.quadras.length);
        });
    }
    tabelaVazia(arrayLength: number) {
        if (arrayLength == 0) {
          this.arrayVazio = true;
        } else {
          this.arrayVazio = false;
        }
    }

}