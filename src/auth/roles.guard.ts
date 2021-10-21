import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'src/enums/role.enum';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  grant: boolean;
  constructor(private reflector: Reflector) {
    this.grant = false;
  }

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      this.grant = true;
    }
    const { user } = context.switchToHttp().getRequest();
    requiredRoles.forEach((element) => {
      const result = [];
      for (const el in user.role) {
        if (typeof user.role[el] == 'string') {
          user.role[el] = user.role[el].toUpperCase();
        }
      }
      if (user.role[element] == element.toUpperCase()) {
        console.log(user.role[element] + '=' + element.toUpperCase());
        result.push(true);
        result.includes(true);
        this.grant = true;
      }
    });
    return this.grant;
  }
}
