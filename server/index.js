import express from 'express';
import bodyParser from 'body-parser';

import path from 'path';
import cluster from 'cluster';
import http from 'http';

import config from './common/config';
const log = require('./common/log')(module);
import sessionStore from './common/sessionStore';
import session from 'express-session';

import cors from 'cors';

import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../client/components/App/App';
import store from '../client/common/configureStore';

// ****************** Import routes *************
import auth from './routes/auth';
import user from './routes/user';

//***********************************************
const dev = process.env.NODE_ENV === 'development';
const test = process.env.NODE_ENV === 'test';
const prod = process.env.NODE_ENV === 'production';


export const app = express();
export const server = http.createServer(app);

if(prod && cluster.isMaster) {

    let cpuCount = require('os').cpus().length;

    for (let i = 0; i < cpuCount; i += 1) {
        cluster.schedulingPolicy = cluster.SCHED_NONE;
        cluster.fork();
    }

    cluster.on('exit', function (worker) {
        console.log('Worker ' + worker.id + ' died :(');
        cluster.fork();
    });

} else {
    //******************************** Run server ***************************

    server.listen(config.PORT, () => console.log(`Server run on ${config.PORT} port`));

    // *******************************************************************
};

if(prod) {

    //************************* GARBAGE magic ***********************************

    // Для работы с garbage collector запустите проект с параметрами:
    // node --nouse-idle-notification --expose-gc app.js
    let gcInterval;

    function init() {
        gcInterval = setInterval(function () {
            gcDo();
        }, 60000);
    };

    function gcDo() {
        global.gc();
        clearInterval(gcInterval);
        init();
    };

    init();

    //************************************************************
}
    app.use(cors());
    app.use(bodyParser.json());
    app.use(express.static('public'));
    app.use(session({
        secret: config.session.secret,
        saveUninitialized: false,
        resave: true,
        key: config.session.key,
        cookie: config.session.cookie,
        store: sessionStore
    }));


    //******************************** Routes ***************************
    app.use('/auth', auth);
    // app.use('/user', user);

    app.get('*', (req, res) => {
        const markup = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={{}}>
                    <App />
                </StaticRouter>
            </Provider>
        );

        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Title</title>
                <link rel="stylesheet" href="/css/main.css"/>
                <script src="/bundle.js" defer></script>
            </head>
            <body>
            
                <div id="app">${markup}</div>
            
            </body>
            </html>
        `);
    });

//******************************** Uncaught Exception ***************************

process.on('uncaughtException', function (err) {
    log.error((new Date).toUTCString() + ' uncaughtException:', err.message);
    log.error(err.stack);
    process.exit(1);
});






