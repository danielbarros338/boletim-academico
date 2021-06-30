import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private snackBar: MatSnackBar){}

  ngOnInit(): void{
    if(!document.cookie){
      this._snackCall();
    }
  }

  _snackCall(): void {
    this.snackBar.open(`Esse site utiliza cookies
    para oferecer uma melhor experiência de navegação.
    Clicando em OK você aceita nossa política de privacidade.`,'OK',{
      verticalPosition:"top"
    })
  }
}
