import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class LoginService{

    url = `${environment.urlApi}/userCliente`;

    constructor(private http: HttpClient) { }

    // findAll(): Observable<Quadra[]>{
    //     return this.http.get<Quadra[]>(`${this.url}`);
    // }
 

}