import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { TipoQuadra } from "./tipo-quadra";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class TipoQuadraService{

    url = `${environment.urlApi}/tipo-quadra`;

    constructor(private http: HttpClient) { }

    findAll(): Observable<TipoQuadra[]>{
        return this.http.get<TipoQuadra[]>(`${this.url}`);
    }
   
}