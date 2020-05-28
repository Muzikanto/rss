import {NextFunction, Response, Request} from "express-serve-static-core";
import parseFeed from "../../lib/feed/parse-feed";
import convertRawFeed from "../../lib/feed/convert-feed";
import HttpError from "../../lib/http-error";
import {Feed} from "./typings";
// import prepareFeedName from "../../utils/feed/feed-name";
// import saveFeed from "../../utils/feed/save-feed";

export interface GetFeedRequest {
    url: string
}

export interface GetFeedResponse {
    feed: Feed
}

async function getFeedRouter(req: Request, res: Response<GetFeedResponse>, next: NextFunction) {
    const url = req.query.url;

    // validate
    if (typeof url !== 'string') {
        return next(new HttpError('validate error', 400));
    }

    try {
        const rawFeed = await parseFeed(url as string);
        const feed = convertRawFeed(rawFeed, url as string);

        res
            .status(200)
            .json({feed})
            .end();
    } catch (e) {
        next(e);
    }
}

export default getFeedRouter;
