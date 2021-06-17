import { Component, Injectable, OnInit } from '@angular/core';

import { StudentsService } from '../../services/students.service';
import { Students } from '../../model/students';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nt-table',
  templateUrl: './nt-table.component.html',
  styleUrls: ['./nt-table.component.css']
})
export class NtTableComponent implements OnInit {

  students: Array<any> = new Array();

  constructor(private studentsService: StudentsService){}

  ngOnInit(){
    this.listStudents();
  }

  listStudents(){
      this.studentsService.listStudents().subscribe( students => {
        this.students = students;
      }, err => {
        console.log("Erro ao listar dados", err);
      })
  }

}
