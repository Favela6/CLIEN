import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import {UserResult} from 'src/app/interfaces/userAPI'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: UsersService) { }
  users:UserResult;

  ngOnInit(): void {
    this.service.getUsers().subscribe((result:UserResult)=> {
      this.users = result;
      //console.log(result)
    });
  }

}
