var express = require("express");
var app=express();


app.get("/",function(req,res){
	res.send("你好")
})




app.listen(1337,"localhost",function(){
	console.log("服务器连接成功:http://localhost:1337");
})