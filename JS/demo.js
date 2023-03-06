var x=10 ; //Number. String, Boolean, Array, Object, Function
x=x+5;
x=x+5;
x=x+5;
console.log(x);
x="world"
console.log(x);

var pi=3.14159;
var y="Hello ";
var z= 'XIn chao';
var k=`Hey guys`;

var l=true; //true-false
console.log(pi);
console.log(y);

var q=10;
q=q+10;  //25
q=q+"5"; //255

var a=10;
if(a>=10){
    console.log("Ban dc quyen nhap: ")
}
else{
    console.log("Ko dc nhap")
}

// 2x+y=0;
y= 7+ 2 *4 /1 + "hello" + tq //phép gán giá trị

// 1. Không dấu, ko khoảng cách
// 2. Ko kí tự đặc biệt
// 3. Bắt đầu bằng chữ cái a2,... nhưng 1a, 2a ko đặc
// 4. Có phân biệt chữ hoa, chữ thường
// 5. gợi ý: đặt tên theo tính năng sử dụng
kq++; //kq=kq+1;
//++kq; cộng trc r mới lấy q
kq--;
kq+=3; //kq+3 , trừ nhân chia giống cộng

//===============FUNCTION===================
function tinhtong(a,b){
    var c= a+b;
    return c;
}

var h=tinhtong(10,20);

function ktsole(a){
    if(a%2==1){
        return true;
    }
    else{
        return false;
    }
}
var f =ktsole(17); //true
var g= sktsole(18);