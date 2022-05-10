var p1 = new Promise(function(resolve) {
    resolve(1);
});

var p2 = p1.then(function(result) {
    return result;
});

p2.then(function(result) {
    console.log('result : ' + result);
});