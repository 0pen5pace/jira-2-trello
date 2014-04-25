
var settings = require("./settings.json");
var CCaller = require("./controllers/CCaller.js");


var call = new CCaller();

console.log(settings.name);
/*var options = {
    host:"api.trello.com",
    path:"/1/members/"+settings.name+"?key="+settings.key
};*/
var options = {
    host:"api.trello.com",
    path:"/1/boards/?key="+settings.key
};

var params = {
    cb:function(res){
        console.info(res);
    }
};


call.GET(options,params);