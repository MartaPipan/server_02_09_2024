const http = require('node:http');
const fs = require('fs');
const PORT = 3000;
const server = http.createServer((req, res) => {
    fs.readFile('./views/index.html', { encoding: 'utf8' }, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.end(data);
    });
});
    //read index.html with callback
   
server.listen(PORT, () => {
    console.log('server start at port ' + PORT);
});