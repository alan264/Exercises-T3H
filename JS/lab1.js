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

// var r = parseInt(Math.random() * 100 - 45);
// var so = prompt("Vui lòng nhập số bạn chọn từ 1 den 55:");

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
