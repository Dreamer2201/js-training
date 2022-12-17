
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
console.log(pow(2, 3));


// 
let company = {
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// Функція для підрахунку суми зарплат
function sumSalaries(department) {
  if (Array.isArray(department)) { // випадок (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // сума масиву
  } else { // випадок (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // рекурсивно викликається для підвідділів, суммуючи результат
    }
    return sum;
  }
}
console.log(sumSalaries(company)); // 7700


//
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumTo(5));


function sumTo1(n) {
    if (n == 1) return 1;
    return  n + sumTo1(n - 1);
};
console.log(sumTo1(5));


function sumTo3(n) {
  return n * (n + 1) / 2;
}
console.log( sumTo3(5) );


// 
function sumAll(...args) { // args – це ім’я масиву
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
console.log( sumAll(1) ); // 1
console.log( sumAll(1, 2) ); // 3
console.log( sumAll(1, 2, 3) ); // 6


// синтаксис розширення
let arr = [3, 5, 1];
console.log(Math.max(...arr)); // 5 (перетворює масив у список аргументів)

// 
let arr1 = [3, 5, 1];
let arr2 = [8, 9, 15];
let merged = [0, ...arr, 2, ...arr2];
console.log(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)

// 
let str = "Hello";

// Array.from перетворює ітерабельний об'єкт в масив
console.log( Array.from(str) ); // H,e,l,l,o
console.log( [...str] ); // H,e,l,l,o


// Створити копію масива/об’єкта
let arr3 = [1, 2, 3];
let arrCopy = [...arr3]; // розширить масив у список параметрів
                        // а потім помістіть результат у новий масив
// чи мають масиви однаковий вміст?
console.log(JSON.stringify(arr3) === JSON.stringify(arrCopy)); // true
// чи масиви однакові?
console.log(arr3 === arrCopy); // false (не однакові посилання)
// зміна нашого початкового масиву не змінює копію:
arr3.push(4);
console.log(arr3); // 1, 2, 3, 4
console.log(arrCopy); // 1, 2, 3

// Цей спосіб копіювання об’єкта набагато коротший, ніж let objCopy = Object.assign({}, obj) чи для масиву let arrCopy = Object.assign([], arr) тому ми вважаємо за краще використовувати його, коли це можливо.


