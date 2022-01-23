import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loja } from '../consulta-lojaSupermercador/loja';

@Injectable({ providedIn: 'root' })
export class AlunoService {
  URL = '';

  constructor(private http: HttpClient) {
    this.URL = 'https://modelo-projeto-express-10.milenasilvadefr.repl.co';
  }

  obterProdutos(): Observable<loja[]> {
    return this.http.get<loja[]>(`${this.URL}/lojaSupermercador`);
  }
}
