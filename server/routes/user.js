import { renderToString } from 'react-dom/server';

import store from '../../client/common/configureStore';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../../client/components/App/App';

import checkUserSession from '../middlewares/session';

import User from '../models/user';

const route = require('express').Router();

const ssr = (req, res) => {
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
};

//Fetch user by id
route.get('/:id', checkUserSession, (req, res) => {
    const userId = req.params.id;

    return User.findById(userId)
        .then(user => {
            if(user) {
                res.json({ user })
            } else {
                req.session.destroy();
                res.status(400).json({
                    errors: 'User is not exist!'
                })
            }
        })
});

export default route;