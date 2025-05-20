const http = require('http');

const server = http.createServer((req, res) => {
  // Allow cross-origin requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  // Handle OPTIONS requests for CORS
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    return res.end();
  }
  
  // Set content type to JSON
  res.setHeader('Content-Type', 'application/json');
  
  // Create a JSON object with all headers
  const headersObj = {};
  Object.entries(req.headers).forEach(([key, value]) => {
    headersObj[key] = value;
  });
  
  // Add some additional information
  headersObj['remote-address'] = req.socket.remoteAddress;
  headersObj['request-method'] = req.method;
  headersObj['request-url'] = req.url;
  headersObj['server-timestamp'] = new Date().toISOString();
  
  // Return the JSON response
  res.statusCode = 200;
  res.end(JSON.stringify(headersObj, null, 2));
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Headers service running at http://localhost:${PORT}`);
});