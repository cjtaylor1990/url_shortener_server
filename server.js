const express = require('express');
const port = 3000;
const app = express();

let links = {
	'google':'http://www.google.com',
	'face':'http://www.facebook.com'
}

const checkKey = (req,res,next) => {
	const key = req.params.key;
	if (key in links) {
		next();
	} else {
		res.status(404).send("Cannot be found.");
	}
}

app.get('/:key', checkKey, (req,res,next) => {
	res.redirect(links[req.params.key]);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));