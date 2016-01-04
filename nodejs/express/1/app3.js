var express = require("express");
var app=express();


app.get("/index/:id?/:name?",function(req,res){
	var str="";

	if(req.params.id){
		str+="id="+req.params.id+"<br />";
	}
	if(req.params.name){
		str+="id="+req.params.name+"<br />";
	}
	res.send(str);
})



app.listen(1337,"localhost",function(){
	console.log("服务器连接成功:http://localhost:1337");
})