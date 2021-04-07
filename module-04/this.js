// Created with context and called in context

// const person = {
//   name: 'John',
//   sayHello() {
//     console.log(this.name + ' says hello');
//   },
// };

// person.sayHello();

// Created without context and called without context
// function logThis() {
//   console.log(this);
// }

// logThis();

// Created object parameter after initializing, called function with context
// const person = {
//   name: 'John',
// };

// function talkJohn() {
//   console.log(this.name + ' says hello');
// };

// person.sayHello = talkJohn;

// person.sayHello();

// Created with context, called without context
// const person = {
//   name: 'John',
//   sayHello() {
//     console.log(this.name + ' says hello');
//   },
// };

// const johnTalk = person.sayHello;

// johnTalk();

// Callbacks
// const person = {
//   name: 'John',
//   sayHello() {
//     console.log(this.name + ' says hello');
//   },
// };

// function johnTalk(callback) {
//   callback();
// }

// johnTalk(person.sayHello);

// Call, Apply, Bind
// const person = {
//   name: 'John',
// };

// function sayHello(a, b) {
//   console.log(`a:`, a);
//   console.log(`b:`, b);
//   console.log('this:', this);
//   console.log(this.name + ' says hello');
// }

// sayHello.call(person, 1, 2);
// sayHello.apply(person, [1, 2]);

// const talkJohn = sayHello.bind(person);

// talkJohn(1, 2);

// ES5 callback
// const btn = document.querySelector('#btn');
// const subs = document.querySelector('#subscribers');

// const subscribers = {
//   count: 0,
//   subscribe() {
//     this.count += 1;
//     subs.innerHTML = `Subscribers: ${this.count}`;
//     // alert(`Subscribers: ${this.count}`);
//   },
// };

// const onClick = subscribers.subscribe.bind(subscribers);

// btn.addEventListener('click', onClick);

// Arrow functions and this
// const btn = document.querySelector('#btn');
// const subs = document.querySelector('#subscribers');

// const subscribers = {
//   count: 0,
//   subscribe: () => {
//     console.log(this);
//     this.count += 1;
//     subs.innerHTML = `Subscribers: ${this.count}`;
//   },
// };

// const onClick = subscribers.subscribe.bind(subscribers);

// btn.addEventListener('click', onClick);

// use strict examples
// function a() {
//   ('use strict');
//   console.log(this);
// }

// function b() {
//   console.log(this);
// }

// a();
// b();
