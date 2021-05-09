// 형변환
// String() 	문자형으로 변환

// Number()	 	숫자형으로 변환
Number("문자")	//NaN

// Boolean() 	불린형으로 변환
				// 0, "", null, undefined, NaN -> false

// 주의사항
Number(null)		// 0
Number(undefined)	// NaN

Number(0)	// false
Number('0')	// true

Number("")	// false
Number('')	// true

// 형변환이 왜 필요한가?

// 수학과 영어 점수를 입력받아 평균을 구하는 프로그램 작성

//prompt로 받은 값은 무조건 문자형으로 받는다.
const mathScore = prompt("수학 몇점?");
const engScore = prompt("영어 몇점?");

const mathScore = Number(prompt("수학 몇점?"));
const engScore = Number(prompt("영어 몇점?"));

const mathScore = 90;
const engScore = 80;
const result = (mathScore + engScore)	/	2;	// 나누기는 자동 형변환 된다.

console.log(result);

// String형
console.log(
String(3),
String(true),
String(false),
String(null),
String(undefined)
)					// "3" "true" "false" "null" "undefined"

//Number
console.log(
Number("1234"),
Number("asdf"),
Number(true),
Number(false)
)					// 1234 NaN 1 0	(true와 false는 숫자형으로 변환하면 1과 0으로 변환된다.)


// false
// - 숫자 0
// - 빈 문자열 ""
// - null
// - undefined
// - NaN

//boolean
console.log(
	Boolean(1),
	Boolean(123),
	Boolean("javascript")
)							//	true true true

console.log(
	Boolean(0),
	Boolean(""),
	Boolean(null),
	Boolean(undefined),
	Boolean(NaN)
)							//	false false false false false



