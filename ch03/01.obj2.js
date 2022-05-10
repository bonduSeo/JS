let h1 = {
    'name': '홍길동',
    'age': 20,
    'showMe': function() {
        console.log(`My name is ${this.name}, age is ${this.age}.`);
    }
};

let h2 = {
    'name': '둘리',
    'age': 220,
    'showMe': function() {
        console.log(`My name is ${this.name}, age is ${this.age}.`);
    }
};

h1.showMe();

h2.showMe();

