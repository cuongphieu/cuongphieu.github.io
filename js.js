$(document).ready(function() {
    var t = [{
        name: "Ất Tỵ",
        m1: Date.parse("Jan 29 2025 00:00:00")
    }, {
        name: "Bính Ngọ",
        m1: Date.parse("Feb 17 2026 00:00:00")
    }, {
        name: "Đinh Mùi",
        m1: Date.parse("Feb 6 2027 00:00:00")
    }, {
        name: "Mậu Thân",
        m1: Date.parse("Jan 26 2028 00:00:00")
    }, {
        name: "Kỷ Dậu",
        m1: Date.parse("Feb 13 2029 00:00:00")
    }];
    
    var e = t.length;
    setInterval(function() {
        var n = (new Date).getTime();
        for (var a = 0; a < e; a++) {
            var o = t[a].m1 - 864e5, r = t[a].m1 + 864e5, m = t[a].m1 + 2592e5;
            if (n <= m) {
                var i = t[a].m1, s = false, c = a + 2025, g = t[a].name + " " + c;
                var p = "Đếm ngược đến Tết " + g + " - Sắp Tết!";
                var l = "Sắp Tết rồi!!! Chỉ còn...", h = "Chúc", u = "Mừng", x = "Năm", T = "Mới";
                var f = "Ngày", y = "Giờ", d = "Phút", C = "Giây";
                
                if (n >= t[a].m1) {
                    i = m;
                    if (n >= r) {
                        l = "Sắp hết Tết rồi!!!";
                    } else {
                        s = true;
                        l = "Tết rồi!!! Tết rồi!!!";
                        f = "Cung", y = "Chúc", d = "Tân", C = "Xuân";
                    }
                }
                
                if (!s) {
                    var b = i - n;
                    T = Math.floor(b / 1e3 % 60);
                    x = Math.floor(b / 1e3 / 60 % 60);
                    u = Math.floor(b / 36e5 % 24);
                    h = Math.floor(b / 864e5);
                }
                
                $("#tetornot").text(l);
                $("#days").text(h);
                $("#hours").text(u);
                $("#mins").text(x);
                $("#secs").text(T);
                $("#days-text").text(f);
                $("#hours-text").text(y);
                $("#mins-text").text(d);
                $("#secs-text").text(C);
                $("#tentet").text(g);
                $("#tet").text(g);
                
                if (n >= o) {
                    $("html").css({
                        background: "radial-gradient(ellipse at bottom, #efe81d 0%, #f80f1f 100%)"
                    });
                    $(".clock").toggleClass("tet");
                    $(".clock .text").toggleClass("tet");
                }
                
                document.title = p;
                $('meta[name="description"]').attr("content", "Còn bao nhiêu ngày nữa đến Tết Nguyên Đán " + g + "?");
                $('meta[property="og\\:title"]').attr("content", p);
                $('meta[property="og\\:description"]').attr("content", "Còn bao nhiêu ngày nữa đến Tết Nguyên Đán " + g + "?");
                $('meta[property="og\\:image"]').attr("content", "/icon.png");
                break;
            }
        }
    }, 1e3);
});
