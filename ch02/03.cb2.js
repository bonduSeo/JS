function calc(cb, n1,n2) {
    return cb(n1,n2);
}

function fnSum(n1,n2) {
    return n1 + n2;
}

function fnMulti(n1,n2) {
    return n1 * n2;
}

const result = calc(fnSum, 10,20);
console.log('result : ' + result);

const result2 = calc(fnMulti, 10,20);
console.log('result2 : ' + result2);


//cb는 call back의줄임말
//함수형프로그램의 작성방식

console.log(fnSum);