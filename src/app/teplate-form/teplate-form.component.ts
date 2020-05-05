import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-teplate-form',
  templateUrl: './teplate-form.component.html',
  styleUrls: ['./teplate-form.component.scss']
})
export class TeplateFormComponent implements OnInit {

  myForm:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      NameT:'',
      SelectG:'',
      SelectD:'',
      SelectTB:'',
      Destination:''

    })

  }

}
