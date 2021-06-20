import { Component, Injectable, OnInit } from '@angular/core';

import { StudentsService } from '../../services/students.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nt-table',
  templateUrl: './nt-table.component.html',
  styleUrls: ['./nt-table.component.css']
})
export class NtTableComponent implements OnInit {

  student: any;

  constructor(private studentsService: StudentsService){}

  ngOnInit(){
    this.student = this._getStudent();
    console.log(this.student)
  }

  _getStudent(): any{
     return this.studentsService.getStudent();
  }

}
