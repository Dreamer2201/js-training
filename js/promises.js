

try {
  // виконання коду
} catch (err) {
  // якщо трапилась помилка,
  // передати виконання в цей блок
} finally {
  // завжди виконається після try/catch
}


// викидання помилки
let json = '{ "age": 30 }'; // неповні дані
try {
  let user = JSON.parse(json); // <-- немає помилки
  if (!user.name) {
    throw new SyntaxError("Неповні дані: відсутнє поле name"); // (*)
  }
  console.log( user.name );
} catch (err) {
  console.log( "JSON Error: " + err.message ); // JSON Error: Неповні дані: відсутнє поле name
}


// 
let promiseResolve = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("завершено!"), 1000);
});

// метод resolve запустить першу функцію передану в .then
promiseResolve.then(
  result => console.log(result), // виведе "завершено!" через 1 секунду
  error => console.log(error) // не запуститься
);


// 
let promiseReject = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Ооооой!")), 1000);
});

// метод reject запустить другу функцію передану в .then
promiseReject.then(
  result => console.log(result), // не запуститься
  error => console.log(error) // виведе "Error: Ооооой!" через 1 секунду
);

// 
let promise = new Promise(function(resolve, reject) {
  resolve(1);
  setTimeout(() => resolve(2), 1000);
});
promise.then(result => console.log(result));
// promise.then(alert);


// 
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
delay(2000).then(() => console.log('resoleved in 2000ms'));


// ланцюжок промісів
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
}).then(function(result) { // (**)
  console.log(result); // 1
  return result * 2;
}).then(function(result) { // (***)
  console.log(result); // 2
  return result * 2;
}).then(function(result) {
  console.log(result); // 4
  return result * 2;
});


// 
fetch('/article/promise-chaining/user.json')
  // .then нижче запускається, коли віддалений сервер відповідає
  .then(function(response) {
    // response.text() повертає новий проміс, який вирішується з повним текстом відповіді,
    // коли він завантажується
    return response.text();
  })
  .then(function(text) {
    // ...а ось вміст віддаленого файлу
    console.log(text); // {"name": "iliakan", "isAdmin": true}
  });


  fetch('https://no-such-server.blabla') // помилка
  .then(response => response.json())
  .catch(err => console.log(err)) // TypeError: failed to fetch (текст може відрізнятися)


// async await
async function my() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Done sucsessfully'), 1500)
  })
  let result = await promise;
  console.log(result);
}
my();


// 
async function loadJson(url) {
  let response = await fetch(url);
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(reject => console.log(reject)); // Error: 404


  // 
function addTo(x) {
  return x === 0 ? x = 0 : x + addTo(x - 1);
}
console.log(addTo(4));


// 
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}
function f() {
  // покаже 10 через 1 секунду
  wait().then(result => alert(result));
}
f();

