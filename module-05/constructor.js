// function Hero(name) {
//   this.name = name;
// }

// const swordsman = new Hero('Swordsman');
// const mage = new Hero('Mage');

// console.log(swordsman);
// console.log(mage);

// const obj = {
//   name: 'John',
//   say() {
//     this.surname = 'Doe';
//     console.log(this);
//   },
// };

// obj.say();

// function Hotel(name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;

//   this.guestCount = 0;

//   // Вітаю, John Doe
//   this.welcome = function (guest) {
//     console.log(`Вітаю, ${guest}`);
//     this.guestCount += 1;

//     // Зараз гостей: 10
//     console.log(`Зараз гостей: ${this.guestCount}`);
//   };

//   this.leave = function () {
//     console.log('Відвідувач пішов');
//     this.guestCount -= 1;
//     console.log(`Зараз гостей: ${this.guestCount}`);
//   };
// }

// const hotel1 = new Hotel('Hotel 1', 5, 500);

// hotel1.welcome('John Doe');
// hotel1.welcome('Mango');
// hotel1.welcome('Lux');

// hotel1.leave();

// console.log('---------------------');

// const hotel2 = new Hotel('Hotel 2', 3, 250);

// hotel2.welcome('John Doe');
// hotel2.welcome('Mango');
// hotel2.welcome('Lux');

// hotel2.leave();
// hotel2.leave();
// hotel2.leave();

// console.log(`hotel1`, hotel1);
// console.log(`hotel2`, hotel2);

// function Manager(name, initialSales) {
//   this.name = name;
//   this.sales = initialSales;
// }

// Manager.prototype.sell = function () {
//   this.sales += 1;
// };

// const john = new Manager('John', 3);

// john.sell();
// john.sell();
// john.sell();

// console.log(john);

// const din = new Manager('Din', 10);

// din.sell();
// din.sell();
// din.sell();

// console.log(din);

// Task - 1

/*
const obj = {
  age: 25,
  func() {
    this.age;
  },
};

obj.func();

function User(firstName, lastName, initialAge) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = initialAge;
}

User.prototype.getInfo = function () {
  console.log(`${this.firstName} ${this.lastName} is ${this.age} years old`);
};

const john = new User('John', 'Doe', 25);
const micheal = new User('Micheal', 'Ramires', 23);

john.age = 26;

john.getInfo(); // John Doe is 25 years old
micheal.getInfo(); // John Doe is 25 years old

console.log(john);
*/

/*
// Constructor example

function ConstructorFunc(initialItems) {
  const obj = {};

  obj.items = initialItems;

  return obj;
}

const testStorage = ConstructorFunc(['Item 1', 'Item 2']);
*/

function Storage(initialItems) {
  Storage.count++;
  this.items = initialItems;
}

Storage.prototype.getItems = function () {
  console.log(this.items);
};

Storage.prototype.addItem = function (item) {
  this.items.push(item);
};

Storage.prototype.removeItem = function (item) {
  this.items.splice(this.items.indexOf(item), 1);
};

Storage.count = 0;

// ---------------------

const storageObject = new Storage(['flowers', 'candies']);
const storageObject1 = new Storage(['candies']);

storageObject.addItem('apples');
storageObject.getItems();

storageObject1.removeItem('candies');
storageObject1.getItems();

// Static methods

console.log(Storage.count);

// --------------------
console.log('Counter');

/**
 * Counter
 * Зберігає поточне значення лічильника: value
 * При створенні екземпляру можна вказати початкове значення лічильника
 * Має метод для збільшення значення лічильника на 1
 */

function Counter(initialValue) {
  this.value = initialValue;
}

Counter.prototype.increment = function () {
  this.value += 1;
};

const counter1 = new Counter(5);
counter1.increment();
console.log(counter1.value); // 6

const counter2 = new Counter(99);
counter2.increment();
counter2.increment();
console.log(counter2.value); // 101

counter1.increment();
console.log(counter1.value); // 7
