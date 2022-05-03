function sum(n1=1, n2=2, n3=3, n4=4) {
    console.log('sum: '+(n1+n2+n3+n4));
}
//argument가 안들어왔다면 default 값주는법
sum();
sum(10);
sum(10,20);
sum(10,20,30);
sum(10,20,30,40);
sum(10,20,30,40,50);

function multi(n1=null, n2=1, n3=2) {
    console.log(n1*n2*n3);
}
multi();
//null 은 사칙연산과 만나면 0으로 취급

multi(1);
multi(5);