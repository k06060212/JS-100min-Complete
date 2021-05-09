//#2
const name = "Mike";	// 문자형 String
const age = 30;

const name1 = "Mike"
const name2 = 'Mike'
const name3 = `Mike`

const message = "I'm a boy.";
const message2 = 'I\'m a boy.';

const message3 = `My name is ${name}`;
console.log(message3);

// ``로 작성하지 않으면 변수가 노출됨
const message3 = "My name is ${name}";
console.log(message3);

const message4 = `나는 ${30+1}살 입니다.`;
console.log(message4); 		

//#3
const age = 30;			//숫자형 Number
const PI = 3.14;

console.log(1 + 2);		// 더하기
console.log(10 - 3); 	// 빼기
console.log(3 * 2);		// * 곱하기
console.log(6 / 3); 	// / 나누기
console.log(6 % 4);		// % 나머지

// # 3-2
// 숫자형과 문자형의 더하기
// 더하면 숫자도 문자형으로 변함.
const name = "Mike";

const a = "나는 ";
const b = " 입니다.";

console.log(a + name + b);

const age = 30;		//Number
console.log(a + age + "살" + b);	

// #4
const x = 1/0;	//??
console.log(x);		// Infinity 무한대를 얻음

// # 5	
const name = "Mike";
const y = name/2;

console.log(y)		// NaN = Not a number - 숫자와 관련 작업을 할 때 NaN이 아닌지 항상 염두하고 작업해야 함

// # 6
//Boolean
const a = true;		// 참
const b = false;	// 거짓

const name = "Mike";
const age = 30;

console.log(name == 'Mike');	// true
console.log(age > 40);			// false

// # 7
// null(존재하지 않는 값) 과 undefined(값이 할당되지 않음)

let age;
console.log(age);	// undefined

let user = null;
// 객체형
// 심볼형

// # 8
//typeof 연산자
// 다른 개발자가 작성한 변수의 타입을 알아야 하거나 api통신등으로 받아온 데이터를 type에 따라 다른 방식으로 처리해야 할 때 사용한다.
// typeof null; //object (객체형)

const name = "Mike";

console.log(typeof 3);
console.log(typeof name);
console.log(typeof true);
console.log(typeof "xxx");
console.log(typeof null);
console.log(typeof undefined);
