import { Body, ClassSerializerInterceptor, Controller, Post, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthRequestDto } from './dtos/request/auth.dto';
import { AuthService } from './auth.service';
import { CreateGenericResponse } from 'src/shared/responses/create.response';
import { SignUpResponseDto } from './dtos/response/signUp.dto';
import { SignInResponseDto } from './dtos/response/signIn.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'User sign up.',
  })
  @ApiBody({ type: AuthRequestDto })
  @ApiResponse({ type: SignUpResponseDto })
  @Post('sign-up')
  async signUp(@Body() authRequest: AuthRequestDto): Promise<SignUpResponseDto> {
    await this.authService.signUp(authRequest);
    return CreateGenericResponse(true);
  }

  @ApiOperation({
    summary: 'User sign in.',
  })
  @ApiBody({ type: AuthRequestDto })
  @ApiResponse({ type: SignInResponseDto })
  @Post('sign-in')
  async signIn(@Body() authRequest: AuthRequestDto): Promise<SignInResponseDto> {
    const token = await this.authService.signIn(authRequest);
    return CreateGenericResponse(token);
  }
}
