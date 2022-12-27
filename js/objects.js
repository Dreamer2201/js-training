
// 1. Objects key
// let user = {
//   name: "Іван",
//   age: 30
// };

// let key = prompt("Що ви хочете знати про користувача?", "name");

// // доступ до властивості через змінну
// alert(user[key]); // Іван (якщо ввести "name")

// 2. Обчислювана властивість
// let fruit = prompt("Які фрукти купити?", "apple");
// let bag = {
//   [fruit]: 5, // назву властивості взято зі змінної fruit
// };
// alert(bag.apple); // 5 якщо fruit="apple"

// // переписуємо:
// let fruit = prompt("Які фрукти купити?", "apple");
// let bag = {};
// // назву властивості взято зі змінної fruit
// bag[fruit] = 5;

// 3. складні вирази в квадратних дужках
// let fruit = 'apple';
// let bag = {
//     [fruit + 'Odder']: 7
// };
// console.log(bag.appleOdder);

// 4.
// const makeUser = (name, age) => {
//     return {
//         name,
//         age,
//     }
// };
// let user1 = makeUser('Oksana', 36);
// console.log(user1);

// 5. Перевірка наявності властивості в об'єкті "key" in object
// let user = { name: "Іван", age: 30 };
// console.log( "age" in user ); // true, user.age існує
// console.log( "blabla" in user ); // false, user.blabla не існує

// 6. Перебор всіх властивостей об'єкта, цикл for..in.
// let user = {
//   name: "Іван",
//   age: 30,
//   isAdmin: true
// };
// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

// 7. Завдання
// Створіть порожній об’єкт user.
// Додайте властивість name зі значенням Іван.
// Додайте властивість surname зі значенням Сміт.
// Змініть значення name на Петро.
// Видаліть властивість name з об’єкта.

// const user = {};
// user.name = 'Oksana';
// console.log(user);
// user.surname = "Poliakova";
// console.log(user);
// user.name = 'Oks';
// console.log(user);
// delete user.name;
// console.log(user);

// 8. написати функцію isEmpty
let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "Вставай";
console.log(isEmpty(schedule)); // false

function isEmpty(obj) {
    for (let prop in obj) {
        return false;
    } return true;
}

// 9 сума властивостей об'єкта
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0;
let quntity = [];
for (let name in salaries) {
    sum += salaries[name];
    quntity.push(name);
};

console.log(sum / quntity.length);

// 10 написати функцію multiplyNumeric(menu);
// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: "Моє меню"
// };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof (obj[key]) === 'number') {
//             obj[key] *= 2;
//         }
//         return;
//     }
// }
// multiplyNumeric(menu);
// console.log(menu);

// 11 клонування об'єктів
let user = {
  name: "Іван",
  age: 30
};
let clone = {
    surname: "Poliakova",
};
clone = Object.assign(clone, user);
console.log(clone);
console.log(user.age === clone.age);


// 
let descriptor = Object.getOwnPropertyDescriptors(user, 'name');
console.log(descriptor);
Object.defineProperty(user, 'name', {
    writable: false,
});

user.name = 'Oksana';
console.log(user);


// !!!!!!!!!!!!! getter and setter
let customer = {
    name: "Oksana",
    age: 36,
    get getName() {
        return this.name;
    }
}
console.log(customer.getName);

Object.defineProperty(customer, 'changeAge', {
    set: function (newAge) {
        return this.age = newAge;
    }
})
customer.changeAge = 37;
console.log(customer.age);


// _proto_
let animal = {
  jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true,
  
};
console.log(rabbit);
console.log( rabbit.jumps ); // ? (true)
delete rabbit.jumps;
console.log( rabbit.jumps ); // ? (null)
delete animal.jumps;
console.log(rabbit.jumps); // ? (enderfined)
console.log(rabbit);


// 
let head = {
  glasses: 1
};
let table = {
    pen: 3,
    __proto__: head,
};
let bed = {
  sheet: 1,
    pillow: 2,
  __proto__: table,
};
let pockets = {
    money: 2000,
    __proto__: bed,
};
console.log(pockets.pen);
console.log(bed.glasses);
console.log(table.money);


// 
let animalOne = {
  eat() {
    this.full = true;
  }
};

let rabbitOne = {
  __proto__: animalOne
};
rabbitOne.eat();
console.log(rabbitOne);
console.log(rabbitOne.eat);
console.log(rabbitOne.full);


// 
let hamster = {
  stomach: [],
  eat(food) {
    this.stomach = [food];
  }
};
let speedy = {
  __proto__: hamster
};
let lazy = {
  __proto__: hamster
};
// Цей хом’ячок знайшов їжу
speedy.eat("apple"); // speedy.stomach: ["apple"]
speedy.eat("pear"); // speedy.stomach: ["pear"]
console.log(hamster);
console.log( speedy.stomach ); // pear
console.log( lazy.stomach ); // []


// 
let animalTwo = {
  eats: true
};
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animalTwo;
let rabbitTwo = new Rabbit("White Rabbit"); //  rabbitTwo.__proto__ == animal
console.log( rabbitTwo.eats ); // true


// 
let object = {
  cat: 'home',
  bear: 'wild'
};
let key = prompt("Введіть ключ", "__proto__");
console.log(object[key]); // [object Object], не "певне значення"!