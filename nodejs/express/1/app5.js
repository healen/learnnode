var express = require("express");
var app=express();
var mysql=require("mysql");

var mysqlPool=mysql.createPool({
	host:"localhost",
	port:3306,
	database:"node_test",
	user:"root",
	password:"123456"
})

app.get("/",function(req,res){
	res.sendfile("app5.html")
})

app.post("/app5",function(req,res){
	req.on("data",function(data){
		var obj=JSON.parse(data.toString());
		mysqlPool.getConnection(function(err,connection){
			if(err){
				res.send("数据库连接错误");
				console.log(err);
				// connection.release();
			}else{
				connection.query("INSERT INTO user_me SET ?",{frist_name:obj.frist_name,last_name:obj.last_name,job:obj.job,about_me:obj.about_me,up_time:new Date()},function(err,result){
					if(!err){
						res.send("添加成功")
					}else{
						res.send("添加失败")
						console.log(err);
					}
					
				})
				
			}
		})
		// res.send(obj);
	})
})


app.listen(1337,"localhost",function(){
	console.log("服务器连接成功:http://localhost:1337");
})