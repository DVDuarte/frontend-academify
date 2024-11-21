import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private baseUrl = 'http://localhost:3000/alunos'; // URL da API

  constructor(private http: HttpClient) {}

  listarAlunos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  obterAluno(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  criarAluno(aluno: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, aluno);
  }

  atualizarAluno(id: number, aluno: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, aluno);
  }

  excluirAluno(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
