
console.log('Imported');
export default function Hello() {
  this.name = 'mike';
}

Hello.prototype.sayHello = function () {
  console.log(`hello ${this.name}`);
};
