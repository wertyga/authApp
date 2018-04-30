import config from '../common/config';

export default function(req, res, next) {
    const userId = req.session[config.session.fieldToSaveSession];
    if(!userId) {
        res.status(401).json({
            redirectUrl: '/'
        });
    } else {
        next();
    };
};