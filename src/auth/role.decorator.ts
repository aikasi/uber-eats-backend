import { SetMetadata } from '@nestjs/common';
import { type } from 'os';
import { UserRole } from 'src/users/entities/user.entity';

export type AllowedRoles = keyof typeof UserRole | 'any';

export const Role = (roles: AllowedRoles[]) => SetMetadata('roles', roles);
