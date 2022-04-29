function sum(n1,n2) {
    return n1 + n2;
}

var result = sum(10,20);
console.log('result:' + result);

result = sum(10,20,30);
console.log('result: '+result);
//에러안터지고 3번째꺼 생까네

result = sum(10);
console.log('result: '+result);
// 10 + undefined = NaN

function printSum(n1,n2) {
    console.log('sum : '+(n1+n2));
}

result = printSum(100,200);
console.log('result: '+result);
// 이함수에는 리턴'값'이없다 그냥 return; 