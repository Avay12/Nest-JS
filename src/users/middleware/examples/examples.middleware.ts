import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class ExamplesMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Hello from Middleware');
    const authorization = (req.headers as any).authorization;
    if (!authorization)
      throw new HttpException('No Authorization Token', HttpStatus.FORBIDDEN);
    if (authorization === 'j-lk-e4-12') next();

    if (authorization !== 'j-lk-e4-12')
      throw new HttpException('Invalid Token', HttpStatus.FORBIDDEN);
  }
}
