import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
import {Tokens} from '../Models/Tokens.model';
import {environment} from '../environments/environment';
import {UserNamePassword} from '../Models/UsernamePassword';


@Injectable({
  providedIn: 'root'
})
export class DataService {
ComputerURL = environment.apiUrl +  '/api/Computers/Get';
BackupURL =  environment.apiUrl +  '/api/Backup/Get';
DestinatonsURL = environment.apiUrl + '/api/Destinations';
FTPLoginsURL = environment.apiUrl + '/api/FTP_Logins';
GETJobsURL = environment.apiUrl +  '/api/Jobs/get';
POSTJobsURL = environment.apiUrl+ '/api/Jobs/post';
LocalURL = environment.apiUrl +  '/api/Local';
NetworkLoginsURL = environment.apiUrl + '/api/Network_Logins';
SourcesURL = environment.apiUrl +  '/api/Sources';
POSTTemplateURL = environment.apiUrl +  '/api/Template/Post';
GETTemplateURL = environment.apiUrl + '/api/Template/get';
UsersURL =  environment.apiUrl + '/api/User/Get';
TokensURL = environment.apiUrl + '/api/Tokens';
TokensCreateURL = environment.apiUrl + '/api/Tokens/GetToken';
TokensDeleteURL = environment.apiUrl + '/api/Tokens/DeleteToken';


  constructor(private  http: HttpClient) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'tok':  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1OTdmMjhkNi1lNWVmLTQyYzYtYTdhYy04M2Q0ZjI3YjNjNmUiLCJuYmYiOjE1ODg3MDgxNzYsImV4cCI6MTU4ODcxNTM3NiwiaWF0IjoxNTg4NzA4MTc2fQ.TEJTjKStOHPIpN0jY8KXk-TnSo1AEzUJjOuRl2qfGBw'
    })
  }


  getComputers() {
return this.http.get<Computer[]>(this.ComputerURL,this.httpOptions);
}

  getBackup() {
    return this.http.get<Backups[]>(this.BackupURL,this.httpOptions);
  }

  getDestinations() {
    return this.http.get<Destinations[]>(this.DestinatonsURL);
  }

  getFTPLogins() {
    return this.http.get<FTP_Logins[]>(this.FTPLoginsURL);
  }

  getJobs() {
    return this.http.get<Jobs[]>(this.GETJobsURL,this.httpOptions);
  }

  PostJob(model: Jobs)
  {
    return this.http.post(this.POSTJobsURL,model, this.httpOptions).subscribe(temp=>{});
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

    return this.http.get<Template[]>(this.GETTemplateURL,this.httpOptions);
  }

  getUsers() {

    return this.http.get<users[]>(this.UsersURL,this.httpOptions);
  }

  PostTemplate(model: Template)
  {
    return this.http.post(this.POSTTemplateURL,model, this.httpOptions).subscribe(temp=>{});
  }

  Token: string;
  PostToken(model: UserNamePassword): string
  {

    this.http.post<string>(this.TokensCreateURL,model).subscribe(item => this.Token = item);
    return this.Token;

  }

  DeleteToken(){
    this.http.delete(this.TokensDeleteURL, this.httpOptions).subscribe(item => {});
  }



}
