
// class MyClass {
//   // методи класу
//   constructor() { ... }
//   method1() { ... }
//   method2() { ... }
//   method3() { ... }
//   ...
// }


// Class expression:

let User = class {
  sayHi() {
    console.log("Привіт");
  }
};


// Подібно до Named Function Expression, Class Expression може мати назву.
// Якщо Class Expression має назву, то її видно лише всередині класу:

// "Named Class Expression"
// (немає такого терміну у специфікації, але це схоже на Named Function Expression)
let Customer = class VipCustomer {
  sayHi() {
    console.log(VipCustomer); // назву MyClass видно тільки всередині класу
  }
};
new Customer().sayHi(); // працює, показує визначення VipCustomer
// console.log(VipCustomer); // помилка, назву VipCustomer не видно за межами класу


// !!!
// class MyClass {
//   prop = value; // властивість
//   constructor(...) { // конструктор
//     // ...
//   }
//   method(...) {} // метод
//   get something(...) {} // геттер метод
//   set something(...) {} // сеттер метод
//   [Symbol.iterator]() {} // метод з обчисленим ім’ям (символом в цьому випадку)
//   // ...
// }



// 
function PersonType(name) {
    this.name = name;
}
PersonType.prototype.sayName = function() {
    console.log(this.name);
};
let person = new PersonType("Nicholas");
person.sayName();   // виводить "Nicholas"
console.log(person instanceof PersonType);  // true
console.log(person instanceof Object);      // true

// 
class PersonClass {
    // еквівалент конструктора PersonType
    constructor(name) {
        this.name = name;
    }
    // еквівалент PersonType.prototype.sayName
    sayName() {
        console.log(this.name);
    }
}


// 
class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    console.log(this.value);
  }
}

let button = new Button("привіт");
button.click();
setTimeout(button.click, 1000); // привіт


// 
class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);
    console.log(output);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock({ template: 'h:m:s' });
console.log(clock);
clock.start();
clock.stop();


// 
class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`)
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} is stop.`);
  }
}
let rabbit = new Animal('My rabbit');
console.dir(Animal);
console.log(rabbit);
rabbit.run(7);
rabbit.stop();

class Cat extends Animal {
  sleep() {
    this.time = 20;
    console.log(`${this.name} sleeps ${this.time} hours.`);
  }
}
let cat = new Cat('My cat');
cat.sleep();

console.dir(Cat);
console.dir(cat);

// 
class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }
  sayName() {
    console.log(`Hi, I'm ${this.name}`);
  }
  getSquare() {
    return this.width * this.height;
  }
  setSquare(square) {
    this.square = square;
  }
}
class Square extends Rectangle {
  constructor(name, length) {
    super(name, length, length);
    this.name = name;
  }
}
let rect = new Rectangle('rect', 200);
console.log(rect);
let square = new Square('square', 100);
console.log(square);


// 
class AnimalExample {
  constructor(name) {
    this.name = name;
  }
}
let anim = new AnimalExample('Wolf');
console.log(anim);
class Rabbit extends AnimalExample {
  constructor(name) {
    super(name);
    this.name = name;
    this.created = Date.now();
  }
}
let rabbit2 = new Rabbit("White Rabbit"); // Error: this is not defined
console.log(rabbit2);

// 
function func() {

  try {
    console.log("code in try");
    return 1;

  } catch (err) {
    /* ... */
  } finally {
    console.log( 'finally' );
  }
}

console.log( func() ); 