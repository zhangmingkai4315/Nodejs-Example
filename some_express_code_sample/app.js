// 代码演示如何使用express来订阅消息

var express = require('express');
var app = express();
var Emails = require('./Email');
var User = require('./User');

app.use(express.json());
app.post('/users',function(req,res,next){
	// create user
	// 如果成功创建用户
	res.app.emit('user:created:success',user);
});

app.emit('user:created:success',Emails.send);