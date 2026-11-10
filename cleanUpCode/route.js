const fs = require('fs');

const handler = (req, res) => {
       if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        fs.readFile('message.txt', 'utf8', (err, data) => {
            let form = `<form action="/message" method="POST">
                    <label for="username">Name</label>
                    <input type="text" name="username">
                    <button type="submit">Add</button></form>`

            if(err){
                res.end(form);
            }
            else{
                res.end(
                    `${data}${form}`
                );
            }
        })
        
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
            
            fs.appendFile('message.txt', username+"\n", (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            })
        })
    } 
}



module.exports = handler;