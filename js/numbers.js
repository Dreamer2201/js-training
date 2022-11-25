
// 1.
// let billion = 1000000000;
// let billion1 = 1_000_000_000;
// console.log(billion === billion1);  // true


// 2.
// let billion = 1e9;  // 1 мільярд, буквально: 1 та 9 нулів
// console.log( 7.3e9 );  // 7.3 мільярдів (таке ж саме що 7300000000 чи 7_300_000_000)

let BASKET_TOTAL_PRICE = 0;

// 3.
// let number = 5.3;
// console.log(Math.trunc(number));

// 4. deference between tofixed & Math.round
// let num1 = 1.23456;
// console.log(Math.round(num1 * 100) / 100);
// 1.23456 -> 123.456 -> 123 -> 1.23

// let num2 = 12.34;
// console.log( num2.toFixed(1) );
// "12.3";

// let sum = 0.1 + 0.2;
// alert( +sum.toFixed(2) ); // 0.3


// 5.
// console.log(1e500); // Infinity


// 6
// console.log( 0.1 + 0.2 == 0.3 ); // false 0.30000000000000004


// 7 Перевірки: isFinite та isNaN
// console.log(isFinite('15'));
// console.log(isFinite('string'));
// console.log(isFinite('jdhfkjd123'));
// console.log(isFinite(5e400));

// console.log(isNaN('fghdfgh123'));
// console.log(isNaN(5e400));

// console.log(Object.is(5, 5));
// console.log(Object.is(5, 7));


// // parseInt() & parseFloat()
// console.log( parseInt('100px') ); // 100
// console.log( parseFloat('12.5em') ); // 12.5


// Math.max(a, b, c...) / Math.min(a, b, c...)
// Повертає найбільше/найменше число з довільної кількості аргументів.
// console.log( Math.max(3, 5, -10, 0, 1) ); // 5
// console.log( Math.min(1, 2) ); // 1
// console.log( Math.pow(2, 10) ); // 2 у ступені 10 = 1024


//
// function sum() {
//     let summa = 0;
//     let a = +prompt('Enter num 1', 0);
//     let b = +prompt('Enter num 2', 0);
//     summa = a + b;
//     alert(summa);
//     return summa;
// };
// sum();


// console.log(6.35.toFixed(1));
// console.log(Math.round(6.35 * 10) / 10);


// function readNumber() {
//     let a;
//     do {
//        a = prompt('Enter NUMBER', 0);
//     } while (!isFinite(a));
//     if (a === '' || a === null) {
//         return null;
//     }
//     alert(a);
// }
// readNumber();

function randomNumber(min, max) {
    let a = min + Math.random() * (max - min);
    a = +a.toFixed(4);
    console.log(a);
    return a;
}
randomNumber(1, 7);