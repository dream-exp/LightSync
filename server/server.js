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
const bodyParser = require('body-parser');
var util = require('./myutil.js');

var userApp = express();
var adminApp = express();

// Socket.io使うためのhttpサーバ
var userServer = http.Server(userApp);
var io = socket_io.listen(userServer);


userApp.get('/', function(req, res) {
    res.sendFile(path.resolve('../client-front/build/index.html'));
});

// クライアントが接続してきたときの処理
io.sockets.on('connection', function(socket) {
    socket.emit('greeting', {color : 'black'}, function(data) {
        console.log('result : ' + data);
    });
    
    socket.on('disconnect', function() {
        console.log(socket.id + ' disconnected.');
    });

    socket.on('control color', function (data, fn) {
        console.log(data);
        sendColors(data.colors);
    });
});

/**
 * 色のリストをクライアントにランダムに投げる関数
 * @param colors 色のリスト
 */
function sendColors (colors) {
    var sockets = io.sockets.connected;
    var randomSids = util.shuffle(util.keys2list(io.sockets.adapter.sids));
    var N = -1;
    
    // リストの長さを取得する
    N = colors.length;
    
    for(var k in randomSids) {
        sockets[randomSids[k]].emit('greeting', {color : colors[k % N]});
    }
}


adminApp.use(bodyParser.json());

adminApp.get('/', function(req, res, next) {
    res.sendStatus(200);
});

adminApp.post('/api/color', function(req, res) {
    
    // colorsがなければ何もしない
    if(req.body.colors == undefined) {
        res.sendStatus(500);
        return;
    }
    
    // POSTで受け取った色をクライアントに投げる
    sendColors(req.body.colors)

    res.sendStatus(200);
});

// Run servers
userServer.listen(3000, function() {
    console.log('Application is listening to PORT : ' + userServer.address().port);
});

var adminServer = adminApp.listen(3001, function() {
    console.log('Application is listening to PORT : ' + adminServer.address().port);
});
