const dns= require("dns")
dns.resolve4('jsmean.com',(err,address)=>{
	if (err) { throw err;}
	console.log(`address: ${JSON.stringify(address)}`);
	address.forEach((a)=>{
		dns.reverse(a,(err,hostnamr)=>{
			if (err) { throw err}
			console.log(`reverse for ${a} : ${JSON.stringify(hostname)}`)
		})
	})
})
