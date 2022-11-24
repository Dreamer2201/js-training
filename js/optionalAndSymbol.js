// Синтаксис опціонального ланцюжка ?. має три форми:

// obj?.prop – повертає obj.prop, якщо існує obj, і undefined в іншому випадку.
// obj?.[prop] – повертає obj[prop], якщо існує obj, і undefined в іншому випадку.
// obj.method?.() – викликає obj.method(), якщо існує obj.method, в іншому випадку повертає undefined.

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false