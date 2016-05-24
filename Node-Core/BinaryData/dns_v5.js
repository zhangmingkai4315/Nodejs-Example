'use strict';

var dns = require('dns');

dns.setServers(['1.2.4.8']);
dns.resolve4('nodejs.org', function (err, address) {
	  if (err) {
		  throw err;
	}
	  console.log('address: ' + JSON.stringify(address));
	  address.forEach(function (a) {
		  dns.reverse(a, function (err, hostnamr) {
			  if (err) {
				  throw err;
			}
			  console.log('reverse for ' + a + ' : ' + JSON.stringify(hostname));
		});
	});
});

console.log(dns.getServers());
