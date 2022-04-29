sum(1,2);
sum(1,2,3,4,5,6);
sum(1,2,3,4,5,6,1,2,3,4,5,61,2,3,4,5,61,2,3,4,5,61,2,3,4,5,6);

function sum() {
    // console.log(arguments.length);

    let sum = 0;
    for(var i=0; i<arguments.length; i++) {
        sum += arguments[i];
    }
    console.log('sum : '+sum);
}
//arguments는 함수호출하면 만들어지는 객체
//자바스크립트에서는 배열이 따로없고 객체를 배열로 사용함

// instance.속성  속성값 읽기
// instance.메소드()  메소드호출