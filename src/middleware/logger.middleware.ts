import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);

  use(req: Request, res: Response, next: Function) {
    const { ip, method, originalUrl } = req;
    const userAgent = req.get('user-agent') || '';

    // 콘솔에 로그 출력
    this.logger.log(`${ip} ${method} ${originalUrl} - ${userAgent}`);

    next();
  }
}