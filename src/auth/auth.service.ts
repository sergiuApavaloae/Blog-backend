import { UsersService } from './users/users.service';
import {JwtService} from "@nestjs/jwt";
import {Injectable} from "@nestjs/common";

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,
              private jwtService:JwtService) {}
  getHello() {
    return 'hello';
  }
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === password) {
      const { password, username, ...rest } = user;
      return rest;
    }
    return null;
  }
  async login(user:any){
    const payload={name:user.name,sub:user.id};
    return{
      access_token:this.jwtService.sign(payload)
    }
  }
}
