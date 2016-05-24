import EventEmitter from "events";
class MyEmitter extends EventEmitter {
	  constructor() {
		  super();
	}
}

const emitter1 = new MyEmitter();

emitter1.setMaxListeners(10);

for (let i = 0; i < 20; i++) {
  emitter1.on('hello', (username) => {
	       console.log("Welcome:" + username + "-" + i);
   });
}
emitter1.emit('hello','Mike');

// (node) warning: possible EventEmitter memory leak detected. 11 hello listeners added. Use emitter.setMaxListeners() to increase limit.
// Trace
//     at MyEmitter.addListener (events.js:252:17)
//     at _loop (/Users/zhangmingkai/workshop/node/event/4.js:32:11)
//     at Object.<anonymous> (/Users/zhangmingkai/workshop/node/event/4.js:38:2)
//     at Module._compile (module.js:413:34)
//     at Object.Module._extensions..js (module.js:422:10)
//     at Module.load (module.js:357:32)
//     at Function.Module._load (module.js:314:12)
//     at Function.Module.runMain (module.js:447:10)
//     at startup (node.js:139:18)
//     at node.js:999:3
// Welcome:Mike-0
// Welcome:Mike-1
// Welcome:Mike-2
// Welcome:Mike-3
// Welcome:Mike-4
// Welcome:Mike-5
// Welcome:Mike-6
// Welcome:Mike-7
// Welcome:Mike-8
// Welcome:Mike-9
// Welcome:Mike-10
// Welcome:Mike-11
// Welcome:Mike-12
// Welcome:Mike-13
// Welcome:Mike-14
// Welcome:Mike-15
// Welcome:Mike-16
// Welcome:Mike-17
// Welcome:Mike-18
// Welcome:Mike-19
