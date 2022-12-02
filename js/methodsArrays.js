let arr = ['First', 'Oksana', 'Dima', 'Denys', 'Last'];

// push(... items) – додає елементи до кінця,
let arrPush = arr.push('NewLast');
console.log(arr);

// arr.pop() – дістає елемент з кінця,
let arrPop = arr.pop();
console.log(arr);

// arr.shift() – дістає елемент з початку,
let arrShift = arr.shift();
console.log(arr);

// arr.unshift(...items) – додає елементи в початок.
let arrUnshift = arr.unshift('NewFirst');
console.log(arr);

// splice(pos, deleteCount, ...items) – починаючи з індексу pos, видаляє deleteCount елементів та вставляє items.
arr.splice(4, 1, 'NewLast');
console.log(arr);

// slice(start, end) – створює новий масив, копіюючи в нього елементи з позиції start до end (не включаючи end).
let newArrCopy = arr.slice();
console.log(newArrCopy);
let newArrCutCopy = arr.slice(0, arr.length - 1); // = arr.slice(0, 4);
console.log(newArrCutCopy);

// concat(...items) – повертає новий масив: копіює всі члени поточного масиву і додає до нього items. Якщо якийсь із items є масивом, тоді беруться його елементи.
let techs = ['HTML', 'Css'];
let newArrTechs = techs.concat(['js', 'php'], 'c++');
console.log(newArrTechs);


// Для пошуку серед елементів:

// indexOf/lastIndexOf(item, pos) – шукає item, починаючи з позиції pos, і повертає його індекс або -1, якщо нічого не знайдено.
let foundIndex = arr.indexOf('Oksana', 0);
console.log(foundIndex);

// includes(value) – повертає true, якщо в масиві є елемент value, в іншому випадку false.
let includeOks = arr.includes('Oksana');
console.log(includeOks);

// find/filter(func) – фільтрує елементи через функцію і віддається перше/всі значення, при проходженні яких функція повертає true.
let findOksana = arr.find(item => item === 'Oksana');
console.log(findOksana);


// !!!! UNIQUE 
let courses = ['HTML', 'js', 'Css', 'js', 'c++', 'php', 'Css', 'c++' ];
let uniqueCourses = courses.filter((tech, index, array) => array.indexOf(tech) === index);
console.log(uniqueCourses);

// findIndex схожий на find, але повертає індекс замість значення.
let findIndx = courses.findIndex(course => course.includes('s'));
console.log(findIndx);


// Для перебору елементів:
// forEach(func) – викликає func для кожного елемента. Нічого не повертає.
let firstLetterUp = courses.forEach(item => console.log(item[0].toUpperCase() + item.slice(1)));
console.log(courses);

// Для перетворення масиву:
// map(func) – створює новий масив з результатів виклику func для кожного елемента.
let newArrayNames = arr.map(item => item + ' ' + 'Polyakov');
console.log(newArrayNames);

// sort(func) – сортує масив «на місці», а потім повертає його.
let nums = [5, 6, 9, 1, 2, 7, 15, 20, 3];
let sortNums = nums.sort((a, b) => a - b);
console.log(nums);
let arrFullNames = ['NewFirst Polyakov', 'Oksana Polyakova', 'Dima Polyakov', 'Denys Polyakov', 'NewLast Polyakov'];
let sortFullNames = arrFullNames.sort((a, b) => a.localeCompare(b));
console.log(sortFullNames);

// reverse() – «на місці» змінює порядок елементів на протилежний і повертає змінений масив.
let changeArr = nums.reverse();
console.log(changeArr);

// split/join – перетворює рядок в масив і назад.
let str = 'Oksana + Dima = LOVE';
let strArr = str.split(' ')
console.log(strArr);
console.log(strArr.join(' '));

// reduce(func, initial) – обчислює одне значення на основі всього масиву, викликаючи func для кожного елемента і передаючи проміжний результат між викликами.
let numbers = [1, 2, 3];
let sum = numbers.reduce((acc, item) => acc += item, 0);
console.log(sum);

// Додатково:

// Array.isArray(arr) перевіряє, чи є arr масивом.
// Зверніть увагу, що методи sort, reverse та splice змінюють поточний масив.


// 1
// function camelize(str) {
//     let arr = str.split('-');
//     console.log(arr);
//     let newArr = arr.map((item, index) => {
//         if (index === 0) {
//         return item;
//         } else {
//            return item[0].toUpperCase() + item.slice(1)
//         }
//     });
//     return newArr.join('');
// };

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));


// 2
let arr7 = [5, 3, 8, 1];
function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
};
console.log(filterRange(arr7, 1, 4));
console.log(arr7); // 5,3,8,1 (не змінюється)


// 3
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i <= arr.length; i++) {
        let value = arr[1];
        if (value >= a || value <= b) {
            arr.splice(i, 1);
        }
    } return arr;
}
let arr8 = [5, 3, 8, 1];
filterRangeInPlace(arr8, 1, 4); // видаляє всі числа крім тих, що в діапазоні від 1 до 4
console.log(arr8); // [3, 1]


// 4
function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };
    this.calculate = function (str) {
        let arrOperation = str.split(' ');
        console.log(arrOperation);
        let a = +arrOperation[0];
        let op = arrOperation[1];
        let b = +arrOperation[2];
        return this.methods[op](a, b);
    } 
};
let calculator = new Calculator;
console.log(calculator);
console.log(calculator.calculate('1 + 2'));



// 5
let ivan = { name: "Іван", surname: "Іванко", id: 1, age: 25 };
let petro = { name: "Петро", surname: "Петренко", id: 2, age: 30 };
let mariya = { name: "Марія", surname: "Мрійко", id: 3, age: 26 };

let users = [ ivan, petro, mariya ];

let usersMapped = (users) => {
    return users.map(user => {
        return {
            id: user.id,
            fullName: `${user.name} ${user.surname}`
        }
    })
};
console.log(usersMapped(users));

function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
};
console.log(sortByAge(users));


// 6
let arr11 = [1, 2, 3];
function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}
console.log(shuffle(arr11));



// 7
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr12 = [ john, pete, mary ];
function getAverageAge(arr) {
    return arr.reduce((prev, user) => prev += user.age, 0) / arr.length;
}
console.log( getAverageAge(arr12) );


