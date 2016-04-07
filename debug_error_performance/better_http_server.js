import domain from 'domain';
import http from 'http';

const d = domain.create();
d.run(() => {
  const server = http.createServer((req, res) => {
    d.on('error', (err) => {
      res.statusCode = 500;
      console.error(err);
      res.end('Internal server error');
      server.close();
      setTimeout(process.exit, 5000, 1);
    });
    response.end('hello');  // will throw error but only in domain;
  });
  server.listen(3000);
});
