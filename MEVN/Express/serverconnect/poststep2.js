var express = require('express');
var app =express();
var bodyParser =require('body-parser');

var urlencoderParser =bodyParser.urlencoder({extended:false});
app.use(express.static('public'));

app.get('./index.html',function(reg,res) {
    res.send(__dirname +"./index.html");
});

app.post('/post',urlencoderParser,function(req,res){
    response ={
        first_name :req.body.first_name,
        first_name :req.body.first_name
    }
    console.log(response);
    res.send(JSON.stringify(response));
})