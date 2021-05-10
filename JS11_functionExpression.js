// 함수 표현식
// 화살표 함수

// 함수 선언문 vs 함수 표현식

//함수 선언문 : 어디서든 호출 가능(호이스팅 hoisting)
function sayHello(){
    console.log('Hello');
}

// 함수 표현식 : 코드에 도달하면 생성
let sayHello = function(){
    console.log('Hello');
}

// 화살표 함수(arrow function)
let add = function(num1, num2){
    return num1 + num2;
}

// 1
let add = (num1, num2) => (
    num1 + num2
)

// 2
let add = (num1, num2) => num1 + num2;

// 3
let sayHello = name => `Hello, ${name}`;

// 4
let showError = () =>{
    alert('error!');
}

// 5
let add = (name1, name2) => {
    const result = num1 + num2;
    return result;
}


// 함수 표현식 예 -> 에러 발생 showError(); 호출이 선언 밑으로 가야함

showError();

let showError = function(){
    console.log('error');
}

// 함수 선언문  -> 정상 동작 어디서나 호출 가능하다.
showError();

function showError(){
    console.log('error');
}

// 화살표 함수로 변경

let showError = () => {
    console.log('error');
}

// 또 다른 예제1. 화살표 함수

const sayHello = (nanme) =>{
    const msg = `Hello, ${name}`;
    console.log(msg);
};

// 인수가 2개이고 return문이 있는 예제
const add = function(num1, num2){
    const result = num1 + num2;
    return result;
};

// 아래와 같이 화살표 함수로 변경 가능
const add = (num1, num2) =>{
    const result = num1 + num2;
    return result;
}

// 간결하게~
const add = (num1, num2) => {
    return num1 + num2;
}

const add = (num1, num2) => {
    num1 + num2;
}

const add = (num1, num2) => (num1 + num2);

