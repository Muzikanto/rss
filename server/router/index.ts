import * as express from 'express';
import getFeedRouter from './feed/get';

const apiRouter = express.Router({mergeParams: true});

apiRouter.get('/feed', getFeedRouter);

export default apiRouter;
