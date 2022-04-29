function proc(cb, max) {
    for(var i=0; i<max; i++) {
        cb(i);
    }
}

proc(function(item) {
    console.log('noName : ' + item);
}, 5);

//익명함수: 1회용


function print(item) {
    console.log('noName : ' + item);
}
proc(print,3);