class Counter {
  constructor(initialValue) {
    this._value = initialValue;
  }

  increment(value) {
    this.value += value;
  }

  decrement(value) {
    this.value -= value;
  }

  set value(value) {
    this._value = value - 1;
  }

  get value() {
    return this._value * 100;
  }
}

const counter1 = new Counter(5);

counter1.value = 3;

// console.log(counter1.value);

// counter1.setValue(10);
// console.log(counter1.value);

// console.log(counter1.getValue());
// console.log(counter1.value);

// Hero
// walk
// name, age

class Hero {
  constructor(name, age, mana) {
    this.name = name;
    this.age = age;
    this.mana = mana;
    this.level = 1;
  }

  walk() {
    console.log(`${this.name} йде`);
  }

  superAttack() {
    if (this.level < 5) {
      console.log('Недостатній рівень');
    } else {
      console.log(`${this.name} робить суператаку`);
    }
  }
}

class Swordsman extends Hero {
  constructor(name, age, mana) {
    super(name, age, mana);
  }

  swordAttack() {
    console.log(`${this.name} атакує мечем`);
    this.mana -= 10;
    this.level += 1;
  }
}

class Mage extends Hero {
  constructor(name, age, mana) {
    super(name, age, mana);
  }

  fireballAttack() {
    console.log(`${this.name} атакує файрболом`);
    this.mana -= 50;
    this.level += 1;
  }
}

const john = new Swordsman('John', 23, 100);
john.swordAttack();

const jeb = new Mage('Jeb', 55, 500);
jeb.fireballAttack();
jeb.superAttack();

jeb.fireballAttack();
jeb.fireballAttack();
jeb.fireballAttack();
jeb.fireballAttack();

jeb.superAttack();
