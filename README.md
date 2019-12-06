README last updated: 6 December 2019

This is the start to a URL shortener that will be written in the MERN stack. This is a fun side project that I am doing for practice. Currently, I am only working on the HTTP server which will eventually interface with a React frontend and a MongoDB backend.

Instead of a database, I'm just importing an object filled with key-value pairs from ./src/links.js that contains the shortened URLs (keys) and the full URLs (values). There is also a middleware module (./src/keyChecker.js) that checks to see if the key is valid given the HTTP method being used (e.g. the GET method requires the key to exists within the object from links.js).

Currently,  run using the node command:

```
node ./src/server.js
```
where it will run on port 3000 on the localhost.

I have put two key-value pairs in ./src/links.js for testing purposes. The testing suite (which is currently not implemented yet) can be found in ./test.
