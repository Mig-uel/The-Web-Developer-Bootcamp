class Pet {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  eat() {
    return `${this.name} is eating...`
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    super(name, age)
    this.livesLeft = livesLeft
  }

  meow() {
    return 'MEOWWW!!!'
  }
}

class Dog extends Pet {
  bark() {
    return 'WOOOF!!!'
  }

  // eat() {
  //   return `${this.name} scarfs his food...`
  // }
  // class will use this method if it's defined, else, will use the method from parent class {inherited class}
}
