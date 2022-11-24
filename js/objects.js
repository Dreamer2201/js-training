
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
// let user = {
//   name: "Іван",
//   age: 30
// };
// let clone = {
//     surname: "Poliakova",
// };
// clone = Object.assign(clone, user);
// console.log(clone);
// console.log(user.age === clone.age);

