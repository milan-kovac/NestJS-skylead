import { Body, Controller, Post } from '@nestjs/common';
import { AuthRequestDto } from './dtos/request/auth.dto';
import { AuthService } from './auth.service';
import { CreateGenericResponse } from 'src/shared/responses/create.response';
import { SignUpResponseDto } from './dtos/response/signUp.dto';
import { SignInResponseDto } from './dtos/response/signIn.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  async signUp(@Body() authRequest: AuthRequestDto): Promise<SignUpResponseDto> {
    await this.authService.signUp(authRequest);
    return CreateGenericResponse(true);
  }

  @Post('sign-in')
  async signIn(@Body() authRequest: AuthRequestDto): Promise<SignInResponseDto> {
    const token = await this.authService.signIn(authRequest);
    return CreateGenericResponse(token);
  }
}
