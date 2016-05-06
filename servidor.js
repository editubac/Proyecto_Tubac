var express=require('express');
var morgan=require('morgan');
var app=express();
var puerto=3000;
var mysql=require('mysql');

app.use(morgan('dev'));

app.use('/api/v1',require('./rutas')); 

app.listen(puerto,function(){
	console.log("Servidor iniciado en el puerto: "+puerto);	
});