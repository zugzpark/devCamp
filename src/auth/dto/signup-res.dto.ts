import { ApiProperty } from '@nestjs/swagger';

export class SignupResDto {
  
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;
}
