const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let fpath = path.join(__dirname, 'site',
    req.url === '/' ? 'test2.html' : req.url);
    
    let extname = path.extname(fpath);
    
    let contType = 'text/html';
    
    switch(extname){
        case '.js':
            contType = 'text/javascript';
            break;
        case '.css':
            contType = 'text/css';
            break;
    }

    fs.readFile(
        fpath, (err, content) => {
            if(err){
                throw err;
            } else {
                res.writeHead(200, {'Content-Type': contType });
                res.end(content, 'utf-8');
            }
        }
    );
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server PORT ${PORT} e douracche`));
