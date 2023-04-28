// Q1. make a string out of an array
{
	const fruits = ['apple', 'banana', 'orange'];
	const result = fruits.join('|'); //구분자 있어도 되고 없어도 됨
	console.log(result);
}

// Q2. make an array out of a string
{
	const fruits = '🍎, 🥝, 🍌, 🍒';
	const result = fruits.split(',', 2);
	console.log(result);
}

// Q3. make this array look like this: {5, 4, 3, 2, 1}
{
	const array = [1, 2, 3, 4, 5];
	const result = array.reverse(); // 배열 자체를 거꾸로 바꿔줌
	console.log(result);
	console.log(array);
}

// Q4. make 💡new💡 array without the first two elements
{
	const array = [1, 2, 3, 4, 5];
	//const result = array.splice(0, 2); // 배열 자체에서 데이터를 삭제
	const result = array.slice(2, 5);
	console.log(result);
	console.log(array); // array는 그대로 {1,2,3,4,5}
}

class Student {
	constructor(name, age, enrolled, score) {
		this.name = name;
		this.age = age;
		this.enrolled = enrolled;
		this.score = score;
	}
}
const students = [
	new Student('A', 29, true, 45),
	new Student('B', 28, false, 80),
	new Student('C', 30, true, 90),
	new Student('D', 40, false, 66),
	new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
	const result = students.find((student) => student.score === 90); // 콜백함수. 하나하나 대조 후 false와 true return.
	console.log(result);
}

// Q6. make an array of enrolled students
{
	const result = students.filter((student) => student.enrolled === true); // 콜백함수 전달. true인 데이터만 모아서 배열로 전달.
	console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
	const result = students.map((student) => student.score);
	// 콜백함수를 호출하면서 가공되어진 return값들로 대체, 인자는 최대한 이해하기 쉽게 쓰기
	console.log(result);
}

// Q8 check if there is a student with the score lower than 50
{
	console.clear();
	const result = students.some((student) => student.score < 50); // 배열의 요소 중에 return값이 true가 있는지 없는지 확인
	console.log(result);

	const result2 = !students.every((student) => student.score >= 50); // 모든 배열의 조건이 만족되어야 할 때
	console.log(result2);
}

console.clear();
// Q9. compute students' average score
{
	const result = students.reduce((prev, curr) => prev + curr.score, 0);
	// reduce는 우리가 원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적할 때 사용
	// reduceRight은 배열의 제일 뒤에서부터 시작
	console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
	const result = students
		.map((student) => student.score)
		.filter(score => score >= 50)
		.join();
	console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80. 88, 90'
{
	const result = students
		.map((student) => student.score)
		.sort((a, b) => a - b)
		.join();
	console.log(result);
}