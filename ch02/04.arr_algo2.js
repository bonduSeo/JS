// var arr = [2,6,10,11,22,1,7];

var arr = {
    '0' : 2,
    '1' : 6,
    '2' : 10,
    '3' : 11,
    '4' : 22,
    '5' : 1,
    '6' : 7,
    'length' : 7,
    'forEach' : function (cb) {
        for(var i = 0; i < this.length; i++) {
            cb(this[i], i);
        }
    },
};
//객체인데 유사배열
// console.log(arr);
// console.log(arr.forEach);

var sum2 = 0;

arr.forEach(function (item, idx) {
    if(idx < 2) {
    sum2 += item;
    }
});
console.log(`sum2 : ${sum2}`);




// forEach 는 대충이런식으로 구현?

//forEach, filter, map도 구현해보라고함