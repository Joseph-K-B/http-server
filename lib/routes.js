

const indexRoute = {
  async get(req, res) {
    const [, path] = req.url.split('/');
    if (path === '/' && req.method === 'GET') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end();
    } else {
      res.statusCode = 404;
      res.end('404');
    }
  }
};
export default indexRoute;
