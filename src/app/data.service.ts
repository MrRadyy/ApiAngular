import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Computer} from './Computers.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
apiUrl='http://localhost:3306/api/Computers';

  constructor(private  http: HttpClient) { }

  getComputers()
  {
return this.http.get<Computer[]>(this.apiUrl)
    }
}
