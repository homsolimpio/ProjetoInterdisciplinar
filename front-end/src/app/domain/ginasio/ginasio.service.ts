import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Ginasio } from "./ginasio";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class GinasioService{

    url = `${environment.urlApi}/ginasio`;

    constructor(private http: HttpClient) { }

    findAll(): Observable<Ginasio[]>{
        return this.http.get<Ginasio[]>(`${this.url}`);
    }
    findById(id: number): Observable<Ginasio>{
        return this.http.get<Ginasio>(`${this.url}/${id}`);
    }
    save(ginasio: Ginasio): Observable<Ginasio>{
        if(ginasio.id){
            return this.http.post<Ginasio>(`${this.url}`, JSON.stringify(ginasio), httpOptions);
        } else {
            return this.http.post<Ginasio>(`${this.url}`, JSON.stringify(ginasio),httpOptions);
        }
    }
    deleteById(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
    }

}