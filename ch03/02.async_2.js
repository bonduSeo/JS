// 비동기

console.log('a');

setTimeout(function () {
    console.log('B')
}, 2000);

setTimeout(function () {
    console.log('c')
}, 1000);

setTimeout(function () {
    console.log('d')
}, 500);





//이러한현상을 해결하는방법은 promis