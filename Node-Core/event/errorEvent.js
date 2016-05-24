import EventEmitter from "events";
class MyEmitter extends EventEmitter {
	  constructor() {
		  super();
	}
}
const env = process.env.NODE_ENV;
const emitter1 = new MyEmitter();

emitter1.on('Debug', (err, info) => {
	  if (err == null) {
		  console.log("Debug:" + info);
	}
});



if (env && env=='production') {
	  emitter1.emit('Debug', new Error('Debug'), null)
} else {
	  emitter1.emit('Debug', null,'this is debug info')
}


