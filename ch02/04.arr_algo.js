var arr = [2,6,10,11,22,1,7];
var sum = 0;
for(var i=0; i<arr.length; i++) {
    sum += arr[i];
}
console.log('sum : '+ sum);
console.log(`sum : ${sum}`);
//일반적으로 했던방식



var sum2 = 0;
arr.forEach(function (item) {
    sum2 += item;
});
console.log(`sum2 : ${sum2}`);
//함수형프로그래밍 방식 
// 자바스크립트는 cb이 편하기때문에 함수형으로 처리많이함.

var evenSum = 0;
arr.forEach(function (item) {
    if(item % 2 === 0) {
        evenSum += item;
    }
});
console.log(evenSum);


arr.forEach(function (item, index) {
        if(index <2) {
            console.log(`item:${item}`);
    }
});
