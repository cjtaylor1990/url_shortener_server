const express = require('express');
const keyChecker = require('./keyChecker.js');
const links = require('./links.js');
const port = 3000;
const app = express();

app.use(keyChecker.checkKey);

app.get('/:key', (req, res, next) => {
    res.status(200).redirect(links[req.params.key]);
    next();
});

app.put('/:key', (req, res, next) => {
    links[req.params.key] = req.query.url;
    res.status(200).send();
    next();
});

app.post('/', (req, res, next) => {
    links[req.params.key] = req.query.url;
    res.status(201).send();
    next();
});

app.delete('/:key', (req, res, next) => {
    delete links[req.params.key];
    res.status(204).send();
    next();
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
