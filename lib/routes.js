
const indexRoute = {
  async get(req, res) {
    const [, path] = req.url.split('/');
    if (path === '/' && req.method === 'GET') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
    }
    if(path === '/css/main.css' && req.method === 'GET') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
    }
  }    
};

export default indexRoute;
