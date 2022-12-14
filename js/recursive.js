
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
console.log(pow(2, 3));


// 
let company = {
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// Функція для підрахунку суми зарплат
function sumSalaries(department) {
  if (Array.isArray(department)) { // випадок (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // сума масиву
  } else { // випадок (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // рекурсивно викликається для підвідділів, суммуючи результат
    }
    return sum;
  }
}
console.log(sumSalaries(company)); // 7700


//
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumTo(5));


function sumTo1(n) {
    if (n == 1) return 1;
    return  n + sumTo1(n - 1);
};
console.log(sumTo1(5));


function sumTo3(n) {
  return n * (n + 1) / 2;
}
console.log( sumTo3(5) );

