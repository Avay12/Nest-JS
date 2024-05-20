import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utilis/type';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Anson', email: 'anson@gmail.com' },
    { username: 'James', email: 'james@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }

  fetchUserByID(id: number, Code: number) {
    return this.fakeUsers.map((user) => {
      return { id, Code, ...user };
    });
  }
}
