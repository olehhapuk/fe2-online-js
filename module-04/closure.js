function makeCounter(initialValue) {
  return function () {
    console.log(initialValue++);
  };
}

const counterA = makeCounter(1);
counterA();
counterA();

console.log('-----------');

const counterB = makeCounter(0);
counterB();
counterB();
