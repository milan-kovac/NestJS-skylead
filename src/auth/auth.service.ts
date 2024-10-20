import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthRequestDto } from './dtos/request/auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(authRequest: AuthRequestDto): Promise<void> {
    try {
      const { email, password } = authRequest;
      const hashedPassword = await this.hashPassword(password);
      await this.userService.createUser(email, hashedPassword);
    } catch (error) {
      throw error;
    }
  }

  async signIn(authRequest: AuthRequestDto): Promise<string> {
    try {
      const { email, password } = authRequest;
      const user = await this.userService.getUserByEmail(email);
      if (!user) {
        throw new BadRequestException('Incorrect credentials.');
      }

      const passwordIsValid = await this.comparePasswords(password, user.password);
      if (!passwordIsValid) {
        throw new BadRequestException('Incorrect credentials.');
      }

      return this.jwtService.sign({ id: user.id });
    } catch (error) {
      throw error;
    }
  }

  private async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  private async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
