import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Computer} from '../Models/Computers.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
ComputerURL='http://localhost:3306/api/Computers';

  constructor(private  http: HttpClient) { }

  getComputers()
  {
return this.http.get<Computer[]>(this.ComputerURL)
}





}
