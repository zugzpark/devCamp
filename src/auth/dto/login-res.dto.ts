import { ApiProperty } from '@nestjs/swagger';
import { SignupResDto } from './signup-res.dto';

export class LoginResDto {
  
  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  refreshToken: string;

  @ApiProperty()
  user: SignupResDto;
}
