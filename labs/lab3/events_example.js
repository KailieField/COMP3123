const events = require('events');
const eventEmitter = new events.EventEmitter();

// Create an event
const helloFn = () => {
    console.log('Hello, world!');
}
// Create an event handler
eventEmitter.on('hello', helloFn);
// eventEmitter.addListener('hello', helloFn);

// Fire the 'hello' event
eventEmitter.emit('hello');
eventEmitter.emit('hello');

// Remove the event handler
eventEmitter.removeListener('hello', helloFn);

// Fire the 'hello' event again
eventEmitter.emit('hello'); // Nothing will happen


// Create an event handler
eventEmitter.on('greetings', (time, name) => {
    console.log(`Good ${time}, ${name}!`);
});
// Fire the 'greetings' event
eventEmitter.emit('greetings', 'morning', 'John');
eventEmitter.emit('greetings', 'afternoon', 'Jane');
eventEmitter.emit('greetings', 'evening', 'Doe');

// Remove all listeners
eventEmitter.removeAllListeners('hello');
eventEmitter.removeAllListeners('greetings');

// Create an event handler once
eventEmitter.once('welcome', () => {
    console.log('Welcome to the event!');
});
eventEmitter.emit('welcome');
eventEmitter.emit('welcome'); // Nothing will happen