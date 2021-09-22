/* eslint-disable no-unused-vars */
import { readFile } from 'fs/promises';
import path from 'path';


const source = './public';

const appOne = async (req, res) => {
  const[, resource, file] = req.url.split('/');
  if (req.url === '/' && req.method === 'GET') {
    try {
      const textFile = 'index.html';
      const join = await path.join(source, textFile);
      const read = await readFile(join, 'utf-8');
      res.end(read);
    } 
    catch (error) {
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  } else if (req.url === '/css/main.css' && req.method === 'GET') {
    try {
      const cssFile = '/css/main.css';
      const join = await path.join(source, cssFile);
      const read = await readFile(join, 'utf-8');
      res.end(read);
    } 
    catch (error) {
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
};

export default appOne;
