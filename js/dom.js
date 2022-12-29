
// змінити колір фону на червоний
// document.body.style.background = "green";

// // повернути його назад після 1 секунди
// setTimeout(() => document.body.style.background = "", 1000);

console.log(location.href); // показує поточний URL-адрес
// if (confirm("Перейти на сайт Wikipedia?")) {
//   location.href = "https://wikipedia.org"; // перенаправляє браузер на іншу URL-адресу
// }

console.log( document.documentElement.parentNode ); // document
console.log( document.documentElement.parentElement ); // null
console.log(document.body.children[1]);
console.log(document.body.firstElementChild);


let table = document.body.children[1];

    for (let i = 0; i < table.rows.length; i++) {
        let row = table.rows[i];
        console.log(row);
        console.log(row.cells);
        row.cells[i].style.backgroundColor = 'red';
}
    
let elements = document.querySelectorAll('ul > li:last-child');
console.log(elements);


let chapter = document.querySelector('.chapter'); // LI
  console.log(chapter.closest('.book')); // UL
  console.log(chapter.closest('.contents')); // DIV
  console.log(chapter.closest('h1')); // null (тому що h1 -- не предок)


// //   
//   let name = prompt("Як вас звати?", "<b>Вінні Пух!</b>");
//   elem1.innerHTML = name;
//   elem2.textContent = name;


let links = document.querySelectorAll('a');

for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue; // немає атрибуту

  if (!href.includes('://')) continue; // немає протоколу

  if (href.startsWith('http://internal.com')) continue; // внутрішня

  link.style.color = 'orange';
}

// 
  ol.before('before'); // вставити рядок "before" перед <ol>
  ol.after('  after'); // вставити рядок "after" після <ol>

let firstLi = document.createElement('li');
  firstLi.innerHTML = 'prerend first li'
  ol.prepend(firstLi); // вставити liFirst на початку <ol>

let lastLi = document.createElement('li');
  lastLi.innerHTML = 'append last <li>'
  ol.append(lastLi); // вставити liLast в кінці <ol>

setTimeout(() => ol.remove(), 3000);

// Всі методи вставки автоматично видаляють вузол з попереднього місця розташування.
let first = document.getElementById('first');
let second = document.getElementById('second');
second.after(first);

let tableRemove = document.getElementById('table');
tableRemove.remove();

// 
let listUser = document.querySelector('.list-user');
while (true) {
    let strUserEnter = prompt('Enter whatever', '');
    if (!strUserEnter) {
        break;
    }
        let item = document.createElement('li');
        item.textContent = strUserEnter;
        listUser.append(item);
}


// 
let data = {
  Риба: {
    форель: {},
    лосось: {}
  },

  Дерево: {
    Величезні: {
      секвойя: {},
      дуб: {}
    },
    Квітучі: {
      яблуня: {},
      магнолія: {}
    }
  }
};

let container = document.getElementById('container');
// createTree(container, data); // створює дерево в контейнері