import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DataService} from '../data.service';
import {Template} from '../../Models/Template.model';
import {Jobs} from '../../Models/Jobs.model';
import {FTP_Logins} from '../../Models/FTP_Logins.model';
import {filterToMembersWithDecorator} from '@angular/compiler-cli/src/ngtsc/reflection';



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
      Username:'',
      Password:''
    }
  )


  }
  public Submit()
  {
    var temp = new Template();
    var ftp = new FTP_Logins();
    temp.Template_Name = this.myForm.value.NameT;
    temp.Type_Of_Backup = this.myForm.value.SelectG;
    temp.Schedule = this.myForm.value.SelectTime;
    temp.Source = this.myForm.value.Source;
    temp.Save_Options = this.myForm.value.SaveT;
    temp.Destination = this.myForm.value.Destination;
    ftp.Login = this.myForm.value.Username;
    ftp.Password = this.myForm.value.Password;
   this.dataService.PostLogins(ftp);
    this.dataService.PostTemplate(temp);
    alert('Template submited');
  }

}
