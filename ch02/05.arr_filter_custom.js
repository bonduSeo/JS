var arr = {
    '0' : 2,
    '1' : 6,
    '2' : 10,
    '3' : 11,
    '4' : 22,
    '5' : 1,
    '6' : 7,
    'lenth' : 7,
    'forEach' : function(cb) {
        for(var i=0; i<this.length; i++) {
            cb(this[i],i);
        }
    },
    'filter' : function(cb) {
        var tempArr = [];
        for(var i=0; i<this.length; i++) {
            var val = this[i];
            if(cb(val, i)) {
                tempArr.push(val);
            }
            
        }
        return tempArr;
    }
}

var resultArr = arr.filter(function(item, idx) {
    console.log(`${idx}: ${item}`);
    if(item <= 8) {
        return true;
    }
});

console.log(resultArr);


//call back 함수에 대한이해, 비동기에 대한 이해,콜백지옥, 비동기를 해결하기위한 promise,async/await 학습해놓을것

//sbsteacher gitgub 2021javascript 참고