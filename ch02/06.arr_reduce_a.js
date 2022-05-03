var arr = [2, 6, 10, 11, 22, 1, 7];
var sum = arr.reduce(function(pVal, cVal, idx, innerArr) {
    return pVal + cVal;
},0 );
console.log('sum : ' + sum);

var maxVal = arr.reduce(function(pVal, cVal) {
    return pVal > cVal ? pVal : cVal;
});
console.log('maxVal : ' + maxVal);

var minVal = arr.reduce(function(pVal, cVal, idx) {            
    return pVal < cVal ? pVal : cVal;
});
console.log('minVal : ' + minVal);