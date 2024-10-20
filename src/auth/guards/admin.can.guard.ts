import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { Role } from 'src/user/enums/role.enum';

@Injectable()
export class AdminCanGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const user = request.user ?? false;
      if (!user || user?.role !== Role.ADMIN) {
        throw new ForbiddenException({ message: 'You do not have permission to perform this action.', status: 403 });
      }
      return true;
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }
}
