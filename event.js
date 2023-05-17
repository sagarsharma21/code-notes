// var events =require('event');

// var ev =new events.EventEmitter();
// //Subscribe for FirstEvent
// em.on('FirstEvent', function (data) {
//     console.log('First subscriber: ' + data);
// });

// // Raising FirstEvent
// em.emit('FirstEvent', 'This is my first Node.js event emitter example.');

var events = require('events');
//const { EventEmitter } = require('stream');
var em = new events.EventEmitter();

//Subscribe for FirstEvent
em.on('FirstEvent',function(data){
    console.log('First Subscriber: '+data);
});

//Raising Firstevnet
em.emit('FirstEvent', 'This is my first Node.js event emitter!');
