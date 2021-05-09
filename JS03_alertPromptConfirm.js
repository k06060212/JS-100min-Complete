// 대화 상자
// alert	알려줌	.. 메시지를 보여주고 확인 버튼을 누르면 닫힌다.
// prompt 	입력 받음	.. 메시지를 보여주고 
// 							어떤 값을 입력 받을 수 있는 field를 제공하고 취소를 누르면 null, 두번째 인수를 넣어주면 default값을 제공할 수 있다.
// confirm 	확인 받음	.. 사용자에게 확인을 받기 위한 용도로 확인 버튼은 true, 취소 버튼은 false

// 단점
//1. 스크립트 일시 정지
//2. 스타일링이 불가능하다. 

// 빠르고 간단하게 적용가능하다는 장점에서 사용한다.

const name = prompt("이름을 입력하세요.");

alert("환영합니다, " + name + "님");
alert(`환영합니다,  ${name}님. 환영합니다.`);

//prompt에 입력하지 않고 취소를 하면 null값이 전달.

// prompt는 default 값도 입력 할 수 있다.
const name = prompt("예약일을 입력해주세요.", "2021-05-");

// confirm
const isAdult = confirm("당신은 성인 입니까?");

console.log(isAdult);	// 확인을 누르면 true, 취소를 누르면 false

// 결제 하시겠습니가?
// 정말 삭제 하시겠습니까?
