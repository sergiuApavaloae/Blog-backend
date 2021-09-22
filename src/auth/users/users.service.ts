import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};
@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'Ion',
      username: 'ion',
      password: 'john',
    },
  ];

  async findOne(username: string): Promise<User | undefined>{
      return  this.users.find(user=>user.username===username);

  }
  addOne(user: any){
    this.users.push(user);
  }
}
