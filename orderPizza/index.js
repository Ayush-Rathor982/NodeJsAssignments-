const http = require('http');

const server = http.createServer((req,res)=>{
    let url = req.url;

    if(url === '/'){
        res.end('<h1>Hello, World!</h1>');
    }
    else if(url === '/pizza'){
        res.end('<h1>This is your pizza</h1>');
    }

    else if(url === '/home'){
        res.end('<h1>Welcome home </h1>');
    }
    else if(url === '/about'){
        res.end('<h1>Welcome to About us</h1>');
    }
    else if(url === '/node'){
        res.end('<h1>Welcome to my Node.js Project</h1>');
    }
    else{
        res.end('<h1>Page not found</h1>');
    }
});

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
})