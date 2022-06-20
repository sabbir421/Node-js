const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write('create new server');
    res.end();
    }
    else if(req.url=="/products"){
        res.write('this our products');
        res.end();
    }
    else{
        res.write('page not found');
        res.end();
    }
})
server.listen(4000);
console.log('server running on 4000 port');

