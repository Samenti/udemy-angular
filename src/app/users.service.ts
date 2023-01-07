import { EventEmitter, Injectable } from '@angular/core';
import { CounterService } from './counter.service';

export interface User {
  id: number;
  name: string;
  status: 'active' | 'inactive';
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [
    { id: 0, name: 'Max', status: 'active' },
    { id: 1, name: 'Anna', status: 'active' },
    { id: 2, name: 'Chris', status: 'inactive' },
    { id: 3, name: 'Manu', status: 'inactive' },
  ];
  usersEmitter = new EventEmitter<User[]>();

  setStatus(id: number, newStatus: User['status']) {
    this.users[id].status = newStatus;
    this.usersEmitter.emit(this.users);
    this.counterService.increment(newStatus);
  }

  constructor(private counterService: CounterService) {}
}
