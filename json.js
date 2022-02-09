// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);    // primitive type도 json으로 변환 가능
console.log(json);

json = JSON.stringify(['apple', 'banana']); // 배열을 json으로 변환
console.log(json);

const rabbit = {                            // object를 json으로 변환
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol('id'),   // javaScript에만 있는 symbol 같은 건 json에 포함 안됨
    jump: () => {      // functino은 json에 포함 안됨.
        console.log(`can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);   // 원하는 값만 받아올 수 있음
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
})
console.log(json);
// return 값을 세밀하게 제어하기 위해 callback 함수를 쓸 수 있다.



// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();     // rabbit을 stringify할 때는 function이 포함이 안되므로 얘는 error난다.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);
console.log(obj.birthDate.getDate());

const person = {
    name: 'abc',
    height: 120,
    weight: 12,
    like: true,
};
console.clear();
console.log(person);
json = JSON.stringify(person, (key, value) => {
    // console.log(`key: ${key}, value: ${value}`);
    return key === 'height' ? 140 : value;
});
console.log(json);
const obj1 = JSON.parse(json, (key, value) => {
    return key === 'name' || key === 'weight' ? null : value;
});
console.log(obj1);

