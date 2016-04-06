import EventEmitter from "events"

class Consumer{
	consumeData(){
		console.log()
	}
}

class Producer extends EventEmitter{
	constructor(){
		super()
	},
	genData(){
		setInterval(function(){
		  this.emit("producer-data",Math.random()*100)	
		},1000)			
	}

}
const producer1=new Producer()
const consumer1=new Consumer()
producer1.genDate()
producer1.on("producer-data",consumer1.consumeData)


