import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import { ComputersComponent } from './computers/computers.component';
import { UsersComponent } from './users/users.component';
import { BackupsComponent } from './backups/backups.component';
import { CTemplateComponent } from './c-template/c-template.component';
import { TeplateFormComponent } from './teplate-form/teplate-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { JobFormComponent } from './job-form/job-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputersComponent,
    UsersComponent,
    BackupsComponent,
    CTemplateComponent,
    TeplateFormComponent,
    TeplateFormComponent,
    LoginpageComponent,
    JobFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
