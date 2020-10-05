/**
 * Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя),
 *  surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
 *  Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
 *  Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 * Вот так должен работать наш класс:
 */

//Task 1
class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary = () => {
    return this.rate * this.days;
  };
}

const worker = new Worker("Иван", "Иванов", 10, 31);
console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

/***************************************************************************************************************************/

/**
 *  Реализуйте класс Student (Студент), который будет наследовать от класса User.
 *  Этот класс должен иметь следующие свойства: name (имя, наследуется от User),
 *  surname (фамилия, наследуется от User), year (год поступления в вуз).
 *  Класс должен иметь метод getFullName() (наследуется от User), с помощью
 *  которого можно вывести одновременно имя и фамилию студента. Также класс
 *  должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
 *  Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.
 *  Текущий год получите самостоятельно.
 * Вот так должен работать наш класс:
 */

//Task 2
class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName = () => {
    return `${this.name} ${this.surname}`;
  };
}
class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  getCourse = () => {
    return new Date().getFullYear() - this.year;
  };
}

var student = new Student("Иван", "Иванов", 2015);
console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student.year); //выведет 2017
console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2020

/***************************************************************************************************************************/
/**
 * implement 2 tasks but use constructor functions
 */

//1
function fWorker(name, surname, rate, days) {
  this.name = name;
  this.surname = surname;
  this.rate = rate;
  this.days = days;
  this.getSalary = () => {
    return this.rate * this.days;
  };
}

const workers = new fWorker("Ivan", "Wan", 14, 30);
console.log(workers.name);
console.log(workers.surname);
console.log(workers.rate);
console.log(workers.days);
console.log(workers.getSalary());

//2
function fUser(name, surname) {
  this.name = name;
  this.surname = surname;
  this.getFullName = () => {
    return `${this.name} ${this.surname}`;
  };
}

function fStudent(name, surname, year) {
  this.year = year;
  this.getCourse = function () {
    return new Date().getFullYear() - this.year;
  };
  fUser.call(this, name, surname);
}
fStudent.prototype = Object.create(fUser.prototype);

const fstudent = new fStudent("Name", "Surname", 2016);
//console.log(fstudent);
console.log(fstudent.getCourse());
console.log(fstudent.getFullName());

/****************************************************************************************************************************/

/**
 * С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по
 *  следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3
 * (найденное в table), а bed.glasses – значение 1 (найденное в head).
 */
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

/**
 * Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses?
 * При необходимости составьте цепочки поиска и сравните их.
 */
// Answer: head.glasses
/****************************************************************************************************************************/

/**
 * У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
 *Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
 */
let hamster = {
  eat(food) {
    if (!this.hasOwnProperty("stomach")) {
      this.stomach = [];
    }
    this.stomach.push(food);
  },
};
let speedy = {
  __proto__: hamster,
};
let lazy = {
  __proto__: hamster,
};

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// alert(speedy.stomach); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// alert(lazy.stomach); // apple
