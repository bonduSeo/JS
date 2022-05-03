var arr = {
    '0' : 2,
    '1' : 6,
    '2' : 10,
    '3' : 11,
    '4' : 22,
    '5' : 1,
    '6' : 7,
    'length' : 7,
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
    },
    'map' : function(cb) {
        var tempArr = [];
        for(var i=0; i<this.length; i++) {
            tempArr[i] = cb(this[i]);
        }
        return tempArr;
    }
}

console.log(arr);
var arr2 = arr.map(function (item) {
    return item * 2;
});

console.log(arr2);