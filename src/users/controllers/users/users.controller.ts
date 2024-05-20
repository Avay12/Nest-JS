import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/createUser.dto';
import { ValidateCreateUserPipe } from 'src/users/pipe/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/service/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.fetchUsers();
  }

  // @Get()
  // getUser(@Query('sortDesc', ParseBoolPipe) sortBy: Boolean) {
  //   console.log(sortBy);
  //   return { name: 'Daniel', email: 'Daniel23@gmail.com' };
  // }

  ////In Express Way
  // @Post('create')
  // createUser(@Req() req: Request, @Res() res: Response) {
  //   console.log(req.body);
  //   return {};
  // }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUsers(@Body(ValidateCreateUserPipe) userData: createUserDto) {
    console.log(userData.age.toPrecision());
    this.userService.createUser(userData);
  }

  @Get('/:id/:Code')
  getUserByID(
    @Param('id', ParseIntPipe) id: number,
    @Param('Code', ParseIntPipe) Code: number,
  ) {
    const user = this.userService.fetchUserByID(id, Code);
    if (!user) {
      throw new HttpException('User not Found', HttpStatus.BAD_REQUEST);
    }
    return user;
  }
}
