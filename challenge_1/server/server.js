const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const port = 3333;
server.use(jsonServer.bodyParser);
server.use(middlewares);

// server.get('/events', (req, res) => {
//   res.jsonp
// });

server.use(router);
server.listen(port, () => {
  console.log(`Historical Events Finder App Listening at http://localhost:${port}`);
});