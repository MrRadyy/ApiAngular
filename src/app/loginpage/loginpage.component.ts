
import { Component, OnInit } from '@angular/core';
import {UserNamePassword} from '../../Models/UsernamePassword';
import {DataService} from '../data.service';
import {stringify} from 'querystring';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor( private  dataService: DataService, private fb:FormBuilder) {  }

  myForm:FormGroup;

  ngOnInit(): void {
    this.myForm = this.fb.group({
      Username_Input:'',
      Password_Input:''
    })
  }

  submit(): void {

   var temp = new UserNamePassword();
    temp.Username = this.myForm.value.Username_Input;
    temp.Password = this.myForm.value.Password_Input;


    var Postvar = this.dataService.PostToken(temp);

    localStorage.setItem('tok', 'TEST');

    /**if(UsernamePassword.Username === pron && UsernamePassword.Password === pronx){
     alert('Uspesne');
    } **/



    //alert(localStorage.getItem('tok'));
    alert('Succesfuly loged in');

  }



}
