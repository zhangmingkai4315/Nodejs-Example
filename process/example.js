
process.on("uncaughtException",function (err) {
  console.log(err);
});

setTimeout(function () {
  non();
},1000);


process.stdin.resume();
process.on("SIGINT",function () {
  console.log("Got SIGINT");
  // process.stdin.stop();
  process.exit();
});
throw new Error("NEW THROW");
