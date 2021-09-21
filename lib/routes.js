
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

// const indexRoute = {
//   async get(req, res) {
//     const [, path] = req.url.split('/');
//     const textFile = 'index.html';
//     if (path === '/' && req.method === 'GET') {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'text/html');
//       res.end(textFile);
//     } else {
//       res.statusCode = 404;
//       res.end('404');
//     }
//   }
// };
export default indexRoute;
