
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


// let array7 = ["t", "e", "s", "t"];
// console.log( array7.slice(1, 3) ); // e,s (копіює з 1 до 3)
// console.log( array7.slice(-2) ); // s,t (копіює з -2 до кінця)


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

// let arr = ["Oksana", "Dima", "Denys"];
// let str = arr.join('; '); // обʼєднуємо масив в рядок за допомогою ";
// console.log(str); //


// let arr = [1, 2, 3, 4, 5];
// let summa = arr.reduce((sum, item) => sum += item, 0);
// console.log(summa);


// console.log(typeof (arr));
// console.log(Array.isArray(arr));



// function camelize(str) {
//     let newArr = str.split('-');
//     console.log(newArr);
//     let arrayWithUpperFirstLetter = newArr.map((item, index) => {
//        return  index === 0 ? item : item[0].toUpperCase() + item.slice(1);
//     });
//     console.log(arrayWithUpperFirstLetter);
//     return arrayWithUpperFirstLetter.join('');
// }
// console.log(camelize("background-color"));



// function filterRange(arr, a, b) {
//     return arr.filter((item) => item >= a && item <= b)
// };
// let arr = [5, 3, 8, 1];
// console.log(filterRange(arr, 1, 4));



// let arr = [5, 2, 1, -10, 8];
// console.log(arr.sort((a, b) => b - a));


// let arr = ["HTML", "JavaScript", "CSS"];
// function copySorted(arr) {
//     let copyArr = arr.slice();
//     console.log(copyArr);
//     let compareCopyArr = copyArr.sort((a, b) => a.localeCompare(b));
//     console.log(compareCopyArr);
//     return compareCopyArr;
// };
// let sorted = copySorted(arr);
// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (без змін)


// let s = '1 + 2';
// console.log(s.split(' '));

// function Calculator() {
//     this.methods = {
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b,
//     }
//     this.calculate = function (str) {
//         let arr = str.split(' ');
//         let a = +arr[0];
//         let operator = arr[1];
//         let b = +arr[2];

//         return this.methods[operator](a, b);
//     }
//     this.addMethod = function (name, fn) {
//         this.methods[name] = fn;
//     }
// }
// let calculator = new Calculator;
// console.log(calculator.calculate('4 - 2'));

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// console.log( result ); // 8


// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };
// let users = [ ivan, petro, mariya ];
// let names = users.map(item => item.name);
// console.log( names ); // Іван, Петро, Марія


// let ivan = { name: "Іван", surname: "Іванко", id: 1 };
// let petro = { name: "Петро", surname: "Петренко", id: 2 };
// let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

// let users = [ ivan, petro, mariya ];

// let usersMapped = users.map(function (item) {
//     return {
//         id: item.id,
//         fullName: `${item.name} ${item.surname}`
//     }
// });
// console.log(usersMapped);


// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };

// let arr = [ petro, ivan, mariya ];

// function sortByAge(arr) {
//    return arr.sort((a, b) => a.age - b.age);
// }
// console.log(sortByAge(arr));



// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];
// function getAverageAge(arr) {
//     return arr.reduce((value, item) => value += item.age, 0) / arr.length;
// }
// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28



// let users = [
//   {id: 'іван', name: "Іван Іванко", age: 20},
//   {id: 'ганна', name: "Ганна Іванко", age: 24},
//   {id: 'петро', name: "Петро Петренко", age: 31},
// ];
// function groupById(arr) {
//     return arr.reduce((obj, item) => {
//         obj[item.id] = item;
//         return obj;
//     }, {});
// }
// let usersById = groupById(users);
// console.log(usersById);


