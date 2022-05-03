// 주석표기법 같음
/* */

// 변수할당법
var n1;
//예전버전방식, 호이스팅O
var nn2 = 20;
n1 = 30;
var nn3 = n1 + nn2;
console.log('nn3:' + nn3); 
//문자열더하기 + 임. php 빼고 거의 그렇다함, 
//console.log 자동으로 개행까지해줌
console.log('10'+10);
//문자열이 포함되어있기때문에 +는 더하기가 아니고 문자열합치기됨
console.log('10'-10);
//근데 +빼고는 php와같음. - / * %
console.log('10'*10);
console.log('10'/10);
console.log('10'%10);
console.log(10+10+'10');
console.log(10+10*'10');
console.log('10'+10+10);



let n2 = 1;
console.log(n2);

//변수
const N3 = 10;
//상수
//최근버전방식 호이스팅X
