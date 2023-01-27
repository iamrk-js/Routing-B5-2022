import { Injectable } from '@angular/core';
import { Iuser } from '../modal/product';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Iuser[] = [
    {
      userName: "July",
      userId: 1
    },
    {
      userName: "Jhon",
      userId: 2
    },
    {
      userName: "May",
      userId: 3
    }
  ]
  constructor() { }

  getAllUsers() {
    return this.users;
  }
  getSingleUser(id:number){
    return this.users.find(user => user.userId === id)
  }
}
