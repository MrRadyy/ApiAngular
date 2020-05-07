import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComputersComponent} from './computers/computers.component';
import {UsersComponent} from './users/users.component';
import {BackupsComponent} from './backups/backups.component';
import {TeplateFormComponent} from './teplate-form/teplate-form.component';
import {LoginpageComponent} from './loginpage/loginpage.component';

const routes: Routes = [
  {path:'computers.component' ,component:ComputersComponent},
  {path: 'users.component', component: UsersComponent},
  {path: 'backup.component',component:BackupsComponent},
  {path:'teplate-form.component',component:TeplateFormComponent},
  {path:'loginpage.component',component:LoginpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
