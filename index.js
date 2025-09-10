const express = require("express");

const app = express();

app.listen(8080, ()=>{
    console.log(`Server started on post: 8080 and ready to serve the request.`);
});

app.get('/', (request, response)=>{
    response.send(`Response from GET method for url /`);
});

app.get('/home', (request, response)=>{
    response.status(200);
    response.send(`Response from GET method for url /home`);
});
app.post('/create', (request, response)=>{
    response.send(`Response from GET method for url /create`);
});