import { StudentsService } from './../../services/students.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  err: string = "";
  student: any;
  

  constructor(
    private formBuilder: FormBuilder, 
    private studentsService: StudentsService,
    private router: Router,
    private snackBar: MatSnackBar
    ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      mat:[null]
    })

    this._snackCall();
  }

  _convertMat(form: FormGroup): FormGroup{
    form.value['mat'] = Number(form.value['mat']);

    if(typeof form.value['mat'] !== 'number' || !form.value['mat']){
      this.snackBar.open('Matrícula inexistente','Fechar',{
        duration: 4000,
        verticalPosition: 'top'
      });
    }
  
    return form;
  }

  _submitStudent(): void{
    this.studentsService.setStudent(this.form).subscribe(value => {
      this.student = value;
      this.err = "";

      this.studentsService.instanceStudent(this.student);

      this._cookie(this.form)

      this.router.navigate(['/dashboard']);
    }, err => {
      this.err = "Matrícula inexistente";
    })
  }

  onSubmit(): void{
    this._convertMat(this.form);
    this._submitStudent();
  }

  _cookie(form: FormGroup): void{
    document.cookie = `mat=${form.value['mat']}; path="/";`
  }

  _snackCall(): void {
    this.snackBar.open(`Esse site utiliza cookies
    para oferecer uma melhor experiência de navegação.
    Clicando em OK você aceita nossa política de privacidade.`,'OK',{
      verticalPosition:"top"
    })
  }
}
