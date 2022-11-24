
// 1. This посилається на саму функцію:
// function makeUser() {
//   return {
//     name: "Іван",
//     ref: this
//   };
// }
// let user = makeUser();
// console.log( user.ref.name ); // Error: Cannot read property 'name' of undefined


// Зараз це працює, оскільки user.ref() – це метод і this посилається на об'єкт.
function makeUser() {
  return {
    name: "Іван",
    ref() {
      return this;
    }
  };
}
let user = makeUser();
console.log( user.ref().name ); // Іван

// 2. Створіть об’єкт calculator з трьома методами:

// read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
// sum() повертає суму збережених значень.
// mul() множить збережені значення і повертає результат.

let calculator = {
    a: 0,
    b: 0,
    read() {
        this.a = +prompt("Enter number a", 0);
        this.b = +prompt("Enter number b", 0);
    },
    sum() {
        let sum = 0;
        console.log(this.a);
        sum = this.a + this.b;
        return sum;
    },
    mul() {
        let muitiply = 0;
        muitiply = this.a * this.b;
        return muitiply;
    }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );