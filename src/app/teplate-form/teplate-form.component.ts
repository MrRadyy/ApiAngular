import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DataService} from '../data.service';
import {Template} from '../../Models/Template.model';
import {Jobs} from '../../Models/Jobs.model';



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
      SelectTime:'',
      SaveT:'',
      Source:'',
      Destination:'',
      }
  )


  }
  public Submit()
  {
    var temp = new Template();
    temp.Template_Name = this.myForm.value.NameT;
    temp.Type_Of_Backup = this.myForm.value.SelectG;
    temp.Schedule = this.myForm.value.SelectTime;
    temp.Source = this.myForm.value.Source;
    temp.Save_Options = this.myForm.value.SaveT;
    temp.Destination = this.myForm.value.Destination
    this.dataService.PostTemplate(temp);
    alert('Template submited');
  }

}
