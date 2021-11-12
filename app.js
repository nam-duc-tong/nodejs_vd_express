
var express = require('express');
var app = express();
var server = require("http").createServer(app);
server.listen(3000);
app.get("/",function(req,res){
    res.send("<font color=red>Tong Duc Nam la mot lap trinh vien chuyen nghiep trong tuong lai</font>");
});