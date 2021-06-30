import { Router } from '@angular/router';
import { Component, Injectable, OnInit } from '@angular/core';

import { StudentsService } from '../../services/students.service';
import { NgForm, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nt-table',
  templateUrl: './nt-table.component.html',
  styleUrls: ['./nt-table.component.css']
})
export class NtTableComponent implements OnInit {

  student: any;

  constructor(
    private studentsService: StudentsService,
    private router: Router,
    private formBuilder: FormBuilder){}

  ngOnInit(){

    // Cookie
    if(!this._getCookie()) this.router.navigate(['/']);

    if(!this.student && document.cookie){
      this.studentsService.setStudent(this._getCookie()).subscribe(value => {
        this.studentsService.instanceStudent(value);
        this.student = this._getStudent();
      })
    }
    //End cookie

    this.student = this._getStudent();
  }

  _getStudent(): any{
     return this.studentsService.getStudent();
  }

  _getCookie(): any{ //Cookie
    if(document.cookie === '') return false

    const cookie = document.cookie.split('=');
    const formCookie = this.formBuilder.group({
      [cookie[0]]:[cookie[1]]
    })

    return formCookie;
  }

}
