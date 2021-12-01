import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FormasPagamento } from "../models/formasPagamento";

@Injectable({
    providedIn: "root",
})
export class FormasPagamentoService {
    private baseUrl = "http://localhost:5000/api/formasPagamento";

    constructor(private http: HttpClient) {}

    list(): Observable<FormasPagamento[]> {
        return this.http.get<FormasPagamento[]>(`${this.baseUrl}/list`);
    }
}
