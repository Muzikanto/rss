import {NextFunction, Response, Request} from "express-serve-static-core";

function rssGetRouter(req: Request, res: Response, next: NextFunction) {
    res.json({});
}

export default rssGetRouter;
