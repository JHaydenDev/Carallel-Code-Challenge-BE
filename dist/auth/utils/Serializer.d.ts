import { PassportSerializer } from '@nestjs/passport';
import { User } from '../../typeorm/entities/User';
import { AuthService } from '../auth.service';
export declare class SessionSerializer extends PassportSerializer {
    private readonly authService;
    constructor(authService: AuthService);
    serializeUser(user: User, done: Function): void;
    deserializeUser(payload: any, done: Function): Promise<any>;
}
