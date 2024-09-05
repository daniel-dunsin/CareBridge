import { RoleNames } from 'src/api/user/enums';
export declare const Roles: import("@nestjs/core").ReflectableDecorator<RoleNames[], RoleNames[]>;
export declare const IsPublic: import("@nestjs/core").ReflectableDecorator<unknown, unknown>;
export declare const Auth: (...dataOrPipes: any[]) => ParameterDecorator;
