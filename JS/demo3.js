/*var arr= [];
arr[0]= 0;
arr[1]= "hello";
arr[3]= true;

arr.push(9);
arr.push("world")

for(var i=0; i<arr.length; i++){         //duyệt mảng
    //arr[i];
    console.log(arr[i]);
}

*/


// // jackpot
// // Sinh ra 6 số ngẫu nhiên từ vòng lặp 1-> 55
// var rd = [];

// while (rd.length < 6) {
//     // sinh ra 1 so ngau nhien
//     var so = parseInt(Math.random() * 54 + 1);
//     // ktra xem da co trong mang rd hay chua

//     /*var f = false;
//     for( var i=0; i<rd.length;i++){
//         if(so == rd[i]) {
//             f=true;
//         }
//     }
//     // neu chua thi them vao mang
//     if(f== false){
//         rd.push(so);
//     }
//     */

//    if(!rd.includes(so)){            //cách gọn hơn cmt trên
//     rd.push(so);
//    }
// }
// console.log(rd);



var min=10;
var sec=0;
var t=setInterval(function(){
    console.log(min +":" +sec)
    sec--;
    if(sec<0){
        sec=59;
        min--;
    }
    if(min <0){
        clearInterval(t);
    }
},10);
    
