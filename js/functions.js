
// 1
// function showMessage(from, text) {
//   from = '*' + from + '*'; // прикрашаємо "from"
//   console.log( from + ': ' + text );
// }
// let from = "Анна";
// showMessage(from, "Привіт"); // *Анна*: Привіт
// // значення "from" те саме, функція змінила локальну копію
// console.log( from ); // Анна


// // 2 типове значення
// function showMessage(from, text = "текст не задано") {
//   console.log( from + ": " + text );
// }
// showMessage("Анна"); // Анна: текст не задано


// // 3 оператор null-злиття ??
// function showCount(count) {
//   // якщо count має значення undefined чи null, показати "невідомо"
//   console.log(count ?? "невідомо");
// }
// showCount(0); // 0
// showCount(null); // невідомо
// showCount(); // невідомо


// 4 директива return
// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         false;
//     }
// };
// let age = prompt('What is your age?', '');
// if (checkAge(age)) {
//     console.log('Allow')
// } else {
//     console.log('not allow');
// }


// 5 Named functions
// "get…" – повертають значення,
// "calc…" – щось обчислюють,
// "create…" – щось створюють,
// "check…" – щось перевіряють і повертають булеве значення.


// 6 Change function with ? or ||
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Батьки дозволили?');
//   }
// }

// function checkAge(age) {
//    return (age > 18) ? true : confirm('Батьки дозволили?');
// }

// function checkAge(age) {
//    return (age > 18) || confirm('Батьки дозволили?');
// }

// function min(a, b) {
//     return a < b ? a : b;
// }
// console.log(min(6, 9));


// 7 Функціональним Виразом (Function Expression)
// let sayHi = function() {
//   console.log( "Привіт" );
// };

// 8 Callback function
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// function showOk() {
//   alert( "Ви погодились." );
// }
// function showCancel() {
//   alert( "Ви скасували виконання." );
// }
// // використання: функції showOk, showCancel передаються як аргументи для ask
// ask("Ви згодні?", showOk, showCancel);



// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// ask(
//   "Ви згодні?",
//   function() { alert("Ви погодились."); }, // фнонімнка функція, не має власного ім'я
//   function() { alert("Ви скасували виконання."); } // фнонімнка функція, не має власного ім'я
// );


// 9 Стрілочна функція
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Ви згодні?",
//   () => alert("Ви погодились."),
//   () => alert("Ви скасували виконання.")
// );


