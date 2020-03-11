import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Estado } from "./estado";

@Injectable({
  providedIn: "root"
})
export class EstadoService {
  url = `${environment.urlApi}/estado`;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Estado[]> {
    return this.http.get<Estado[]>(`${this.url}`);
  }
}
