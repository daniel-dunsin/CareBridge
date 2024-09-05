import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtDocument } from '../schema/jwt.schema';
import { Model } from 'mongoose';
import { Reflector } from '@nestjs/core';
export declare class AuthGuard implements CanActivate {
    private readonly reflector;
    private readonly jwtService;
    private readonly _jwtModel;
    constructor(reflector: Reflector, jwtService: JwtService, _jwtModel: Model<JwtDocument>);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private validateToken;
}
