// 비동기

console.log('A');
setTimeout(function () {
    console.log('B')
}, 1000);
//  1000ms (1초) 후에 함수호출
//자바(동기방식)였으면 이거실행후 아래꺼 실행하지만..이건 비동기방식

//오래걸리는작업에서 문제가 발생할수있음. 통신 등..
// 오래걸리는작업의 결과값을 아래에서 바로써야할때.

console.log('C');
console.log('D');




//이러한현상을 해결하는방법은 promis