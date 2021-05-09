/**반복문 Loop 
 * 
 *  1부터 10까지 로그를 찍어주세요.
 *  console.log(1);
 *  console.log(2);
 * .
 * .
 * .
 * .
 *  console.log(10);
 * 
 *  만약 100까지 1000까지면 효율적이지 못한 작업이다.
 * 
 * 
 * 
 * 
*/

/* 1. for문 */

// 1부터 10가지 로그
for(let i = 0; i < 10; i++){
    console.log(i);
}

/**  2. while문 
 * 
 *  let i = 0;
 * 
 *  while (i < 10){
 *      // 코드
 *      i++;
 * }
*/

let i = 0;

while(i<10){
    console.log(i);
    i++;
}


/** 3. do.. while문
 * 
 * let i = 0;
 * 
 * do{
 *  // 코드
 *  i++;
 * }while(i<10)
 * 
 */

/** 4. breate, continue 
 * 
 *  break : 멈추고 빠져나옴
 * 
 *  continue : 멈추고 다음 반복으로 진행
*/

//break 

while(true){
    let answer = confirm('계속 할까요?');
    if(!answer){
        break;
    }
}

// continue
// 짝수만
for(let i = 0; i < 10; i++){
    if(i%2){
        continue;
    }
    console.log(i);
}

// 홀수만
for(let i = 0; i < 10; i++){
    if(i%2){
        console.log(i);
    }
}
