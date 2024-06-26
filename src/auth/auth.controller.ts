import {
  Controller,
  Post,
  Body,
  Get,
  Req,
  Res,
  Catch,
  HttpCode,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { UserService } from '../module/user/user.service';
import { LoginReqDto, CreateUserDto, SignupResDto } from './dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  /**
   * 로그인
   * @param req
   * @param loginReqDto
   * @returns
   */
  @ApiTags('login')
  @ApiOperation({
    summary: 'login',
  })
  @HttpCode(200)
  @Post('login')
  async login(@Req() req: Request, @Body() loginReqDto: LoginReqDto) {
    console.log(`로그인`, loginReqDto);

    const reqInfo = {
      ip: req.ip,
      endpoint: `${req.method} ${req.originalUrl}`,
      ua: req.headers['user-agent'] || '',
    };
    console.log(reqInfo)

    
    // return this.authService.login(
    //   loginReqDto.email,
    //   loginReqDto.password,
    //   reqInfo,
    // );
  }

  /**
   * 회원가입
   * @param createUserDto
   */
  @ApiTags('signup')
  @ApiOperation({
    summary: '회원가입',
  })
  @HttpCode(201)
  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto): Promise<SignupResDto> {
    console.log(`회원가입`);
    console.log(createUserDto);
    const user = await this.userService.createUser(createUserDto);
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    };
  }
}
