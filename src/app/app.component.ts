import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import { GoogleChartsModule } from 'angular-google-charts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( private  dataService: DataService) {  }

  SignOut() {
    this.dataService.DeleteToken();
  }


  title = '';
  type = 'OrgChart';
  data = [
    [{v:'Radek', f:'Radek<div style="color:red; font-style:italic">Project Manager</div>'},
      '', ''],
    ['Dominik','Radek', 'VP'],
    ['David', 'Radek', 'VP'],

  ];
  c
  options = {
    allowHtml: true
  };
  width = 550;
  height = 400;


}

