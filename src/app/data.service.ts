import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Computer} from '../Models/Computers.model';
import {Backups} from '../Models/Backups.model';
import {Destinations} from '../Models/Destinations.model';
import {FTP_Logins} from '../Models/FTP_Logins.model';
import {Jobs} from '../Models/Jobs.model';
import {Local} from '../Models/Local.model';
import {Network_Logins} from '../Models/Network_Logins.model';
import {Sources} from '../Models/Sources.model';
import {Template} from '../Models/Template.model';
import {users} from '../Models/Users.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
ComputerURL = 'http://localhost:3306/api/Computers';
BackupURL = 'http://localhost:3306/api/Backups';
DestinatonsURL = 'http://localhost:3306/api/Destinations';
FTPLoginsURL = 'http://localhost:3306/api/FTP_Logins';
JobsURL = 'http://localhost:3306/api/Jobs';
LocalURL = 'http://localhost:3306/api/Local';
NetworkLoginsURL = 'http://localhost:3306/api/';
SourcesURL = 'http://localhost:3306/api/Sources';
TemplateURL = 'http://localhost:3306/api/Template';
UsersURL = 'http://localhost:3306/api/Users';

  constructor(private  http: HttpClient) { }

  getComputers() {
return this.http.get<Computer[]>(this.ComputerURL);
}

  getBackup() {
    return this.http.get<Backups[]>(this.BackupURL);
  }

  getDestinations() {
    return this.http.get<Destinations[]>(this.DestinatonsURL);
  }

  getFTPLogins() {
    return this.http.get<FTP_Logins[]>(this.FTPLoginsURL);
  }

  getJobs() {
    return this.http.get<Jobs[]>(this.JobsURL);
  }

  getLocal() {
    return this.http.get<Local[]>(this.LocalURL);
  }

  getNewtorkLogins() {

    return this.http.get<Network_Logins[]>(this.NetworkLoginsURL);
  }

  getSources() {

    return this.http.get<Sources[]>(this.SourcesURL);
  }

  getTemplate() {

    return this.http.get<Template[]>(this.TemplateURL);
  }

  getUsers() {

    return this.http.get<users[]>(this.UsersURL);
  }
}
