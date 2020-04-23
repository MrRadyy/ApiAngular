import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Backups} from '../../Models/Backups.model';

@Component({
  selector: 'app-backups',
  templateUrl: './backups.component.html',
  styleUrls: ['./backups.component.scss']
})
export class BackupsComponent implements OnInit {
  Backups:Backups[];
  constructor(private  dataService: DataService) {}

  ngOnInit(){ return this.dataService.getBackup().subscribe(data =>this.Backups = data);  }


}
