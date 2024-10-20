import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthDto } from './dtos/auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(authRequest: AuthDto) {
    try {
      const { email, password } = authRequest;
      const hashedPassword = await this.hashPassword(password);
      await this.userService.createUser(email, hashedPassword);
    } catch (error) {
      throw error;
    }
  }

  private async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }
}
