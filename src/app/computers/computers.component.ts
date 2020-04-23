import { Component, OnInit } from '@angular/core';
import {Computer} from '../../Models/Computers.model';
import {DataService} from '../data.service';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})

export class ComputersComponent implements OnInit{
  Commputers$:Computer[];
  constructor(private  dataService: DataService) {}

  ngOnInit(){ return this.dataService.getComputers().subscribe(data =>this.Commputers$ = data);  }

}



