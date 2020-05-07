
import { Component, OnInit } from '@angular/core';
import {UserNamePassword} from '../../Models/UsernamePassword';
import {DataService} from '../data.service';
import {stringify} from 'querystring';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor( private  dataService: DataService) {  }

  ngOnInit(): void {
  }

  submit(): void {
    var pron = (<HTMLInputElement>document.getElementById('Username_Input')).value;
    var pronx = (<HTMLInputElement>document.getElementById('Password_Input')).value;

    var UsernamePassword = new UserNamePassword();

    UsernamePassword.Username = pron;
    UsernamePassword.Password = pronx;

    var Postvar = this.dataService.PostToken(UsernamePassword);

    localStorage.setItem('tok', 'TEST');

    /**if(UsernamePassword.Username === pron && UsernamePassword.Password === pronx){
     alert('Uspesne');
    } **/



    //alert(localStorage.getItem('tok'));

  }


}
