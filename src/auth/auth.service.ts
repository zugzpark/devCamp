import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserRepository } from '../module/user';
import {
  RefreshTokenRepository,
  AccessTokenRepository,
  AccessLogRepository,
  
} from './jwt/repository';
@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
    private readonly refreshTokenRepository: RefreshTokenRepository,
    private readonly accessTokenRepository: AccessTokenRepository,
    private readonly accessLogRepository: AccessLogRepository,
  ) {}
}
