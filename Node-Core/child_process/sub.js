process.on('message', function (message) {
  console.log(message);
});

process.send({ hello:'world' });
