import { Component, OnInit } from '@angular/core';
import {users} from "../../Models/users.model";
import {DataService} from "../data.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
Users: users[];
  constructor(private dataService: DataService) { }

  ngOnInit() {return this.dataService.getUsers().subscribe(data =>this.Users = data);
  }

}
