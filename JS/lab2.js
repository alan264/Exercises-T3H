/*
Khi điền số nào đó hợp lệ, sẽ hiển thị số đó ngoài giao diện, 15s ra 1 số
Sau đó, sẽ sinh ngẫu nhiên 6 số hợp lệ xuống bên giao diện
Cuối cùng thông báo kết quả: Nếu có giải thưởng thì chữ màu xanh
không trúng hiện chữ màu đỏ
*/


var a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0, a6 = 0;

while (a1 == 0 || a1 > 55 || a1 < 1 || isNaN(a1)) {
    var a1 = prompt("Nhap so thu nhat tu 1 den 55: ");
    a1 = parseInt(a1);
}
var so1 = document.getElementById("nb1");
so1.innerText = a1;


while (a2 == 0 || a2 > 55 || a2 < 1 || isNaN(a2) || a2 == a1) {
    var a2 = prompt("Nhap so thu hai tu 1 den 55: ");
    a2 = parseInt(a2);
}
var so2 = document.getElementById("nb2");
so2.innerText = a2;


while (a3 == 0 || a3 > 55 || a3 < 1 || isNaN(a3) || a3 == a2 || a3 == a1) {
    var a3 = prompt("Nhap so thu ba tu 1 den 55: ");
    a3 = parseInt(a3);
}
var so3 = document.getElementById("nb3");
so3.innerText = a3;


while (a4 == 0 || a4 > 55 || a4 < 1 || isNaN(a4) || a4 == a3 || a4 == a2 || a4 == a1) {
    var a4 = prompt("Nhap so thu tư tu 1 den 55: ");
    a4 = parseInt(a4);
}
var so4 = document.getElementById("nb4");
so4.innerText = a4;


while (a5 == 0 || a5 > 55 || a5 < 1 || isNaN(a5) || a4 == a5 || a5 == a3 || a5 == a2 || a5 == a1) {
    var a5 = prompt("Nhap so thu nam tu 1 den 55: ");
    a5 = parseInt(a5);
}
var so5 = document.getElementById("nb5");
so5.innerText = a5;

while (a6 == 0 || a6 > 55 || a6 < 1 || isNaN(a6) || a6 == a5 || a6 == a3 || a6 == a2 || a6 == a1 || a6 == a4) {
    var a6 = prompt("Nhap so thu sau tu 1 den 55: ");
    a6 = parseInt(a6);
}
var so6 = document.getElementById("nb6");
so6.innerText = a6;

// ==========================================================
var x1 = 0, x2 = 0, x3 = 0, x4 = 0, x5 = 0, x6 = 0;
setTimeout(function () {
    x1 = parseInt(Math.random() * 54 + 1);
    var r1 = document.getElementById("rd1");
    r1.innerText = x1;
}, 15000)
setTimeout(function () {
    while (x2 == x1 || x2 == 0) {
        x2 = parseInt(Math.random() * 54 + 1);
        var r2 = document.getElementById("rd2");
        r2.innerText = x2;
    }
}, 15000)
setTimeout(function () {
    while (x3 == x2 || x3 == x1 || x3 == 0) {
        x3 = parseInt(Math.random() * 54 + 1);
        var r3 = document.getElementById("rd3");
        r3.innerText = x3;
    }
}, 15000)
setTimeout(function () {
    while (x4 == x3 || x4 == x2 || x4 == x1 || x4 == 0) {
        x4 = parseInt(Math.random() * 54 + 1);
        var r4 = document.getElementById("rd4");
        r4.innerText = x4;
    }
}, 15000)
setTimeout(function () {
    while (x5 == x4 || x5 == x3 || x5 == x2 || x5 == x1 || x5 == 0) {
        x5 = parseInt(Math.random() * 54 + 1);
        var r5 = document.getElementById("rd5");
        r5.innerText = x5;
    }
}, 15000)
setTimeout(function () {
    while (x6 == x5 || x6 == x4 || x6 == x3 || x6 == x2 || x6 == x1 || x6 == 0) {
        x6 = parseInt(Math.random() * 54 + 1);
        var r6 = document.getElementById("rd6");
        r6.innerText = x6;
    }
}, 15000)

var gt = 0;
if (a1 == x1 || a1 == x2 || a1 == x3 || a1 == x4 || a1 == x5 || a1 == x6) {
    gt = gt++;
}
if (a2 == x1 || a2 == x2 || a2 == x3 || a2 == x4 || a2 == x5 || a2 == x6) {
    gt = gt++;
}
if (a3 == x1 || a3 == x2 || a3 == x3 || a3 == x4 || a3 == x5 || a3 == x6) {
    gt = gt++;
}
if (a4 == x1 || a4 == x2 || a4 == x3 || a4 == x4 || a4 == x5 || a4 == x6) {
    gt = gt++;
}
if (a5 == x1 || a5 == x2 || a5 == x3 || a5 == x4 || a5 == x5 || a5 == x6) {
    gt = gt++;
}
if (a6 == x1 || a6 == x2 || a6 == x3 || a6 == x4 || a6 == x5 || a6 == x6) {
    gt = gt++;
}
setTimeout(function () {
    if (gt == 6) {
        // alert("Bạn đã trúng giải Jackpot");
        var tb1 = document.getElementById("kq");
        tb1.style.color = "green";
    } else if (gt == 5) {
        // alert("Bạn đã trúng giải 5 số: 82.500.000");
        var tb1 = document.getElementById("kq");
        tb1.style.color = "green";
    } else if (gt == 4) {
        // alert("Bạn đã trúng giải 4 số: 1.700.000");
        var tb1 = document.getElementById("kq");
        tb1.style.color = "green";
    } else if (gt == 3) {
        // alert("Bạn đã trúng giải 3 số: 200.000");
        var tb1 = document.getElementById("kq");
        tb1.style.color = "green";
    } else {
        // alert("Chuc ban may man lan sau");
        var tb2 = document.getElementById("kq");
        tb2.style.color = "red";
    }
}, 20000)













// var so1 = document.getElementById("nb1");
// so1.innerText = a1;
// var so2 = document.getElementById("nb2");
// so2.innerText = a2;
// var so3 = document.getElementById("nb3");
// so3.innerText = a3;
// var so4 = document.getElementById("nb4");
// so4.innerText = a4;
// var so5 = document.getElementById("nb5");
// so5.innerText = a5;
// var so6 = document.getElementById("nb6");
// so6.innerText = a6;