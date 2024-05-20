import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { parse } from 'path';
import { createUserDto } from 'src/users/dtos/createUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: createUserDto, metadata: ArgumentMetadata) {
    console.log(`Inside validateCreateUserPipe!`);
    console.log(value);
    console.log(metadata);

    const parseAgeToInt = parseInt(value.age.toString());
    if (isNaN(parseAgeToInt)) {
      console.log(`${value.age} is not a number!`);
      throw new HttpException(
        `Invalid Data Type for property age. Exception Number`,
        HttpStatus.BAD_REQUEST,
      );
    } else {
      console.log(`${parseAgeToInt} is a number. Returning...`);
      return { ...value, age: parseAgeToInt };
    }
  }
}
