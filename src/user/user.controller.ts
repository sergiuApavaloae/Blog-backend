import {
  Body,
  Controller, Delete,
  Get,
  Injectable,
  Param,
  Post, Put,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import {Article} from "../article/article.entity";
@Injectable()
@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getAll() {
    console.log('ceva get pe user');
    return await this.userService.findAll();
  }
  @Get(':id')
  async getOne(@Param('id') id: string) {
    console.log(id);
    return await this.userService.findOne(id);
  }
  @Post()
  addUser(@Body() user: User) {
    this.userService.addUser(user).then();
  }
  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    await this.userService.remove(id);
  }

  @Put()
  async updateUser(@Body() user: User) {
    const updated = await this.userService.updateUser(user);
  }
}
