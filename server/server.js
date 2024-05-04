// import the express module
const express = require('express');

// CREATE the server

// run the express function, which returns an "instance" of express
// The 'express' I get, is a big ol' object.
const app = express();


// CUSTOMIZING the server

// We tell our app object what 'port' to connect on.
// Ports are an abstraction, to allow computers to talk to multiple
// things at once
const port = 5001;

// We're going to tell the server what to send the client
// The first time the client tries to connect
// app.use(express.static('_______'));
// app.use(express.static('path to public folder'));
app.use(express.static('server/public'));
// app.use is the command we have
// to extend our server
// to give it extra functionality


// app IS our server


// TURN ON THE SERVER
// Turn on app, (have it start listening)
app.listen(port, () => {
  console.log('listening on port', port);
})
