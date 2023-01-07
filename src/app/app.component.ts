import { Component, OnInit } from '@angular/core';
import { User, UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  activeUsers: User[];
  inactiveUsers: User[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.activeUsers = this.usersService.users.filter(
      (user) => user.status === 'active'
    );
    this.inactiveUsers = this.usersService.users.filter(
      (user) => user.status === 'inactive'
    );
    this.usersService.usersEmitter.subscribe((users) => {
      this.activeUsers = users.filter((user) => user.status === 'active');
      this.inactiveUsers = users.filter((user) => user.status === 'inactive');
    });
  }
}
