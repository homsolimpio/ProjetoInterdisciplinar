import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Cidade } from "./cidade";

@Injectable({
  providedIn: "root"
})
export class CidadeService {
  url = `${environment.urlApi}/cidade`;

  constructor(private http: HttpClient) {}

  findCidadeByEstadoId(estadoId: number): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(`${this.url}/find-cidade/${estadoId}`);
  }
}
