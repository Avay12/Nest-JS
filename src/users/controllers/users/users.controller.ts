import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/createUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUser(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return { name: 'Daniel', email: 'Daniel23@gmail.com' };
  }

  ////In Express Way
  // @Post('create')
  // createUser(@Req() req: Request, @Res() res: Response) {
  //   console.log(req.body);
  //   return {};
  // }

  @Post('create')
  createUsers(@Body() userData: createUserDto) {
    return userData;
  }

  @Get('/:id/:Code')
  getUserByID(@Param('id') id: string, @Param('Code') Code: string) {
    return { id, Code };
  }
}
