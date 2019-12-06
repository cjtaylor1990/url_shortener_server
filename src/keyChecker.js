const links = require('./links.js');

const findKeyCheckCondition = (method) => {
    if (method in ['GET', 'PUT', 'DELETE']) {
        return (key, links) => (key in links);
    } else {
        return (key, links) => (!(key in links));
    }
};

module.exports.checkKey = (req, res, next) => {
    const key  = req.params.key;
    const keyCheckCondition = findKeyCheckCondition(req.method)(key,links);
    if (keyCheckCondition) {
        next();
    } else {
        res.status(404).send();
    }
};