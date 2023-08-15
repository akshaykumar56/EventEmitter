const EventEmitter = require ('events')

const myEmitter = new EventEmitter();
function c1() {
   console.log('an event occurred!');
}
function c2() {
   console.log('yet another event occurred!');
}
function c3() {
    console.log(2*3);
 }
myEmitter.on('eventOne', c1);
myEmitter.on('eventOne', c2);
myEmitter.on('eventOne', c3);

myEmitter.emit('eventOne');

myEmitter.off('eventOne',c1);
myEmitter.emit('eventOne')

console.log(myEmitter.listenerCount('eventOne'))
console.log(myEmitter.rawListeners('eventOne'))