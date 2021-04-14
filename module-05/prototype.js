// const arr = [1, 2, 3];

// console.log(arr);

// const obj = {
//   name: 'John',
// };

// console.log(obj);
// console.log(obj.hasOwnProperty('name'));

// const protoObj = {
//   say() {
//     console.log('Hero talks');
//   },
// };

// const hero1 = Object.create(protoObj);
// const hero2 = Object.create(protoObj);

// console.log(hero1);
// console.log(hero2);
// hero1.say();
// hero2.say();

// hero1.attackCloseRange = function () {
//   console.log('Attacking with sword');
// };

// hero2.attackLongRange = function () {
//   console.log('Attacking with fireball');
// };

// console.log(hero1);
// console.log(hero2);

// hero1.attackCloseRange();
// hero1.say();

const protoObj = {
  say() {
    console.log(`${this.name} talks`);
  },
};

const swordsman = Object.create(protoObj);
swordsman.name = 'Swordsman';

const mage = Object.create(protoObj);
mage.name = 'Mage';

console.log(`swordsman`, swordsman);
swordsman.say();

console.log(`mage`, mage);
mage.say();

console.log(`prototypes match:`, swordsman.__proto__ === mage.__proto__);
