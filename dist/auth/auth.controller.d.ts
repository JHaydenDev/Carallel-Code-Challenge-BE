import { Request, Response } from 'express';
export declare class AuthController {
    handleLogin(): {
        msg: string;
    };
    handleRedirect(res: Response): void;
    user(request: Request): {
        msg: string;
    };
}
