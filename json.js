// 📌 JSON(JavaScript Object Notation)
// simplest data interchange format : 데이터를 주고받는 가장 간단한 형식
// lightweight text-based structure : 텍스트를 기반으로 한 가벼운 구조
// easy to read : 읽기 쉬움
// key-value pairs : 키와 값이 한쌍인 형식
// used for serialization and transmission of data between the network the network connection : 데이터를 서버와 주고받을 때 직렬화, 데이터 전송 시 사용
// 💡 independent programming language and platform : 언어와 플랫폼에 상관없이 사용 가능

// 📝 공부방법
// object를 어떻게 serialize(직렬화)해서 JSON으로 변환해야 하는지
// 직렬화된 JSON을 어떻게 deserialize해서 object로 변환하는지 중점적으로 공부

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
	name: 'tori',
	color: 'white',
	size: null,
	birthDate: new Date(),
	jump: () => {
		console.log(`${this.name} can jump!`);
	}, //함수는 포함되지 않음
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//obj.jump();
//rabbit을 JSON으로 변환할 때 함수는 포함되지 않음. JSON을 다시 obj로 변환해도 함수 포함 안됨.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());