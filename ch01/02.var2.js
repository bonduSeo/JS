var n1 = 10;
var s1 = '20';
console.log(n1+s1);

s1 = parseInt(s1);
console.log(n1+s1);

// int a=10;
// a="dd";
//에러뜸

var s2 = '20';
s2 = Number(s2);
console.log(n1+s2);

console.log('parseInt : ' + parseInt("12a34"));
//12 만 형변환
console.log('Number : ' + Number("12a34"));
//not a number 출력. 이거쓰는것이 확실한편
