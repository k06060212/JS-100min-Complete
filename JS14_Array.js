// 배열(array) : 순서가 있는 리스트

// 1번에 철수
// 2번에 영희
// ...
// 30번에 영수

// ->>>              0       1         29   (index)
let students = ['철수', '영희',...,'영수'];

// 수정가능하다.
students[0] = '민정';
console.log(students)   // ['민정','영희'...]

// 배열의 특징
// 배열은 문자 뿐만 아니라, 숫자, 객체, 함수 등도 포함할 수 있음
let arr = [
    '민수',
    3,
    false,
    {
        name : 'Mike',
        age : 30,
    },
    function(){
        console.log('TEST');
    }
];

// length : 배열의 길이를 구할 수 있다.
students.length // 30

// push() : 배열 끝에 추가
let days = ['월', '화', '수'];
days.push('목')
console.log(days)   // ['월', '화', '수', '목']

// pop() : 배열 끝 요소 제거
let days = ['월', '화', '수'];
days.pop()
console.log(days)   // ['월', '화' ]

// shift, unshift 배열 앞에 제거/ 추가
// 추가
days.unshift('일');
console.log(days)   // ['일','월', '화', '수']

// 제거
days.shift();
console.log(days)   // ['월', '화', '수']

// 참고 push와 unshift는 여러 요소를 한번에 추가할 수 있다.
days.unshift('금', '토', '일');
console.log(days)   // ['금','토','일','월', '화', '수']

// 배열을 쓰는 가장 큰 이유는 반복을 위해서다
// 반복문 : for
let days =  ['월', '화', '수'];
for(let index = 0; index < days.length; index++){
    console.log(days[index])
}

// 반복문 : for ... of
let days =  ['월', '화', '수'];
for(let day of days){
    console.log(day)
}

// 살펴보기
// array
let days = ['mon', 'tue', 'wed'];

console.log(days[1]);   // "tue"

// 두 번째 요소 변경
days[1] = '화요일';

console.log(days);

// 배열의 길이
console.log(days.length);

//배열 제일 뒤에 목요일 추가
days.push('thu');

console.log(days);

// 배열 제일 앞에 일요일 추가
days.unshift("sun");

//for문을 이용한 반복
for(let index = 0; index < days.length; index++){
    console.log(days[index]);
}

// for ... of 이용
for(let day of days){
    console.log(day);
}

