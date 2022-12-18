
let student = {
  name: 'Oksana',
  age: 36,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
};

let json = JSON.stringify(student);
console.log(typeof json); // ми отримали рядок!
console.log(json);

// 1
let meetup = {
  title: "Конференція",
  room: {
    number: 23,
    participants: ["Oksana", "Denys"]
  }
};
console.log(JSON.stringify(meetup));

// 2 parse()
// масив у вигляді рядка
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
console.log( numbers[1] ); // 1

let userData = '{ "name": "Oksana", "age": 35, "isAdmin": false, "friends": ["Denys","Dima","Lyuda"] }';
let user = JSON.parse(userData);
console.log( user.friends[1] ); // "Dima"


// десереалізуємо об'єкт з датою
let str = '{"title":"Конференція","date":"2017-11-30T12:00:00.000Z"}';
let meetup1 = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
console.log( meetup1.date);
console.log( meetup1.date.getDate());

// 
let userOksana = {
  name: "Oksana Poliakova",
  age: 35
};
let userOksanaJson = JSON.stringify(userOksana);
let userOksanaParse = JSON.parse(userOksanaJson);
let user2 = JSON.parse(JSON.stringify(userOksana));
console.log(userOksanaJson);
console.log(typeof (userOksanaJson));
console.log(userOksanaParse);
console.log(typeof (userOksanaParse));
console.log(user2);
console.log(typeof (user2));




