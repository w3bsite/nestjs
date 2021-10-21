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
    const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    // empty role array passed
    if (requiredRoles.length === 0) {
      console.log(requiredRoles.length);
      this.grant = true;
      return true;
    }
    //check if req.user is not undefined (because of jwt login fail probably==no login or expired jwt key)
    if (context.switchToHttp().getRequest().hasOwnProperty('user')) {
      //assigning req.object to a new object called const user
      const { user } = context.switchToHttp().getRequest();
      // check user object to see if there is one
      if (user) {
        //LOGING Porose Only
        const userLog = [];
        for (const u in user) {
          userLog.push(u, user[u]);
        }
        console.log('userLog = ' + userLog);

        // check user object to see if there is a role object
        if (user.role) {
          //LOGING Porose Only
          const userRoleLog = [];
          for (const ur in user.role) {
            userRoleLog.push(ur, user.role[ur]);
          }
          console.log('user.roleLog = ' + userRoleLog);

          // check user.role object to see if there is an admin property (empty or not empty)
          // if (user.role.hasOwnProperty('Admin')) {
          //   // check user.role.admin capitalised is "ADMIN" meaning the user is the admin or not(admin will be checked again too!)
          //   if (user.role.Admin.toUpperCase() === 'ADMIN') {
          //     console.log('User role admin == Admin');
          //     this.grant = true;
          //     return true;
          //   }
          // }
          requiredRoles.forEach((element) => {
            const result = [];
            for (const el in user.role) {
              console.log(el);
              console.log(element[el]);

              if (typeof user.role[el] == 'string') {
                user.role[el] = user.role[el].toUpperCase();
              }
            }
            console.log('req roles check ');
            console.log(requiredRoles);
            requiredRoles.some((role) => console.log(role));
            // check user.role object to see if there is any key that is named what is requierd by decorator and if it was check if it matches the required role

            // if (user.role[element] == element.toUpperCase()) {
            //   console.log('final req role check with user req role ');
            //   console.log(user.role[element] + '=' + element.toUpperCase());
            //   result.push(true);
            //   result.includes(true);
            //   this.grant = true;
            // }
          });
        }
      }
    }
    console.log('final grant =' + this.grant);
    return this.grant;
  }
}
