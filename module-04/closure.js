// function makeCounter(initialValue) {
//   return function () {
//     console.log(initialValue++);
//   };
// }

// const counterA = makeCounter(1);
// counterA();
// counterA();

// console.log('-----------');

// const counterB = makeCounter(0);
// counterB();
// counterB();

// 12.04 ---------------------------

function makeCounter(initialValue) {
  let value = initialValue;

  return function () {
    value += 1;
    console.log(value);
  };
}
