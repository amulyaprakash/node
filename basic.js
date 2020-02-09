const http= require('http');
const fs=require('fs');
// const http=require('./http');

//to create a server
const server=http.createServer((req,res) =>
{
    const url=req.url;
    if(url==='/')
     {
         res.write('<html>');
         res.write('<head> <title>  welcome page</title> </head>');
         res.write('<body> <form action="/message" method="POST"><input type="text" name="title"><button type="submit">Add</button></form>');
         res.write('</body></html>');
         return res.end();
     }

     if(url==='/message' && req.method==='POST')
     {
         fs.writeFileSync('message.txt','hello text');
         res.statusCode=302;//code 302 for re-directing

         res.setHeader('Content-type','text/html');
         res.setHeader('Location','/');
         res.write('<h1>Message received</h1>');
         //res.write('msg');
         return res.end();
     }
        
    //  res.write("invalid");
    //  res.end();

    
      res.write('<html>');
      res.write('<head> <title> My First page</title></head>');
      res.write('<body> <h1> hello node.js server</h1></body>');
      res.write('</html>');
      res.end();
     }

    // if(req.url === '/message') {
    //     res.write('<p>done</p>');
    //}
    //  res.setHeader('Content-Type','text/html1');
    //  res.write('<html>');
    //  res.write('<head> <title> first page</title> </head>');
    //  res.write('<body><h1> hello fom nod JS </title></head>');
    //  res.write('</html>')
    //  res.end();
    //console.log(req.url,req.method,req.headers);
//process.exit();
);

server.listen(3000);