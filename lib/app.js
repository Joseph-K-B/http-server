// import indexRoute from './routes.js';
import { readFile } from 'fs/promises'
import path from 'path';
// const index = '../public/index.html';


const source = './public';

const app = async (req, res) => {
  const[, path] = req.url.split('/');
  if (req.url === '/' && req.method === 'GET') {
    try {
      const textFile = 'index.html';
      const join = await path.join(source, textFile);
      const read = await readFile(join, 'utf-8');
      res.setHeader('Content-Type', 'text/html');
      res.end(read);
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
