//call back
// 주소값을변수에 담을수있으면 1급객체

function sum(n1,n2) {
    return n1 + n2+1;
}
console.log(sum());

var ddd = sum;
//자바스크립트의 함수는 1급객체라서 주소값을 복사해줄수있다.

function sum(n1,n2) {
    return "aaa";
}
//이게 되더라도 이런식으로 프로그래밍하진않는다. 메모리를 효율적으로 쓰네 ^^

console.log(ddd(10,20));

