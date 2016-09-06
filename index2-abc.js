#!/usr/bin/env node
'use strict';

//TODO https://dzone.com/articles/nodejs-call-https-basic --> FOR REQUEST
var http = require('http');
var https = require('https');
var basic = require('basic-authorization-header');
var soap = require('soap');
var fs = require('fs');
var request = require('request');
var httpntlm = require('httpntlm');
//TODO  Authorization:Basic YWFhYTphYWFh             (aaaa:aaaa)
var config = require('./abc-auth.js')
var req = require('./lib/b2bClientABC.js');
var program = require('commander');

program.parse(process.argv);


req.makeRequest(); //make the request


