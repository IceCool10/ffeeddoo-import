#!/usr/bin/env node
'use strict';

var config = require('../abc-auth.js');
var https = require('https');

var transform = require('../transform.js');
var dbs = require('../database.js');

var makeRequest = function() {

	https.get(config.options, function(res) {
    var body = '';
    res.on('data', function(chunk) {
        body += chunk;

    });
    res.on('end', function() {
        for (var header in res.headers) { //Response Headers
            var value = res.headers[header];
            console.log(header + ': ' + value);
        }
        //console.log("---------------------------------------------------");
        //console.log("BODY: " + body); //verifying the response
        //console.log("---------------------------------------------------");
        //var objects = body.substring(body.indexOf('['),body.lastIndexOf(']')+1); // get only the products from the requests
        console.log(body); // verify the response
       // var JSONobject = transform.toJSON(objects); // convert to JSON

        //LOAD
        //dbs.storeProducts(JSONobject);//store products in database

    })


}).on('error', function(e) {
    console.log("Got error: " + e.message);
});

}

module.exports.makeRequest = makeRequest;