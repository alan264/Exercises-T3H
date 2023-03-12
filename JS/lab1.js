/*
Xây dựng game dãy số may mắn (Jackpot) như sau:
Mỗi người chơi khi tham gia chơi sẽ được lựa chọn 6 số trong khoảng 01 -> 55 khác nhau. 

Hệ thống sẽ chọn ngẫu nhiên bộ 6 số khác nhau trong khoảng 01 -> 55.

Sau đó hệ thống sẽ so sánh 2 bộ số ở trên với nhau. Nếu số lượng trùng nhau thì giải thưởng sẽ như sau:
Trúng 3 số: 200.000
Trúng 4 số: 1.700.000
Trúng 5 số: 82.500.000
Trúng 6 số: Jackpot ( ~ 30 tỷ)
Hãy thông báo kết quả ngay sau khi người chơi chọn đủ bộ 6 số.	*/


/*
function TaoSoNgauNhien(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

}

var a = TaoSoNgauNhien(1, 55);
var b = TaoSoNgauNhien(1, 55);
var c = TaoSoNgauNhien(1, 55);
var d = TaoSoNgauNhien(1, 55);
var e = TaoSoNgauNhien(1, 55);
var f = TaoSoNgauNhien(1, 55);
console.log(a, b, c, d, e, f);

alert("Bạn hãy nhập 6 bộ số từ 01-55");
var so1 = prompt("số thứ nhất");
so1 = parseInt(so1);
if (so1 < 1) {
    so1 = NaN;
} else if (so1 > 55) {
    so2 = NaN;
}
while (isNaN(so1)) {
    var so1 = prompt("vui long nhap lai so thu nhat");
    so1 = parseInt(so1);
    if (so1 < 1) {
        so1 = NaN;
    } else if (so1 > 55) {
        so1 = NaN;
    }
}
var so2 = prompt("số thứ hai");
so1 = parseInt(so2);
if (so2 < 1) {
    so2 = NaN;
} else if (so2 > 55) {
    so2 = NaN;
}
while (isNaN(so2)) {
    var so2 = prompt("vui long nhap lai so thu 2");
    so2 = parseInt(so2);
    if (so2 < 1) {
        so2 = NaN;
    } else if (so2 > 55) {
        so2 = NaN;
    }
}
var so3 = prompt("số thứ ba");
so3 = parseInt(so3);
if (so3 < 1) {
    so3 = NaN;
} else if (so3 > 55) {
    so3 = NaN;
}
while (isNaN(so3)) {
    var so3 = prompt("vui long nhap lai so thu 3");
    so3 = parseInt(so3);
    if (so3 < 1) {
        so3 = NaN;
    } else if (so3 > 55) {
        so3 = NaN;
    }
}
var so4 = prompt("số thứ tư");
so4 = parseInt(so4);
if (so4 < 1) {
    so4 = NaN;
} else if (so4 > 55) {
    so4 = NaN;
}
while (isNaN(so4)) {
    var so4 = prompt("vui long nhap lai so thu 4");
    so4 = parseInt(so4);
    if (so4 < 1) {
        so4 = NaN;
    } else if (so4 > 55) {
        so4 = NaN;
    }
}

var so5 = prompt("số thứ năm");
so5 = parseInt(so5);
if (so5 < 1) {
    so5 = NaN;
} else if (so5 > 55) {
    so5 = NaN;
}
while (isNaN(so5)) {
    var so5 = prompt("vui long nhap lai so thu 5");
    so5 = parseInt(so5);
    if (so5 < 1) {
        so5 = NaN;
    } else if (so5 > 55) {
        so5 = NaN;
    }
}
var so6 = prompt("số thứ 6");
so6 = parseInt(so6);
if (so6 < 1) {
    so6 = NaN;
} else if (so6 > 55) {
    so6 = NaN;
}
while (isNaN(so6)) {
    var so6 = prompt("vui long nhap lai so thu 6");
    so6 = parseInt(so6);
    if (so6 < 1) {
        so6 = NaN;
    } else if (so6 > 55) {
        so5 = NaN;
    }
}

var dem = 0;

if (so1 == a || so1 == b || so1 == c || so1 == d || so1 == e || so1 == f) {
    dem = dem + 1;
}
if (so2 == a || so2 == b || so2 == c || so2 == d || so2 == e || so2 == f) {
    dem = dem + 1;
}
if (so3 == a || so3 == b || so3 == c || so3 == d || so3 == e || so3 == f) {
    dem = dem + 1;
}
if (so4 == a || so4 == b || so4 == c || so4 == d || so4 == e || so4 == f) {
    dem = dem + 1;
}
if (so5 == a || so5 == b || so5 == c || so5 == d || so5 == e || so5 == f) {
    dem = dem + 1;
}
if (so6 == a || so6 == b || so6 == c || so6 == d || so6 == e || so6 == f) {
    dem = dem + 1;
}

if (dem == 3) {
    alert("bạn đã trúng 200000 vnđ");
} else if (dem == 4) {
    alert("bạn đã trúng 1700000 vnđ");
} else if (dem == 5) {
    alert("bạn đã trúng 82500000 vnđ");
} else if (dem == 6) {
    alert("bạn đã trúng 30 tỷ vnđ");
} else {
    alert("chúc bạn may mắn lần sau");
}
*/


