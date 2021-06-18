import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Components
import { DashComponent } from './views/dash/dash.component';
import { NtTableComponent } from './components/nt-table/nt-table.component';

//Module Components
import { LoginModule } from './views/login/login.module';

//Material Components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

//Directives
import { StudentsDirective } from './directives/students.directive';

//Providers
import { StudentsService } from './services/students.service';



@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    NtTableComponent,
    StudentsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [StudentsService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
