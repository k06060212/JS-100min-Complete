/** 함수(function)
 * 
 *  console, alert, confirm 같은 것들을 사용해왔다..
 * 
 *  함수는 이렇게 작성한다.
 * 
 *      함수    함수명  매개변수(없을수도 있고 1개 또는 여러개)
 *  function sayHello(name){
 *      console.log(`Hello, ${name}`);    
 *  }
 * 
 *  위의 함수는 아래와 같이 호출할 수 있다.
 *  say('Mike');
 * 
 */

// 1. 매개변수가 없는 함수 작성

function showError(){
    alert('에러가 발생했습니다. 다시 시도해주세요.');
}

showError();

// 유지보수가 쉽다. 기획자가 뒤의 문자를 바꿔달라면?
function showError(){
    alert('에러가 발생했습니다. 새로고침 해주세요');
}

showError();

// 2. 매개변수가 있는 함수 작성

let msg = `Hello`;
console.log('함수 호출 전');
console.log(msg);

function sayHello(name){
    // const msg = `Hello, ${name}`;
    // login하지 않아서 사용자의 이름을 모를때?
    // let msg = `Hello`;
    // if(name){
    //     msg =`Hello, ${name}`;
    // }
    if(name){
        msg +=', ' +  name;
        msg +=`,  +  {name}`;
    }
    console.log('함수 내부');
    console.log(msg);
}

sayHello('Mike');
sayHello('kim');
sayHello('miki');

sayHello();

console.log('함수 호출 후');
console.log(msg);   // 에러.. 함수 안에서 선언된 지역변수이기 때문에 함수 밖에서 사용할 수 없다. test를 위해 함수 위에 작성함..


// 3. 전역 변수와 지역 변수

// 예1
let msg = "welcome";
console.log(msg);

function sayHello(name){
    let msg = "Hello";
    console.log(msg + ' ' + name);
}

sayHello('Mike');
console.log(msg);

// 예2
let name = "Mike";

function sayHello(name){
    console.log(name);
}

sayHello();
sayHello('Jane');

// 매개변수로 받은 값은 복사된 후 함수의 지역변수가 된다.
// 전체 서비스에서 공통으로 사용할 변수를 제외하고는 지역변수로 사용하는 습관을 들여야 한다.
// 전역 변수가 많아지면 관리가 힘들어진다. 함수에 특과된 지역변수를 사용하자.

// OR 를 활용 function
function sayHello(name){
    let newName = name || 'friend';
    let msg = `Hello, ${newName}`;
    console.log(msg)
}

sayHello();         
sayHello('Jane');

// default value
function sayHello(name = 'friend'){ // name이 없을때 할당됨
    let msg = `Hello, ${name}`;
    console.log(msg)
}

sayHello();         
sayHello('Jane');

// return 으로 값 반환

function add(num1, num2){
    return num1 + num2;
}

const result = add(2,3);
console.log(result);

/////////////////
function showError(){
    alert('에러가 발생했습니다.');
    return;
    alert('이 코드는 절대 실행되지 않습니다.');
}
const result = showError();
console.log(result);    //return 문이 없는 함수도 undifined를 반환

/**  함수(function) 정리
 * 
 * 한번에 한작업에 집중
 * 
 * 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍
 * showError // 에러를 보여줌
 * getName // 이름을 얻어옴
 * createUserData // 유저데이터 생성
 * checkLogin // 로그인 여부 체크
 * 
 * 
*/