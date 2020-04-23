import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import { ComputersComponent } from './computers/computers.component';
import { UsersComponent } from './users/users.component';
import { BackupsComponent } from './backups/backups.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputersComponent,
    UsersComponent,
    BackupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
