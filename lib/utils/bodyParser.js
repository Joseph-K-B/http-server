
module.exports = bodyParser => {
  // const parseRequest = bodyParser.split('\n');
  // const body = bodyParser.split('\n\r\n'[1]);
  // const [method, path] = parseRequest[0].split(' ');
  return new Promise((resolve, reject) => {
    method ===
  });
};


const bodyParser = (req, res) = {
  return new Promise((resolve, reject) => {
    if( req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH').then{}
    if (req.contentType !== 'application/json'){
      reject();
      return;
    }
  });
} 