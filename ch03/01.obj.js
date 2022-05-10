function Human(name, age) {
    this.name = name;
    this.age = age;

    this.showMe =  function() {
        console.log(`My name is ${this.name}, age is ${this.age}.`);
    }
}

let h1 = new Human('홍길동', 20);
let h2 = new Human('둘리', 120);

h1.showMe();
h2.showMe();