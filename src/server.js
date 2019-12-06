const express = require('express');
const port = 3000;
const app = express();

const links = {
    google: 'http://www.google.com',
    face: 'http://www.facebook.com'
};

const findKeyCheckCondition = (method) => {
    if (method in ['GET', 'PUT', 'DELETE']) {
        return (key, links) => (key in links);
    } else {
        return (key, links) => (!(key in links));
    }
};

const checkKey = (req, res, next) => {
    const key  = req.params.key;
    const keyCheckCondition = findKeyCheckCondition(req.method)(key);
    if (keyCheckCondition) {
        next();
    } else {
        res.status(404).send();
    }
};

app.use(checkKey);

app.get('/:key', checkKey, (req, res, next) => {
    res.status(200).redirect(links[req.params.key]);
    next();
});

app.put('/:key', checkKey, (req, res, next) => {
    links[req.params.key] = req.query.url;
    res.status(200).send();
    next();
});

app.post('/', checkKey, (req, res, next) => {
    links[req.params.key] = req.query.url;
    res.status(201).send();
    next();
});

app.delete('/:key', checkKey, (req, res, next) => {
    delete links[req.params.key];
    res.status(204).send();
    next();
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
