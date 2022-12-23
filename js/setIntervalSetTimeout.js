
// Ми можемо вирішити виконати функцію не зараз, а через певний час пізніше. Це називається “планування виклику”.
// Для цього існує два методи:
// setTimeout дозволяє нам запускати функцію один раз через певний інтервал часу.
// setInterval дозволяє нам запускати функцію багаторазово, починаючи через певний інтервал часу, а потім постійно повторюючи у цьому інтервалі.
// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)


function sayHi() {
  console.log('Привіт');
}
setTimeout(sayHi, 1000);

// неправильно!
// setTimeout(sayHi(), 1000); передаємо тільки посилання на функцію

let timerId = setTimeout(sayHi, 1000);
clearTimeout(timerId);


// повторити з інтервалом 2 секунди
let timerId1 = setInterval(() => console.log('тік'), 2000);

// зупинити через 5 секунд
setTimeout(() => { clearInterval(timerId1); console.log('стоп'); }, 5000);

// 
console.log("First");
setTimeout(() => console.log('Second'), 1000);
console.log('Third');


function printNumbers(from, to) {
    let current = from;
    let timerId = setInterval(function () {
        console.log(current);
        if (current === to) {
            clearInterval(timerId);
        } current++;
    }, 1000);
}
// console.log(printNumbers(2,5));

