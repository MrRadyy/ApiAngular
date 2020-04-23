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
import {environment} from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DataService {
ComputerURL = environment.apiUrl +  '/api/Computers';
BackupURL =  environment.apiUrl +  '/api/Backup';
DestinatonsURL = environment.apiUrl + '/api/Destinations';
FTPLoginsURL = environment.apiUrl + '/api/FTP_Logins';
JobsURL = environment.apiUrl +  '/api/Jobs';
LocalURL = environment.apiUrl +  '/api/Local';
NetworkLoginsURL = environment.apiUrl + '/api/Network_Logins';
SourcesURL = environment.apiUrl +  '/api/Sources';
TemplateURL = environment.apiUrl +  '/api/Template';
UsersURL =  environment.apiUrl + '/api/Users';

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
