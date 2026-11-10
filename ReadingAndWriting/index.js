const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.end(
            `<form action="/message" method="POST">
            <label for="username">Name</label>
            <input type="text" name="username">
            <button type="submit">Add</button></form>`
        );
    }
    else if (req.url === '/message'){

        res.setHeader('Content-Type', 'text/html');

        let buffer = []

        req.on('data', (chunk) => {
            buffer.push(chunk);
        });

        req.on('end', () => {
            const combinedBuffer = Buffer.concat(buffer);
            const formData = combinedBuffer.toString();
            const username = formData.split('=')[1];
            
            fs.writeFile('message.txt', username, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            })
        })
    } 

})

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})