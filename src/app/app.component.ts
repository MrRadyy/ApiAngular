import {Component, OnInit} from '@angular/core';
import {Computer} from './Computers.model';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
Commputers$:Computer[];
  constructor(private  dataService: DataService) {}

ngOnInit(){ return this.dataService.getComputers().subscribe(data =>this.Commputers$ = data);  }

}
