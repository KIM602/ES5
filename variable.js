// whole-scipt strict made syntax
// JavaScript is very flexible : 매우 유연한 언어
// flexible === dangerous : 많은 실수 가능성

// 1. Use Strict
// added ECMAScript 5
// 'use strict'; : 비상식적인 것을 쓸 수 없게함
'use strict';
console.log(age);

// 2. Variable, rw(read/write) : 읽고 쓰기 가능
// let (added in ES6) : immutable type
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}

console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top) : 선언한 위치에 상관없이 맨 위로 끌어올려줌
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constants : 값을 한번 할당하면 변경할 수 없는 변수, r(read only) : 읽기만 가능
// use const whenever possible.
// only use let if variable needs to change.

// favor immutable data type always for a few reasons:
// - security : 보안상의 이유
// - thread safety : 프로세스 안에서 다양한 쓰레드 동시에 동작, 동시에 값에 접근할 때 변경되지 않도록 함 
// - reduce human mistakes : 실수 방지
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types(데이터 타입 변경할 수 없음): primitive types, frozen objects (i.e. object.freeze())
// Mutable data types(데이터 타입 변경 가능): all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security : 보안상의 이유
// - thread safety : 프로세스 안에서 다양한 쓰레드 동시에 동작, 동시에 값에 접근할 때 변경되지 않도록 함 
// - reduce human mistakes : 실수 방지

// 4. Variable types
// primitive(값[value] 자체가 메모리에 저장됨), single item : number, string, boolean, null, undefined, symbol
// object(object를 가리키는 reference가 메모리에 저장됨), box container
// function, first-class function : function도 다른 데이터 타입처럼 변수에 할당 가능

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
// ` : EL태그와 함께 사용, 간편하게 출력할 수 있음

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2; // 숫자가 아닌 경우
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairy new, don't use it yet), 아직 크롬과 파이어폭스만 지원
const bigInt = 1234567890123456789012345678901234567890; // over (-2**53) ~ (2*53)
console.log(`value : ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
// 주어진 string에 상관없이 다른 symbol로 만들어짐
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)
// .description을 사용, 스트링으로 변환하여 출력

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
// 자바스크립트는 선언할 때 어떤 타입인지 정해주지 않고, 할당된 값에 따라 타입 변경될 수 있음
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//console.log(text.charAt(0));

