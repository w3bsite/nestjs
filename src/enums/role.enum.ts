import { RoleService } from './../role/role.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class roledec {
  constructor(private roleService: RoleService) {
    function getRol() {
      console.log('hi');
    }
  }
}
export enum Role {
  Admin = 'Admin',
  Position = 'User',
}
