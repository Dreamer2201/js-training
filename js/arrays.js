
// // 1. create array
// let arr1 = new Array();
// let arr2 = [];

// 2.
// let fruits = ["Apple", "Orange", "Plum"];

// console.log( fruits[0] ); // Apple
// console.log(fruits[2]); // Plum
// fruits[2] = 'Grape';
// fruits[3] = 'green';
// console.log(fruits);

// console.log(fruits.length);


// 3. diferent elements
// різні типи значень
// let arr = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];
// // отримати елемент з індексом 1 (об’єкт) та вивести його властивість name
// console.log( arr[1].name ); // John
// // отримати елемент з індексом 3 (функція) та виконати її
// arr[3](); // hello


// 4. at
// let fruits = ["Apple", "Orange", "Plum"];
// console.log( fruits[fruits.length-1] ); // Plum
// console.log(fruits.at(-1)); // Plum


// 5. Методи push та unshift можуть додавати одразу декілька елементів:
// let fruits = ["Apple"];
// fruits.push("Orange", "Peach");
// fruits.unshift("Pineapple", "Lemon");
// // ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
// console.log(fruits);


//
// let fruits = ["Banana"]
// let arr = fruits; // копіюється за посиланням (дві змінні посилаються на один масив)
// console.log( arr === fruits ); // true
// arr.push("Pear"); // зміна масиву за посиланням
// console.log(fruits); // Banana, Pear - наразі два елемента
// fruits.push('Grapes');
// console.log(fruits);


//
// let fruits = ["Apple", "Orange", "Plum"];
// console.log(String(fruits));

// збінарним + масив перетворюється в рядковий тип
// console.log( [] + 1 ); // "1"
// console.log( [1] + 1 ); // "11"
// console.log([1, 2] + 1); // "1,21"


//
// let styles = ['Jazz', 'Blues'];
// console.log(styles);

// styles.push('Rock-n-Roll');
// console.log(styles);

// let middleIndex = Math.floor(styles.length / 2 - 0.5);
// styles[middleIndex] = 'Classics';
// console.log(styles);

// styles.shift();
// console.log(styles);

// styles.unshift('Rap', 'Reggae');
// console.log(styles);


// function sumInput() {
//     let numbers = [];
//     while (true) {
//         let value = prompt('Enter number', 0);
//         if (value === '' || value === null || !isFinite(value)) break;
//         numbers.push(value);
//     }
//     let sum = 0;
//     for (let item of numbers) {
//         sum += item;
//     }
//     return sum;
// }
// console.log(sumInput());



// Метод arr.splice – це універсальний «швейцарський ніж» для роботи з масивами. Вміє все: додавати, видаляти і замінювати елементи.
// arr.splice(start[, deleteCount, elem1, ..., elemN])
// let arr = ["I", "study", "JavaScript"];
// arr.splice(1, 1);
// console.log(arr);


// let arr = ["I", "study", "JavaScript", "right", "now"];
// // видалимо 3 перших елементи і замінимо їх іншими
// arr.splice(0, 3, "Let's", "dance");
// console.log( arr ) // отримаєм ["Let's", "dance", "right", "now"]


// let arr = ["I", "study", "JavaScript", "right", "now"];
// // видалимо 2 перших елементи
// let removed = arr.splice(0, 2);
// console.log(removed); // "I", "study" <-- масив видалених елементів
// console.log(arr);


// let arr = ["I", "study", "JavaScript"];
// arr.splice(2, 0, "complex", "language");
// console.log(arr);


// let arr = [1, 2, 5];
// // починаючи з індексу -1 (перед останнім елементом)
// // видалимо 0 елементів,
// // вставимо значення 3 та 4
// arr.splice(-1, 0, 3, 4);
// console.log( arr ); // 1,2,3,4,5


// slice
// let arr = [1, 2, 5, 7, 8];
// arr.slice();
// console.log(arr);
// let newArr = arr.slice(0, 2);
// console.log(newArr);


// arr.concat(arg1, arg2...)
// let arr = [1, 2, 3];
// let arr1 = arr.concat(4, 5, 6);
// console.log(arr1);
// let arr2 = arr.concat([4, 5], 6);
// console.log(arr2);
// let obj = {
//     name: 'Oks',
//     surname: 'Poliakova',
// };
// let arr3 = arr.concat(obj);
// console.log(arr3);


// // Метод arr.forEach дозволяє запускати функцію для кожного елемента масиву…
// arr.forEach(function(item, index, array) {
//   // ... робимо щось з item
// });
// arr2.forEach(function (it, index) {
//     console.log(`${it} has index ${index}`);
// });


// indexOf/lastIndexOf та includes
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.indexOf(4, 1));
// console.log(arr.lastIndexOf(2, 5));
// console.log(arr.includes(6, 4));


// find і findIndex
// let result = arr.find(function(item, index, array) {
//   // якщо true - повертається поточний елемент і перебір закінчується
//   // якщо всі ітерації виявилися помилковими, повертається undefined
// });


// [1, -2, 15, 2, 0, 8].sort(function(a, b) {
//   console.log( a + " <> " + b );
//   return a - b;
// });
// let arr = [1, -2, 15, 2, 0, 8];
// console.log(arr.sort((a, b) => b - a));
// console.log(arr.sort((a, b) => a - b));


// let countries = ['Österreich', 'Andorra', 'Vietnam'];
// // console.log(countries.sort((a, b) => a.localeCompare(b))); // Andorra,Österreich,Vietnam (правильно!);
// // console.log(countries.sort((a, b) => b.localeCompare(a)));


// console.log(countries.reverse());
// let arr5 = [1, 2, 3, 4, 5];
// arr5.reverse();
// console.log( arr5 ); // 5,4,3,2,1


// split та join
// str.split(delim)
// let names = "Oksana", "Dima", "Denys";
// let arr = names.split(', ');
// for (let name of arr) {
//   console.log( `A message to ${name}.` );
// }

// let str = "Oksana";
// console.log(str.split('')); // [ O, k, s, a, n, a ];

let arr = ["Oksana", "Dima", "Denys"];
let str = arr.join('; '); // обʼєднуємо масив в рядок за допомогою ";
console.log( str ); // 
