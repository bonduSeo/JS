function fn1() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(10);
        }, 2000);
    });
}

function fn2(val) {
    return new Promise(function (resolve) {
        setTimeout(function() {
            resolve(val + val);
        }, 1000);
    });
}

var p1 = fn1();
p1.then(function(result) {
    console.log(result);
    var p2 = fn2(result);
    p2.then(function(result2) {
        console.log('result2 : ' + result2);
    });
});
//이게 프로미스지옥?????? 콜백지옥이랑 다를바없음. 이렇게쓰면안됨



p1.then(function(result) {
    return result;
})
.then(function(result) {
    return fn2(result);
})
.then(function(result) {
    console.log('result : ' +result);
});

//이렇게쓰는거라고함.
//이정도의 작동원리만 알면 비동기해결가능?

//내일할꺼: 프로미스를 어웨이, 어씽크를써서 then캐치안해도 되는방법할꺼고
//try catch,
//Ajax 통신