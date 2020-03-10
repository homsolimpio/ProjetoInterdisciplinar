import { Component, OnInit } from "@angular/core";
import { GinasioService } from "../ginasio.service";
import { Ginasio } from "../ginasio";

@Component({
    selector: 'app-ginasio-lits',
    templateUrl: './ginasio-list.component.html',
    styleUrls: ['./ginasio-list.component.css']
})
export class GinasioListComponent implements OnInit{

    ginasio: Ginasio[];
    arrayVazio: boolean;
    titulo: string = "Ginasio";

    constructor(private ginasioService: GinasioService){}

    ngOnInit(){
        this.ginasioService.findAll().subscribe(ginasios =>{
            this.ginasio = ginasios;
            console.log(this.ginasio);
            this.tabelaVazia(this.ginasio.length);
            
        })
    }

    onDelete(id: number) {
        this.ginasioService.deleteById(id)
          .subscribe(() => {
            //Remove carro da lista
            this.ginasio = this.ginasio.filter(carro => carro.id !== id);
            this.tabelaVazia(this.ginasio.length);
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