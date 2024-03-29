import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { User, CreateUserDto , UserRepository  } from './index';
import { BusinessException } from '../../common';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    private readonly userRepo: UserRepository,
    // private readonly accessTokenRepo: AccessTokenRepository,
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    console.log(`서비스 실행`)
    // 유저 아이디 검증
    const user = await this.userRepo.findOneByEmail(dto.email);
    console.log(`user after`)
    if (user) {
      throw new BusinessException(
        'user',
        `${dto.email} already exist`,
        `${dto.email} already exist`,
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log(`user >> ${user} `)
    //암호화 후 가입진행
    const hashedPassword = await argon2.hash(dto.password);
    console.log(`비밀번호 암호화 > ${hashedPassword}`)
    return this.userRepo.createUser(dto, hashedPassword);
    
  }

  async validateUser(id: string, jti: string): Promise<User> {
    // const [user, token] = await Promise.all([
    //   this.userRepo.findOneBy({ id }),
    //   //this.accessTokenRepo.findOneByJti(jti),
    // ]);
    // // if (!user) {
    //   this.logger.error(`user ${id} not found`);
    //   throw new BusinessException(
    //     'user',
    //     `user not found`,
    //     `user not found`,
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }
    // if (!token) {
    //   this.logger.error(`jti ${jti} token is revoked`);
    //   throw new BusinessException(
    //     'user',
    //     `revoked token`,
    //     `revoked token`,
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }
    //return user;
    return;
  }
}
