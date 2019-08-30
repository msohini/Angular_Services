
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private UserService: UserService) {

  }
  activeUsers: string[] = [];

  inactiveUsers: string[] = [];
  ngOnInit() {
    this.activeUsers = this.UserService.activeUsers;
    this.inactiveUsers = this.UserService.inactiveUsers;
  }
}

