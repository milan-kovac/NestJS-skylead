import { BadRequestException, ClassSerializerInterceptor, Injectable, UnauthorizedException, UseInterceptors } from '@nestjs/common';
import { AuthRequestDto } from './dtos/request/auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/user.entity';

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

      return this.jwtService.sign({ id: user.id, role: user.role });
    } catch (error) {
      throw error;
    }
  }

  async validateToken(bearerToken: string): Promise<User> {
    try {
      const decoded = this.jwtService.verify(bearerToken);
      const { id } = decoded;
      return await this.userService.getUserById(id);
    } catch (e) {
      throw new UnauthorizedException('Not a valid JWT token.');
    }
  }

  private async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  private async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
