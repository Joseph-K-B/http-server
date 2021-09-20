import indexRoute from './routes.js';
// import path from 'path';
// const index = '../public/index.html';


const routes = {
  route: indexRoute
};

const app = async (req, res) => {
  const[, path] = req.url.split('/');
  const route = routes[path];
  if(route) {
    try{
      const routeHandler = [route.method];
      await routeHandler(req, res);
    } catch (error) {
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
  console.log(res.statusCode);
  
};



export default app;
