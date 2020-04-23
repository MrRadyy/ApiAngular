import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComputersComponent} from './computers/computers.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {path:'computers.component' ,component:ComputersComponent},
  {path: 'users.component', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
