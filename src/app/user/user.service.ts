import { Injectable } from '@angular/core';
import { UserData } from './userData';
import { IUser } from './user';

@Injectable()
export class UserService {
users: IUser[] = [];
  
constructor() { }

AddUser(user: IUser){
  if(!!user.FirstName)
    this.users.push(user);
}
  
getAllUsers()
{
  return this.users;
}

geUserById(id:number)
{
  return this.users.find(u=>u.id==id);
}

}
