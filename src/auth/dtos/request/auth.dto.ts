import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class AuthRequestDto {
  @ApiProperty({ required: true, type: String, example: 'email@gmail.com' })
  @IsEmail({}, { message: 'Please provide valid email.' })
  email: string;

  @ApiProperty({ required: true, type: String, example: 'mystrongpassword12345' })
  @IsString({ message: 'Please provide valid password.' })
  password: string;
}
