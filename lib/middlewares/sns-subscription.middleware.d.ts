import { NextFunction, Request, Response } from "express";
export declare const snsSubscriptionMiddleware: (req: Request, res: Response, next: NextFunction) => Promise<import("express-serve-static-core").Response | undefined>;
