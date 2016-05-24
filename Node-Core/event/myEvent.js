import EventEmitter from "events";
class MyEmitter extends EventEmitter {
	  constructor() {
		  super();
	}
}

const emitter1 = new MyEmitter();
emitter1.on('hello', (username) => {
	  console.log("Welcome:" + username);
});
emitter1.emit('hello','Mike');

