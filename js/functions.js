
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

// 
function makeWorker() {
  let name = "Петро";
  return function () {
    name = "Oksana"
    console.log(name);
  };
}
let name = "Іван";
// створити функцію
let work = makeWorker();

// викликати її
console.log(makeWorker()); // Що вона покаже?
work();


// 
function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}
let counter = makeCounter();
let counter2 = makeCounter();
console.log( counter() ); // 0
console.log(counter()); // 1
console.log(counter());
console.log( counter2() ); // ?
console.log( counter2() ); // ?


// 
function Counter4() {
  let count = 0;
  this.up = function () {
    return count++;
  };
  this.down = function () {
    return --count;
  };
}
let counter4 = new Counter4();
console.log(counter4.up());
console.log(counter4.up());
console.log(counter4.up());

console.log(counter4.down());
console.log(counter4.down());

// sum(a)(b) = a+b.

function sum(a) {
  return function (b) {
    return a + b;
  }
}
console.log(sum(1)(2));

// !!!
let x = 1;
function func() {
    // локальна змінна `x` відома рушію з початку функції,
  // але вона "неініціалізова" (непридатна) до let ("мертва зона")
  // звідси помилка
  console.log(x); // ?
  // let x = 2;
}
func();


// !!!
let users = [
  { name: "Іван", age: 20, surname: "Іванов" },
  { name: "Петро", age: 18, surname: "Петров" },
  { name: "Енн", age: 19, surname: "Гетевей" }
];

function byField(value) {
  return function (a, b) {
    return a[value] > b[value] ? 1 : -1
  };
  // return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}
console.log(users.sort(byField("age")));


// 
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
      let j = i;
      let shooter = function() { // функція shooter
        console.log( j ); // має показати свій номер
      };
    shooters.push(shooter);
    i++;
  }
  return shooters;
}
let army = makeArmy();
army[0]();
army[1]();
army[2]();




// 
function sayHi() {
  console.log("Привіт");
  // давайте порахувати, скільки викликів функції ми зробили
  sayHi.counter++;
}
sayHi.counter = 0; // початкове значення
sayHi(); // Привіт
sayHi(); // Привіт
console.log( `Викликана ${sayHi.counter} рази` ); // Викликана 2 рази


// 
let sayHi1 = function func(who) {
  if (who) {
    console.log(`Привіт, ${who}`);
  } else {
    func("Гість"); // використовує func для повторного виклику
  }
};
sayHi1("Oksana"); // Привіт, Oksana
sayHi1(); // Привіт, Гість


// 
function greet(clientName) {
  return `${clientName}, ласкаво просимо в «${this.service}».`;
}

const steam = {
  service: "Steam",
};
const steamGreeter = greet.bind(steam);
console.log(steamGreeter("Манго"));
steamGreeter("Манго"); // "Манго, ласкаво просимо в «Steam»."

const gmail = {
  service: "Gmail",
};
const gmailGreeter = greet.bind(gmail);
gmailGreeter("Полі"); // "Полі, ласкаво просимо в «Gmail»."


function sayHi(text) {
  return `${this.customerName}, ${text}`;
}
const customerOne = {
  customerName: 'Oksana'
}
const customerTwo = {
  customerName: 'Dima'
}
const customerThrie = {
  customerName: 'Denys'
}
console.log(sayHi.call(customerOne, 'wellcome!'));
console.log(sayHi.call(customerTwo, 'good day!'));
console.log(sayHi.apply(customerThrie, ['good morning!']));


// bind
function askPassword(ok, fail) {
  let password = prompt("Пароль?", '');
  if (password == "rockstar") ok();
  else fail();
}
let user = {
  name: 'Іван',
  loginOk() {
    console.log(`${this.name} увійшов`);
  },
  loginFail() {
    console.log(`${this.name} виконав невдалу спробу входу`);
  },
};
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


// 
function askPassword(ok, fail) {
  let password = prompt("Пароль?", '');
  if (password == "rockstar") ok();
  else fail();
}
let userRockstar = {
  name: 'Іван',
  login(result) {
    console.log( this.name + (result ? ' увійшов' : ' виконав невдалу спробу входу') );
  }
};

askPassword(userRockstar.login.bind(userRockstar, true), userRockstar.login.bind(userRockstar, false)); // ?


