'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var MyEmitter = (function (_EventEmitter) {
	_inherits(MyEmitter, _EventEmitter);

	function MyEmitter() {
		_classCallCheck(this, MyEmitter);

		_get(Object.getPrototypeOf(MyEmitter.prototype), 'constructor', this).call(this);
	}

	return MyEmitter;
})(_events2['default']);

MyEmitter.prototype.once = function once(type, listener) {
	if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');

	var fired = false;

	function g() {
		this.removeListener(type, g);
		console.log('remove');
		if (!fired) {
			console.log('fire');
			fired = true;
			listener.apply(this, arguments);
		}
	}

	g.listener = listener;
	this.on(type, g);

	return this;
};

var emitter1 = new MyEmitter();

emitter1.once('hello', function (username) {
	console.log('Welcome:' + username);
});
emitter1.once('hello', function (username) {
	console.log('Welcome:' + username);
});
emitter1.emit('hello', 'Mike');
emitter1.emit('hello', 'Mike');

