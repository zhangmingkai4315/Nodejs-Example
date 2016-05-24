const log = console.log.bind(this);

setImmediate(() => {
  setImmediate(() => {
    log(11);
    setImmediate(() => {log(12); });
    setImmediate(() => {log(13); });
  });
  setImmediate(() => {
    log(14);
    setImmediate(() => { log(15); });
    setImmediate(() => {log(16); });
  });
});

setTimeout(() => {
  log('1-TIMEOUT FIRED');
}, 0);

process.nextTick(() => {
  process.nextTick(() => {
    log(21);
    process.nextTick(() => { log(22); });
    process.nextTick(() => { log(23); });
  });
  process.nextTick(() => {
    log(24);
    process.nextTick(() => { log(25); });
    process.nextTick(() => { log(26); });
  });
});

setTimeout(() => {
  log('2-TIMEOUT FIRED');
}, 0);
log('HELLO');

// HELLO
// 21
// 24
// 22
// 23
// 25
// 26
// 1-TIMEOUT FIRED
// 2-TIMEOUT FIRED
// 11
// 14
// 12
// 13
// 15
// 16
