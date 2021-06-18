import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
  }
  
  ngOnInit(): void {
    /*
      outra forma

      this.form = new FormGroup({
        name: new FormControl(null)
      })
    */
    this.form = this.formBuilder.group({
      mat:[null,]
    })
  }

  teste(form: any){
    if(typeof form.value['mat'] != "number"){
      console.log("É diferente")
      form.preventDefault();
    }
    console.log(typeof form.value['mat'])
  }

}
