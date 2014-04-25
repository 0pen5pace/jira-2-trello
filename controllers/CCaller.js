/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var CCall = function(){
    var self = this;
    var https = require('https');
    //var settings = require("./settings.json");
    
    /**
     * Default GET call function
     * @param {object} options
     * @param {object} params
     * @returns {CCall.GET}
     */
    self.GET = function(options,params){
        if(!options || !params)
            return;
            
        var getOptions = {
            host:options.host,
            port:443,
            path:options.path,
            method:"GET"
        },
        callback = params.cb;   
        
        var request = https.request(getOptions,function(res){
            res.on('data',function(res){
                callback(JSON.parse(res));
            });
        });
        request.end();
        request.on('error',function(e){
            console.error("Something whent wrong...!!!");
            console.error(e);
        });
    };
    
    self.POST = function(options,params){
        
    };
    
    self.DELETE = function(){
        
    };
    
    self.PUT = function(){
        
    };
    
    
};

module.exports = CCall;


