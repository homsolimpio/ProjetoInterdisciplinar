import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Quadra } from "./quadra";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class QuadraService{

    url = `${environment.urlApi}/quadra`;

    constructor(private http: HttpClient) { }

    findAll(): Observable<Quadra[]>{
        return this.http.get<Quadra[]>(`${this.url}`);
    }
    findById(id: number): Observable<Quadra>{
        return this.http.get<Quadra>(`${this.url}/${id}`);
    }
    save(quadra: Quadra): Observable<Quadra>{
        if(quadra.id){
            return this.http.put<Quadra>(`${this.url}`, JSON.stringify(quadra), httpOptions);
        } else {
            return this.http.post<Quadra>(`${this.url}`, JSON.stringify(quadra),httpOptions);
        }
    }
    deleteById(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
    }

}