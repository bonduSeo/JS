var arr = [2,6,10,11,22,1,7];
var resultArr = arr.filter(function(item, idx) {
    console.log(`${idx}: ${item}`);
    if(item <= 8) {
        return true;
    }
});

console.log(resultArr);


var newArr = [];
newArr[0] = 10;
newArr[1] = 12;
newArr[5] = 14;
console.log(newArr);
newArr.length = 2;
//신기하게도 length값바꿀수있음
console.log(newArr);
//이렇게도 배열값넣을수있는데 이렇게하진말고

var newArr2 = [];
newArr2.push(10);
newArr2.push(12);
console.log(newArr2);