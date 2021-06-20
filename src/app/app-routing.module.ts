import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { DashComponent } from './views/dash/dash.component';

const routes: Routes = [{
  path: "",
  component: LoginComponent
},
{
  path: ":dashboard",
  component: DashComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
