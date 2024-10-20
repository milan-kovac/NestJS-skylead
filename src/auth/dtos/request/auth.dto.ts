import { IsEmail, IsString } from 'class-validator';

export class AuthRequestDto {
  @IsEmail({}, { message: 'Please provide valid email.' })
  email: string;

  @IsString({ message: 'Please provide valid password.' })
  password: string;
}