// =================CÁCH CỦA THẦY=================

var x1 = 0, x2 = 0, x3 = 0, x4 = 0, x5 = 0, x6 = 0;
x1 = parseInt(Math.random() * 54 + 1);
while (x2 == x1 || x2 == 0) {
    x2 = parseInt(Math.random() * 54 + 1);
}
while (x3 == x2 || x3 == x1 || x3 == 0) {
    x3 = parseInt(Math.random() * 54 + 1);
}
while (x4 == x3 || x4 == x2 || x4 == x1 || x4 == 0) {
    x4 = parseInt(Math.random() * 54 + 1);
}
while (x5 == x4 || x5 == x3 || x5 == x2 || x5 == x1 || x5 == 0) {
    x5 = parseInt(Math.random() * 54 + 1);
}
while (x6 == x5 || x6 == x4 || x6 == x3 || x6 == x2 || x6 == x1 || x6 == 0) {
    x6 = parseInt(Math.random() * 54 + 1);
}

var a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0, a6 = 0;
while (a1 == 0 || a1 > 55 || a1 < 1 || isNaN(a1)) {
    a1 = prompt("Nhap so thu nhat");
    a1 = parseInt(a1);
}
while (a2 == 0 || a2 > 55 || a2 < 1 || isNaN(a2) || a2 == a1) {
    a2=prompt("Nhap so thu hai");
    a2 = parseInt(a2);
}

while (a3 == 0 || a3 > 55 || a3 < 1 || isNaN(a3) || a2 == a3 || a3 == a1) {
    a3=prompt("Nhap so thu ba");
    a3 = parseInt(a3);
}
while (a4 == 0 || a4 > 55 || a4 < 1 || isNaN(a4) || a4 == a3 || a4 == a2 || a4 == a1) {
    a4=prompt("Nhap so thu tu");
    a4 = parseInt(a4);
}
while (a5 == 0 || a5 > 55 || a5 < 1 || isNaN(a5) || a4 == a5 || a5 == a3 || a5 == a2 || a5 == a1) {
    a5=prompt("Nhap so thu nam");
    a5 = parseInt(a5);
}
while (a6 == 0 || a6 > 55 || a6 < 1 || isNaN(a6) || a6 == a5 || a6 == a3 || a6 == a2 || a6 == a1 || a6 == a4) {
    a6=prompt("Nhap so thu sau");
    a6 = parseInt(a6);
}

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

if (gt == 6) {
    //jackpot
} else if (gt == 5) {
    //giai 5
} else if (gt == 4) {
    //giai 4
} else if (gt == 3) {
    //giai 3
} else {
    alert("Chuc ban may man lan sau")
}

