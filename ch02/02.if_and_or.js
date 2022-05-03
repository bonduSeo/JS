function m1() {
    console.log('--m1 fn called --');
    return 1;
}
function m2() {
    console.log('--m2 fn called--');
}

//JS에서는..
// true : !0, !"", true, 객체,배열
// false : 0, "", false, undefined, null

if(m1() && m2()) {
    console.log('이것은 true일까 false일까');
}
if(m1() || m2()) {
    console.log('이것은 true일까 false일까');
}

// JS와 php는 메소드(인스턴스안의 동작), 함수 둘다됨