import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const authorization = request.headers.authorization ?? false;
      const token = authorization ? authorization.replace('Bearer ', '') : false;
      if (!token) {
        throw new ForbiddenException({ message: 'Not a valid JWT token.', status: 403 });
      }
      request.user = await this.authService.validateToken(token);
      return true;
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }
}
