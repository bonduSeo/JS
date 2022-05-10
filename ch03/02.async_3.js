// 이렇게 해결하는 방식이 '콜백지옥에 빠졌다'

console.log('a');

setTimeout(function () {
    console.log('B');

    setTimeout(function () {
        console.log('c');
    
        setTimeout(function () {
            console.log('d');
        }, 500);
    
    }, 1000);


}, 2000);







//이러한현상을 해결하는방법은 promis 라는 라이브러리
//통신쪽은 promis를 꼭쓴다