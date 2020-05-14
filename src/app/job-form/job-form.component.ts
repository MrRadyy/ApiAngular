import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormGroup} from '@angular/forms';
import {DataService} from '../data.service';
import {Jobs} from '../../Models/Jobs.model';
import {Computer} from '../../Models/Computers.model';
import {Template} from '../../Models/Template.model';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']

})

export class JobFormComponent implements OnInit {
myForm:FormGroup;
Computer:Computer[];
Template:Template[];
  constructor(private fb: FormBuilder, private  dataService:DataService) { }

  ngOnInit() {


    this.myForm = this.fb.group({
      TempID:'',
      CompID:''

    } ) ,this.dataService.getComputers().subscribe(dataC => this.Computer = dataC ) , this.dataService.getTemplate().subscribe(data => this.Template = data)


  }

  public Submit()
  {
    var temp = new Jobs()
    temp.ID_Computer = this.myForm.value.CompID;
    temp.ID_Template = this.myForm.value.TempID;
   // alert(temp.ID_Computer) ;
    this.dataService.PostJob(temp);


  }

}
