// 1.
// function sum(a, b) {
//   return a + b;
// }
// console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.


// 2.
// console.log( "\u00A9" ); // ©
// console.log('Ім\'я моє — Oksana!');
// console.log( "\u{1F60D}" );


// // 3. Доступ до символів
// let str = `Привіт`;
// // перший символ
// console.log( str[0] ); // П
// // останній символ
// console.log(str[str.length - 1]); // т

// for (let char of str) {
//   console.log(char);
// };

// // toLowerCase() та toUpperCase()
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str[5].toUpperCase());


// пошук рядка
// str.indexOf(substr, pos)
// let str = 'Віджет з ідентифікатором';
// console.log( str.indexOf('Віджет') ); // 0, тому що 'Віджет' було знайдено на початку
// console.log( str.indexOf('віджет') ); // -1, збігів не знайдено, пошук чутливий до регістру
// console.log( str.indexOf("ід") );


// let str = 'Хитрий, як лисиця, сильний, як Як';
// let target = 'як'; // давайте знайдемо це
// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   console.log( `Знайдено тут: ${foundPos}` );
//   pos = foundPos + 1; // продовжуємо з наступної позиції
// };


// let string = 'Poliakova Oksana';
// let targetStr = 'a';
// let position = 0;
// while (position < string.length) {
//   let foundPosition = string.indexOf(targetStr, position);
//   if (foundPosition === -1) break;
//   console.log('Found position:', foundPosition);
//   position = foundPosition + 1;
// }


// Методи includes, startsWith, endsWith
// let string = 'Poliakova Oksana';
// console.log(string.includes('ol'));
// console.log(string.startsWith('po'));
// console.log(string.startsWith('Po'));
// console.log(string.endsWith('na'));

// slice
// let str = " Poliakova ";
// console.log( str.slice(0, 5) ); // 'strin', підрядок від 0 до 5 (5 не включно)
// console.log(str.slice(0, 1)); // 's', від 0 до 1, але 1 не включно, тому лише символ на позиції 0
// console.log( str.slice(-4, -1) ); // 'gif'

// // trim() & repeat(n)
// console.log(str.trim());
// console.log(str.repeat(3));


// function ucFirst(str) {
//   let newStr = str.trim();
//   if (!newStr) return str;
//   let firstLetter = newStr[0].toUpperCase();
//   newStr = firstLetter + newStr.slice(1);
//   return newStr;
// };
// console.log(ucFirst(' dima'));


// function checkSpam(str) {
//   let newStr = str.trim().toLowerCase();
//   if (newStr.includes('viagra') || newStr.includes('xxx')) {
//     return true;
//   } return false;
// }
// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam('innocent rabbit'));

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let newStr = str.slice(0, maxlength-1) + '...';
    return newStr;
  } return str;
}
console.log(truncate("Що я хотів би розповісти на цю тему:", 20));
console.log(truncate("Всім привіт!", 20));


function extractCurrencyValue(str) {
  return +str.slice(1);
}
console.log(extractCurrencyValue('$120'));