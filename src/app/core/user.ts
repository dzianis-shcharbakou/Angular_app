import { UserModel } from './user.model'

export class User implements UserModel {
  id: number;
  firstName: string;
  lastName: string;

  constructor(id: number, firstName: string, lastName: string){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
