
let now = new Date();
console.log(now); // показує поточну дату/час

// new Date(year, month, date, hours, minutes, seconds, ms)
let myDate = new Date(2022, 11, 9, 14, 45)
console.log(myDate);
console.log(myDate.getFullYear());

function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

console.log( 'Час diffSubtract: ' + bench(diffSubtract) + 'мс' );
console.log( 'Час diffGetTime: ' + bench(diffGetTime) + 'мс' );


let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

console.log(date);

//  Створити об’єкт Date на дату: 20 лютого 2012, 3:12 ранку. Часовий пояс є місцевим.
let date3 = new Date(2012, 1, 20, 3, 12);
console.log(date3);

// 
function getWeekDay(date) {
    let daysArr = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ'];
    return daysArr[date.getDay()];
}
let date4 = new Date(2012, 0, 3);  // 3 січня 2012
console.log(getWeekDay(date4));        // повинно виводити "ВТ"

// 
function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    console.log(dateCopy.setDate(date.getDate() - days));
    return dateCopy.getDate();
}

let date5 = new Date(2015, 0, 2);
console.log( getDateAgo(date5, 1) ); // 1, (1 січня 2015)
console.log( getDateAgo(date5, 2) ); // 31, (31 грудня 2014)
console.log(getDateAgo(date5, 365)); // 2, (2 січня 2014)

// 
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month +1, 0);
    return date.getDate();
}
console.log(getLastDayOfMonth(2022, 11));


// 
function getSecondsToday() {
    let dayNow = new Date();
    let today = new Date(dayNow.getFullYear(), dayNow.getMonth(), dayNow.getDate());
    console.log(today);
    console.log(dayNow - today);
    console.log((dayNow - today) / 1000);
    return Math.round((dayNow - today) / 1000);
}
console.log(getSecondsToday());


// 
function getSecondsToTomorrow() {
    let dayNow = new Date();
    let tomorrow = new Date(dayNow.getFullYear(), dayNow.getMonth(), dayNow.getDate() +1);
    console.log(tomorrow);
    console.log(tomorrow - dayNow);
    console.log((tomorrow - dayNow) / 1000);
    return Math.round((tomorrow - dayNow) / 1000);
};
console.log(getSecondsToTomorrow());