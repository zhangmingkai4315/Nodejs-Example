

import EventEmitter from "events";
class MyEmitter extends EventEmitter {
	  constructor() {
		  super();
	}
}
MyEmitter.prototype.once = function once(type, listener) {
	    if (typeof listener !== 'function')
	      throw new TypeError('"listener" argument must be a function');

	    var fired = false;

	    function g() {
	      this.removeListener(type, g);
	      if (!fired) {
	        fired = true;
	        listener.apply(this, arguments);
	    }
	  }

	    g.listener = listener;
	    this.on(type, g);

	    return this;
};

const emitter1 = new MyEmitter();



emitter1.once('hello', (username) => {
	  console.log("Welcome:" + username);
});
emitter1.once('hello', (username) => {
	  console.log("Welcome:" + username);
});
emitter1.emit('hello','Mike');
emitter1.emit('hello','Mike')
