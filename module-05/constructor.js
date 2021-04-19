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

function Manager(name, initialSales) {
  this.name = name;
  this.sales = initialSales;
}

Manager.prototype.sell = function () {
  this.sales += 1;
};

const john = new Manager('John', 3);

john.sell();
john.sell();
john.sell();

console.log(john);

const din = new Manager('Din', 10);

din.sell();
din.sell();
din.sell();

console.log(din);
