import { StudentsService } from './../../services/students.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private studentsService: StudentsService) {
  }

  _convertMat(form: FormGroup): FormGroup{
    form.value['mat'] = Number(form.value['mat']);

    if(typeof form.value['mat'] !== 'number' || !form.value['mat']){
      console.log("OK");
    } else {
      console.log("Insira somente números");
    }
  
    return form;
  }

  onSubmit(): void{
    this._convertMat(this.form);

    this.studentsService.getStudent(this.form).subscribe(value => console.log("matricula existe", value.matricula))
  }

  ngOnInit(): void {
    /*
      outra forma

      this.form = new FormGroup({
        name: new FormControl(null)
      })
    */
    this.form = this.formBuilder.group({
      mat:[null]
    })
  }

}
