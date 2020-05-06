import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DataService} from '../data.service';
import {Template} from '../../Models/Template.model';


@Component({
  selector: 'app-teplate-form',
  templateUrl: './teplate-form.component.html',
  styleUrls: ['./teplate-form.component.scss']
})
export class TeplateFormComponent implements OnInit {

  myForm:FormGroup;
  constructor(private fb: FormBuilder , private  dataService: DataService) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      NameT:'',
      SelectG:'',
      SelectD:'',
      SelectTB:'',
      Destination:'',



  })


  }


public Submit()
{

  var Name =  (<HTMLInputElement>document.getElementById('Name')).value;

  var FTP = (<HTMLSelectElement>document.getElementById('FTP'));
  var Save = (<HTMLSelectElement>document.getElementById('Save'));
  var Type = (<HTMLSelectElement>document.getElementById('Type'));
  var Schedule =(<HTMLInputElement>document.getElementById('schedule')).value;
  var Source = (<HTMLInputElement>document.getElementById('Source')).value;
  var temp = new Template();
  temp.Template_Name = Name ;
 // temp = FTP.innerText.trim();
  temp.Type_Of_Backup = Type.innerText.trim();
  temp.Schedule = Schedule;
  temp.Source = Source;
  temp.Save_Options = Save.innerText.trim();
  this.dataService.PostTemplate(temp);

}
}
