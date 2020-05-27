import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { UserCliente } from "./login";

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

    findUserClienteByEmailAndSenha(email: string, senha: string): Observable<boolean>{
        return this.http.get<boolean>(`${this.url}/autenticacao/${email}/${senha}`);
    }

    save(userCliente: UserCliente): Observable<UserCliente>{
        if(userCliente.id){
            return this.http.post<UserCliente>(`${this.url}`, JSON.stringify(userCliente), httpOptions);
        } else {
            return this.http.post<UserCliente>(`${this.url}`, JSON.stringify(userCliente),httpOptions);
        }
    }
}