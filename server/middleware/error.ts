import {NextFunction, Response, Request} from "express-serve-static-core";
import HttpError from "../lib/http-error";

const isDev = process.env.NODE_ENV === 'development';

function errorMiddleware(err: Error | HttpError, req: Request, res: Response, next: NextFunction) {
    console.log(err)
    if (err instanceof HttpError) {
        return res
            .status(err.status)
            .json({
                message: err.message,
                status: err.status,
                body: isDev ? err.body : err.body,
            })
    } else {
        return res
            .status(500)
            .json({
                message: 'Server error',
                status: 500,
                body: isDev ? err.stack : err.stack,
            })
    }
}

export default errorMiddleware;
