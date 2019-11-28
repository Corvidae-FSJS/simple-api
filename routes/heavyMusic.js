const get = (req, res) => {
  res.end(JSON.stringify([

  ]));
};

const post = (req, res) => {
  res.end(JSON.stringify(

  ));
};

const methods = {
  GET: get,
  POST: post
};

module.exports = (req, res) => {
  const handler = methods[req.method];
  handler(req, res);
};