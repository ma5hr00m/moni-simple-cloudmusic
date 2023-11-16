const http = require('http');
const fs = require('fs');
const path = require('path');

// Define constants for file extensions and content types
const EXTENSIONS = {
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.html': 'text/html',
};

const server = http.createServer(async (req, res) => {
  // Use template string to concatenate file path
  let filePath = `.${req.url}`;
  if (filePath === './') {
    filePath = './src/index.html';
  }

  const extname = path.extname(filePath);
  // Use the constant to get the content type
  let contentType = EXTENSIONS[extname] || 'text/html';

  try {
    // Use async/await to read file content
    const content = await fs.promises.readFile(filePath, 'utf-8');
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (error) {
    // Use try/catch to handle errors
    if (error.code === 'ENOENT') {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(500);
      res.end('Internal server error');
    }
  }
});

server.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
