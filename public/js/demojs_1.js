// console.log("Hello world")
var x = 10;
x = "xin chao";
console.log(x);
console.log(x.length);
var y = "10";
y = parseInt(y);//chuyển chuỗi thành số
console.log(y);
var y = "d10";
y = parseInt(y);//chuyển chuỗi thành số
console.log(y);//NaN là not a number
if(isNaN(y)){//kiểm tra xem y có pải 1 số hay k
    console.log("Khong co gia tri so");
}else {
    console.log(y+10);
}
for(var i = 0; i<10; i++){
    console.log("i = " +i);
}
var ary = [];//khai báo mảng
ary[0] = 1999;
ary[1] = "hello";
ary[2] = [1,3,4,"xin chao", [1,2,1]];
console.log(ary[2][3]);//xin chao
console.log(ary[2][4][1]);//2
ary[2][4][3] = 55;
console.log(ary[2][4][3]);//55
ary[2][4][4] = ["a", "b", 5];

var s = [1,2,3,5,8,13,21];
for(var i = 0; i<s.length; i++){
    console.log(s[i]);
}
var f = ham_gi_do(1, "s");
console.log(f);
function ham_gi_do(a, b) {
    console.log("đây là bên trong hàm gì đó"+(a+b));
    return "xin chao";
}

s.map(function (e) {
    //duyệt từng thằng 1
    console.log("s: "+e);
})

var arr = [];
for (var i=0;i<10;i++){
    arr.push(i*2+1);
}
arr.push(99);
arr.splice(1, 2);//xóa tu vi trí 1 va xoa 2 phan tu
arr.map(function (e) {
    //duyệt từng thằng 1
    console.log(e);
});
