/**  논리 연산자
 * 
 *      || (OR)
 *      && (AND)
 *      !  (NOT)
 * 
 * OR  : 여러개 중 하나라도 true 면 true
 *      즉, 모든값이 false 일때만 false를 반환
 * 
 * AND : 모든값이 true 면 true
 *      즉, 하나라도 false면 false를 반환
 * 
 * NOT : true면 false
 *       false면 true
 * 
*/

/*예 
 
스티브 잡스는 한국인이거나(OR) 남자이다 // true

 스티브 잡스는 한국인이고(AND) 남자다     // false

 */


// 평가에 많이 사용된다.
// 예 : 운전면허가 있고 시력이 좋은 여군

// a && b
// a와 b 둘 다 true 이면 true

// !a 
// a가 false이면 true



// 예제
const name = "MIKE";
const age = 30;

// OR
// 이름이 TOM이거나 성인이면 통과
if(name === 'TOM' || age > 19){
    console.log('통과');
}

// AND
// 이름이 Mike 이고, 성인이면 통과
if(name === 'Mike' && age > 19){
    console.log('통과');
}else{
    console.log('돌아가');
}

// NOT
// 나이를 입력받아 성인 아니면 돌아가라고..

const age = prompt('나이가..?');
const isAge = age > 19;

if(!isAge){
    console.log('돌아가..!');
}else{
    console.log('성인이군');
}

// 우선순위
// 남자이고, 이름이 Mike 이거나 성인이면 통과

const gender = 'F';
const name = 'Jane';
const isAdult = true;


// AND가 OR보다 우선순위가 높아서 먼저 평가된다.

// if(gender === 'M' && NAME === 'Mike' || isAdult){
// if((gender === 'M' && NAME === 'Mike') || isAdult){  //위의 코드는 이 코드와 같다
if(gender === 'M' && ( NAME === 'Mike' || isAdult )){   // 의도대로 만들면 이와 같다.
    console.log('통과');
}else{
    console.log('돌아가.')
}



