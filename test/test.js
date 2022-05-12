function fn1() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(10);
        }, 2000);
    });
}

// console.log(fn1);

let p1 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve(10);
    }, 2000);
});


console.log(p1);

p1.then(function (result) {
    console.log('then : ' + result);
    return result + 1;
}).then(function (result) {
    console.log("aa");
    console.log(p1);
    console.log(result);
});


