//alert("Canh bao cam ng duoi 18");                 //1.THẺ CẢNH BÁO 

// var f=confirm("Bạn chắc chắn chưa");             //2.THẺ XÁC NHẬN YES/NO
// console.log(f);

// var t=prompt("Vui lòng nhập số tuổi của bạn: "); //3.NHẬP TEXT XÁC NHẬN (LÀ CHUỖI)
// console.log(t);
// t= parseInt(t);                                  //chuyển đổi chuỗi t sang dạng số
// console.log(t);

/*
18 ==18
18a == 18
18a2 ==18
a18 == NAN: not a number == isNaN()
*/
// =================================================================================
/*
Yêu cầu người dùng nhập tên và tuổi của mình nếu trên từ 18 tuổi trở lên thì
 thông báo chào mừng ngược lại thì thông báo yêu cầu rời khỏi nơi này
*/

/*
var n= prompt("Hãy nhập tên");
var t=prompt("Hãy nhập tuổi: ");
if(t>=18){
    // alert("Chao mung ban "+ n +" da tham gia") 
    alert(`Chao mung ban ${n} da tham gia`)         //CÁCH 2: DỄ SỬ DỤNG HƠN

}
else{
    alert("Yeu cau roi khoi day");
}
*/

/*
setTimeout(function(){                              //HÀM SETTIMEUOT: DELAY CÔNG VIỆC BÊN TRONG HÀM
    var tuoi=prompt("Hãy nhập tuổi: ");
    tuoi=parseInt(tuoi);
    while(isNaN(tuoi)){
        tuoi=prompt("Hãy nhập tuổi: ");
        tuoi=parseInt(tuoi);
        // console.log("vui long nhap lai");
    }
    alert("Ban du tuoi tham gia")
},5000);

*/
// =================================================================================

// var r= parseInt(Math.random()*100);            // 0->1 : 0.31343 -> 31.343 -> 31

// =================================================================================
/*
VIẾT CT CON SỐ MAY MẮN SINH RA NGẪU NHIÊN 1 SỐ TỪ 0->99
CHO NGƯỜI CHƠI 5 LƯỢT NHẬP SỐ
KIỂM TRA XEM CÓ TRÚNG GIẢI THƯỞNG HAY KHÔNG
TRÒ CHƠI KẾT THÚC KHÍ HẾT 5 LƯỢT HOẶC NGƯỜI CHƠI 
ĐOÁN TRÚNG SỐ MAY MẮN
*/

var r = parseInt(Math.random() * 100);

var slc = 5;
while (slc > 0) {
    slc--;
    var so = prompt("Vui lòng nhập số tư 1 den 99: ")
    so = parseInt(so);
    if (so < 0) {
        so = NaN;
    } else if (so > 99) {
        so = NaN;
    }
    while (isNaN(so) || so < 0 || so > 99) {
        var so = prompt("Vui lòng nhập số tư 1 den 99: ")
        so = parseInt(so);
        if(so < 0){
            so = NaN;
        }else if(so > 99) {
            so = NaN;
        }
    }
    if (so == r) {
        alert(`Bạn đã nhập số ${so} va trung giai thuong`)
        slc = -1;
    }
    else {
        alert("Chuc ban may man lan sau")
    }
}

if (slc == 0) {
    alert("Ban da het luot choi");
}