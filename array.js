'use strict';

// Array 🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌']
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);
// 배열의 Index는 0부터 시작하기 때문에 총 배열 길이의 -1은 마지막 배열의 index를 받아올 수 있음

console.clear();
// 3. Looping
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
	console.log(fruit);
}

// c. forEach : 배열 안에 들어있는 value들 마다 내가 전달한 함수를 출력함
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍒');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍇', '🍑');
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// 뒤에서부터 추가/삭제 하는 것은 빈 공간에 추가/삭제 하기 때문에 빠른 operation을 진행할 수 있음
// 앞에서부터 추가/삭제 하는 것은 데이터들의 이동이 반복되기 때문에 속도가 느림
// 가능하면 pop과 push사용하기

// splice: remove an item by index position
fruits.push('🍓', '🍒', '🍑');
console.log(fruits);
fruits.splice(1, 1); // index 1번부터 1개 -> 바나나만 지워짐
// 지우려는 갯수를 입력하지 않으면 1부터 뒤에 모든 데이터를 다 지움
console.log(fruits);
fruits.splice(1, 1, '🍍', '🍋');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🍉'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍍'));

// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🍕'));

// lastIndexOf
console.clear();
fruits.push('🍎')
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));