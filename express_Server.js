const express = require('express');
const app = express();
const bodyparser=require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(
function(request,response,next){
console.log('olen middleware-funktio');
next();
});

app.use('/two',
    function(request,response,next){
    console.log('olen two reitti middleware-funktio');
    next();
    });

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/one', (req, res) => res.send('Toine route'));
app.get('/two', 
function(request, response) {
        console.log("route two");
        response.send('Terve');
});
app.get('/three/:fname', 
function(request, response) {
        console.log("route two");
        response.send('Terve'+request.params.fname);
});
app.get('/four/:fname/:lname', 
function(request, response) {
        console.log("route two");
        response.send('Terve '+request.params.fname+' '+request.params.lname);
});

app.post('/',
    function(request,response){
        response.send('terve' +request.body.fn +' '+request.body.ln);
    }
);

app.listen(3000, () => console.log('Example app listening on port 3000!'));