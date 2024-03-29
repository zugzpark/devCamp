import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, UserService , UserRepository } from './index';
import { AccessLog, AccessToken, RefreshToken } from 'src/auth/jwt/entity';


@Module({
  imports: [TypeOrmModule.forFeature([User, AccessToken, RefreshToken, AccessLog])],
  providers: [UserService , UserRepository],
  exports: [UserService],
})
export class UserModule {}
