console.log(process.execArgv);
console.log(process.argv);
console.log(process.cwd());

console.log(process.chdir('c:/'));

console.log(process.cwd());
console.log(process.env);

console.log(process.version);
console.log(process.versions);

console.log(process.pid);
process.on('SIGHUP', function () {
  console.log('SIGHUP');
});

setTimeout(function () {
  console.log('Exit');
  process.exit(0);
}, 2000);

console.log(process.arch);
console.log(process.platform);

console.log(process.memoryUsage());
process.kill(process.pid);
