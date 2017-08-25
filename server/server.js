/*
 * Created on 08/25/17 17:00:57
 *
 * LightSyncのサーバ
 *
 * @author: eqs
 * */

// Load Modules
var express = require('express');
var path = require('path');
var socket_io = require('socket.io')
var http = require('http');
var util = require('./myutil.js');

var userApp = express();
var adminApp = express();

// Socket.io使うためのhttpサーバ
var userServer = http.Server(userApp);
var io = socket_io.listen(userServer);

userApp.get('/', function(req, res) {
    res.sendFile(path.resolve('index.html'));
});

// クライアントが接続してきたときの処理
io.sockets.on('connection', function(socket) {
    socket.emit('greeting', {color : 'black'}, function(data) {
        console.log('result : ' + data);
    });
    
    socket.on('disconnect', function() {
        console.log(socket.id + ' disconnected.');
    });
});


adminApp.get('/', function(req, res, next) {
    // 接続中のクライアントからランダムにいくつか選んで色を変更する
    
    var sockets = io.sockets.connected;
    var randomSids = util.shuffle(util.keys2list(io.sockets.adapter.sids));

    io.sockets.emit('greeting', {color : 'black'});
    for(let sid of randomSids.slice(0, 3)) {
        sockets[sid].emit('greeting', {color : '#' + req.query.color});
    }
    
    // io.sockets.emit('greeting', {color : '#' + req.query.color});

    res.sendStatus(200);
});

// Run servers
userServer.listen(3000, function() {
    console.log('Application is listening to PORT : ' + userServer.address().port);
});

var adminServer = adminApp.listen(3001, function() {
    console.log('Application is listening to PORT : ' + adminServer.address().port);
});
