import * as express from 'express';
import rssRouter from "./rss";

const apiRouter = express.Router({mergeParams: true});

apiRouter.use('/rss', rssRouter);

export default apiRouter;
