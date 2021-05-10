// Superman
// name : Clark
// age  : 30 인 슈퍼맨이 있다.. 객체로 만들면!?

// 객체 : 중괄호로 작성하고 키와 값으로 작성된 프로퍼티가 들어간다.
// 각 프로퍼티는 쉼표로 구분하고 
// 마지막 쉼표는 없어도 되지만 있는게 수정, 삭제, 이동시 용이하다.

const Superman = {
    name : 'Clark',
    age : 33,
}

// Object - 접근, 추가, 삭제
// 접근
Superman.name   //'Clark'
Superman['age'] // 33

// 추가
Superman.gender = 'male';
Superman['hairColor'] = 'black';

// 삭제
delete Superman.hairColor;


// Object - 단축 프로퍼티
const name = 'Clark';
const age = 33;

const Superman = {
    name : name,
    age : age,
    gender : 'male',
}
// 이 코드는 아래와 같이 쓸 수 있다.->
const Superman = {
    name,   // name:name
    age,    // age:age 
    gender : 'male',
}

// Object - 프로퍼티 존재 여부 확인 (in)
const Superman = {
    name:'Clark',
    age:33,
}

Superman.birthDay;  // undefined
'birthDay' in Superman; // false
'age' in Superman;  // true

// for ... in 반복문
for(let key in Superman){
    console.log(key)
    console.log(superman[key])
}

// 정리 예제들...
// 1. 객체

const superman = {
    name :'clark',
    age : 30,
}

console.log(superman.name);
console.log(superman['age']);

// 객체 자체를 찍어봄
console.log(superman);

// 추가
superman.hairColor = 'black';
superman['hobby'] = 'football';
console.log(superman);

// 삭제
delete superman.age;
console.log(superman);


// 2. 객체
function makeObject(name, age){
    return {
        name : name,
        age : age,
        hobby : 'football'
    }
}

const Mike = makeObject('Mike', 30);
console.log(Mike);

// 축약
function makeObject(name, age){
    return {
        name,
        age,
        hobby : 'football'
    }
}

const Mike = makeObject('Mike', 30);
console.log(Mike);

// 3. in을 이용한 프로퍼티 존재 여부
console.log('age' in Mike);         // true
console.log('birthday' in Mike);    // false

// 객체 in
function isAdult(user){
    if(user.age < 20){
        return false;
    }else{
        return true;
    }
}

const Mike = {
    name : 'Mike',
    age : 30
}

const Jane = {
    name: 'Jane',
}

console.log(isAdult(Mike));
console.log(isAdult(Jane));     // true?

function isAdult(user){
    if(!('age' in user) || user.age < 20){
        return false;
    }else{
        return true;
    }
}

console.log(isAdult(Jane)); // false

// 4. 객체 for ... in

const Mike = {
    name : 'Mike',
    age : 30,
};

for(x in Mike){
    console.log(Mike[x]);   // Mike['age']
}
