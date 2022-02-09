'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
// 설정을 하는 느낌.
// 아래는 나이는 음수일 수가 없는데 사용자가 음수를 넣으면 경고를 하는 예시
// 값을 넣거나 꺼내 쓰거나 할 때 내부적으로 get, set이 실행되는거임.
// 그걸 내가 직접 설정하는 느낌.
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;   // _age말고 age로 하면 무한루프? stack에 문제 생김.
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);     // set age
console.log(user1.age);                         // get age


// 3. Fields (public private)
// Too soon!
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);   // undefined


// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);    // 이렇게 하면 undefined가 나옴.
console.log(Article.publisher);     // static 변수는 Article이란 class 자체의 변수라서 이렇게 해야됨
Article.printPublisher();           // 마찬가지.


// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {
    constructor(width, height, name) {
        super(width, height);       // 상속할 때 constructor는 부모한테 받아오는 건 super로 해주고
        this.name = name;           // 새로 생긴 건 this. 저렇게 받아온다.
    }
    draw() {
        super.draw();
        console.log(`My name is ${this.name}`)
    }
}
class Triangle extends Shape {      // block 안에 바꾸고 싶은 내용만 다시 써주면 됨.
    draw() {
        super.draw();
        console.log('tt');
    }
    getArea() {
        return this.width * this.height / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'asdfasdf');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);    // true
console.log(triangle instanceof Rectangle);     // false
console.log(triangle instanceof Triangle);      // true
console.log(triangle instanceof Shape);         // true
console.log(triangle instanceof Object);        // true
// 모든 class, object들은 Object라는 것을 상속한 것임.
