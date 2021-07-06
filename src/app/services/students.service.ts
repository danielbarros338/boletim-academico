import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Student } from './../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  student: any;
  api: string = "https://boletim-online-api.herokuapp.com/api/v1/boletim/"
  apiQuery: string = "https://boletim-online-api.herokuapp.com/api/v1/boletim/aluno?matricula="

  constructor(private http: HttpClient){}

  listStudents(): Observable<any>{
    return this.http.get(this.api);
  }

  setStudent(registration: any): Observable<any>{
    return this.http.get(`${this.apiQuery}${registration.value.mat}`)
  }

  instanceStudent(student: any): void {
    this.student = new Student(student);
    this._percent(this.student.frequency);
  }

  getStudent(): any {
    return this.student;
  }

  _percent(data: number): string{
    this.student['freq'] = data.toString();
    return this.student['freq'];
  }
}
