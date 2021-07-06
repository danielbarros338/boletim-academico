import { Component, Directive, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})

export class DashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): any{
    let date = new Date(2010,0,1);
    let dateString = date.toUTCString();
    
    document.cookie = `mat= ; expires=${dateString} path=; `
  }
}
