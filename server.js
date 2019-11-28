const http = require('http');

//  GET, POST /categories
//  PUT, DELETE /categories/:id/
//  GET, POST /products
//  PUT, DELETE /products/:id/

const heavyMusic = require('routes/heavyMusic');
const routes = {
  heavyMusic
};

const notFound = (req, res) => {
  res.setHeader('content-type', 'text/html');
  res.statusCode = 404;
  res.end();
};

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);

  res.statusCode = 200;

  if(req.url.startsWith('/api')) {
    res.setHeader('content-type', 'application/json');

    const resource = req.url.split('/')[2];

    const handler = routes[resource] || notFound;
    handler(req, res);
  }
  else {
    res.statusCode = 400;
    res.write(JSON.stringify({
      error: 'only /api routes are supported'
    }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(
    'http server listening on port', 
    PORT
  );
});