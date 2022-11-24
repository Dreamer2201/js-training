// 1.
// function User(name) {
//   // this = {};  (неявно)
//   // додає властивості до this
//   this.name = name;
//   this.isAdmin = false;
//   // return this;  (неявно)
// }


// 2. Інкапсуляція коду
// створити функцію і негайно викликати її за допомогою new
// let user = new function() {
//   this.name = "Джон";
//   this.isAdmin = false;
//   // ...інший код для створення користувача
//   // можливо складна логіка та інструкції
//   // локальні змінні тощо
// };
// console.log(user);


// 3. return в конструкторі:
// 3.1
// function BigUser() {
//   this.name = "Джон";
//   return { name: "Ґодзілла" };  // <-- повертає цей об’єкт
// }
// console.log( new BigUser().name );  // Ґодзілла, отримали цей об’єкт

// // 3.2
// function SmallUser() {
//   this.name = "Джон";
//   return; // <-- повертає this
// }
// console.log(new SmallUser().name);  // Джон


// 4. Створення методів у конструкторі
function UserName(name, surname = '') {
    this.name = name;
    this.surname = surname;
    this.fullName = name + ' ' + surname;
    this.sayHi = function () {
        console.log('Your name is:', this.fullName);
    };
}
const oksana = new UserName('Oksana', 23);
oksana.sayHi();


// 5. Чи можливо створити функції A та B, щоб new A() == new B()?
// function A() { ... }
// function B() { ... }
// let a = new A;
// let b = new B;
// alert( a == b ); // true

// відповідь:
// const object = {};
// function A() { return object; }
// function B() { return object; }
// let a = new A;
// let b = new B;
// console.log( a === b ); // true


// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

let calculator = new Calculator() {
    this.a = prompt('Enter Number 1, 0);
    this.b = prompt('Enter Number 2', 0);
    
    this.read = function () {
        
    }
};
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );