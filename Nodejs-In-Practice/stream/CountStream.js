import { Writable } from 'stream';
export default class CountStream extends Writable {
  constructor(matchText, options) {
    super(options);
    this.count = 0;
    this.matchText = matchText || 'Default';
    this.matcher = new RegExp(matchText, 'ig');
  }
  _write(chunk, encode, cb) {
    const matches = chunk.toString().match(this.matcher);
    if (matches) {
      this.count += matches.length;
    }
    cb();
  }
  end() {
    this.emit('total', this.count);
  }
}

