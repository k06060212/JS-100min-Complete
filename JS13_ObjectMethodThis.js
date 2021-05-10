// Superman

// name : clark
// age : 33

const superman = {
    name : 'clark',
    age : 33,

    fly:function(){
        console.log('날아갑니다.');
    }
}

superman.fly(); //날아갑니다.

// method : 객체 프로퍼티로 할당 된 함수

// 단축 작성
const superman = {
    name : 'clark',
    age : 33,

    fly(){  // function 생략 가능
        console.log('날아갑니다.');
    }
}

// 예제
const user = {
    name : 'Mike',
    sayHello : function(){
        // console.log(`Hello, I'm ${user.name}`);
        console.log(`Hello, I'm ${this.name}`);
        //${user.name}은 문제가 발생 할 수 있다. ${this.name} 으로 작성
    }
}

user.sayHello();    // Hello, I'm Mike

// 예제 2
// let boy = {
//     name : 'Mike',
// }

// let girl= {
//     name : 'Jane',
// }

let boy = {
    name : 'Mike',
    sayHello,
}

let girl= {
    name : 'Jane',
    sayHello,
}

sayHello : function(){
    console.log(`Hello, I'm ${this.name}`);
}

boy.sayHello();     // I'm Mike
girl.sayHello();    // I'm Jane

// 화살표 함수로 선언했다면.? 동작이 달라지게 된다.
sayHello : () => {
    console.log(`Hello, I'm ${this.name}`);
}

boy.sayHello();     // I'm ???
girl.sayHello();    // I'm ???

// 화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않음
// 화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져 옴

let boy = {
    name : 'Mike',
    sayHello : () => {
        console.log(this);   // 전역객체
    }
}

// 전역객체 참고
// 브라우저 환경 : window
// Node js : global

boy.sayHello();     // this != boy

// method
let boy = {
    name : 'Mike',
    showName : function () {
        console.log(boy.name);
    }
};

boy.showName();

let man = boy;
man.name = "Tom"

console.log(boy.name);
man.showName();

boy = null;

man.showName(); //?

let boy = {
    name : 'Mike',
    showName : function () {
        console.log(this.name);
    }
};

man.showName(); // Mike

// 화살표 함수 이용
let boy = {
    name : 'Mike',
    sayThis : function () {
        console.log(this);
    }
};

boy.sayThis();  // 정상 동작

let boy = {
    name : 'Mike',
    sayThis : () => {
        console.log(this);
    }
};

boy.sayThis();  // 에러 발생  
// 화살표 함수로 method를 작성하면 this boy가 아닌 window 전역객체를 가리키게 된다.

// 그래서 객체의 method를 작성할땐 화살표 함수로 작성하지 않는게 좋다.
// this를 이용해 접근 한다면 화살표 함수 x




