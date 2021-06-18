import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Students } from '../model/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient){}

  listStudents(): Observable<any>{
    return this.http.get("https://boletim-online-api.herokuapp.com/api/v1/boletim/");
  }

  getStudent(mat: any): Observable<any>{
    console.log(mat.value.mat)
    return this.http.get(`https://boletim-online-api.herokuapp.com/api/v1/boletim/aluno?matricula=${mat.value.mat}`)
  }
}
