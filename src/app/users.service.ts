import { EventEmitter, Injectable } from '@angular/core';

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

  setToInactive(id: number) {
    this.users[id].status = 'inactive';
    this.usersEmitter.emit(this.users);
  }

  setToActive(id: number) {
    this.users[id].status = 'active';
    this.usersEmitter.emit(this.users);
  }

  constructor() {}
}
