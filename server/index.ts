import {Application} from 'express';
import apiRouter from './router';
import errorMiddleware from "./middleware/error";

const next = require('next');
const express = require('express');

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server: Application = express();

    server.use('/api', apiRouter);

    server.all('*', (req, res) => {
        return handle(req, res)
    });

    server.use(errorMiddleware);


    server.listen(port, (err) => {
        if (err) throw err;

        console.log(`> Ready on http://localhost:${port}`)
    });
});
