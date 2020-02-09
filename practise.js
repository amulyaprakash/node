//setup local server using node and run your first code in nood

const http=require('http'); //constant variable = require function is used to manage your script dependency ,like to include any libaray such as (hhtp),in node http is  http libraray
//http has a feature of creating server
const server=http.createServer((req,res) =>
 {
   res.end('hello world');//will display in chrome as a response 

});

//to activate a server ,we have a special fuction ,we need to call listen function on created server
server.listen(4000,()=>
{
    console.log('server is running........');
});//()=> this fuvtion is invoked wen the server is invoked with port number 4000;
//control + c to terminate oe end the server
