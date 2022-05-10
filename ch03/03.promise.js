var num = 9;

var p1 = new Promise(function (resolve, reject) {
    if(num >= 10) {
        resolve(1);
    } else {
        reject(2);
    }
});

p1.then(function (result) {
    console.log('then : ' + result);
}).catch(function (result) {
    console.log('catch : ' + result);
});

//보통 잘됬을때는 THEN 호출하도록하고 잘안됬을때는 catch호출하도록하는데 상관없다.

var num = 11;

var p1 = new Promise(function (resolve, reject) {
    if(num >= 10) {
        resolve(1);
    } else {
        reject(2);
    }
});

p1.then(function(result) {
    console.log('then : ' + result);
}).catch(function(result) {
    console.log('catch : ' + result);
});

//P1 은 프로미스객체..