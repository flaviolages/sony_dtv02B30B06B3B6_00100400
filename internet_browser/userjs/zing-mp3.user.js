// ==UserScript==
// @name zing mp3 user script
// @description define 463 pause and 415 play keycode events
// @match http://tv.zing.vn/smarttv/sony.mp3*
// @run-at document-end

(function(a) {
	console.log('zing mp3 userjs enabled');
    a.platform = new function() {
        function n(a) {
            return a.offset().width + parseInt(a.css("margin-left")) + parseInt(a.css("margin-right"))
        }
        function f(a) {
            return a.offset().height + parseInt(a.css("margin-top")) + parseInt(a.css("margin-bottom"))
        }
        function b() {
            return a.a.U() ? $("div.overlay [data-move=true]") : $("[data-move=true]")
        }
        function g() {
            if (a.a.U()) {
                if ($("div.overlay a.active").size())
                    return $("div.overlay a.active").first();
                $("div.overlay [data-move=true] a").first().addClass("active");
                return null
            }
            if ($("a.active").size())
                return $("a.active").first();
            $("[data-move=true] a").first().addClass("active");
            return null
        }
        function d(a) {
            a = a.parent();
            var b = "true" === a.attr("horizontal") ? !0 : !1, h = "true" === a.attr("pagination") ? !0 : !1, d = a.find("a").size(), c = a.attr("m-focus") ? parseInt(a.attr("m-focus")) : 0, e = a.attr("box-column") ? parseInt(a.attr("box-column")) : 0, l = a.attr("box-row") ? parseInt(a.attr("box-row")) : 1, k = "true" === a.attr("scroll") ? !0 : !1;
            b ? (e || (e = a.children("a").size()), l = Math.ceil(d / e)) : (l || (l = a.children("a").size()), e = Math.ceil(d / l));
            return {ca: b,ma: h,q: e,
                Fa: l,scroll: k,focus: c,length: d}
        }
        function m(a) {
            function h() {
                e.parent().attr("m-focus", e.index());
                var a = e.offset().left, d = e.offset().top, c = 99999, l = 0, r = null, k = b();
                return k.size() && (k.each(function() {
                    0 === $(this).offset().left && 0 === $(this).offset().top || $(this).offset().left >= a || (l = Math.sqrt(Math.pow(a - $(this).offset().left, 2) + Math.pow(d - $(this).offset().top, 2)), 0 < l && l < c && (c = l, r = $(this)))
                }), r) ? (k = r.attr("m-focus") ? parseInt(r.attr("m-focus")) : 0, r.children("a").size() > k ? r.children("a").eq(k) : r.children("a").last()) : 
                null
            }
            function c() {
                e = g();
                n(e);
                if (0 > e.offset().left) {
                    var a = e.parent().offset().left - e.offset().left;
                    0 < a && (a = 0);
                    e.parent().css({left: a + "px"})
                }
            }
            var e = g();
            if (e && e.size()) {
                var l = e.index(), k = d(e);
                if (k.ma && k.ca && 0 === l % k.q)
                    a && a instanceof Function && a();
                else if (0 === l % k.q) {
                    if (a = h())
                        e.parent().children("a").eq(l).removeClass("active"), a.addClass("active")
                } else
                    0 >= l || e.parent().children("a").eq(l).removeClass("active").prev().addClass("active");
                k.scroll && c()
            }
        }
        function e(a) {
            function h() {
                c.parent().attr("m-focus", 
                c.index());
                var a = c.offset().left + c.offset().width, e = c.offset().top, d = 99999, l = 0, k = null, r = b();
                return r.size() && (r.each(function() {
                    0 === $(this).offset().left && 0 === $(this).offset().top || $(this).offset().left <= a || (l = Math.sqrt(Math.pow(a - $(this).offset().left, 2) + Math.pow(e - $(this).offset().top, 2)), 0 < l && l < d && (d = l, k = $(this)))
                }), k) ? (r = k.attr("m-focus") ? parseInt(k.attr("m-focus")) : 0, k.children("a").size() > r ? k.children("a").eq(r) : k.children("a").last()) : null
            }
            function e() {
                c = g();
                var a = n(c);
                c.offset().left + a > c.parent().parent().offset().width && 
                (a = c.offset().left + a - c.parent().offset().left, a = c.parent().parent().offset().width - a, c.parent().css({left: a + "px"}))
            }
            var c = g();
            if (c && c.size()) {
                var l = c.index(), k = d(c);
                if (k.ma && k.ca && l % k.q >= k.q - 1)
                    a && a instanceof Function && a();
                else if (l % k.q === k.q - 1) {
                    if (a = h())
                        c.parent().children().eq(l).removeClass("active"), a.addClass("active")
                } else
                    l >= c.parent().children().size() - 1 || c.parent().children().eq(l).removeClass("active").next().addClass("active");
                k.scroll && e()
            }
        }
        function c() {
            function a() {
                c.parent().attr("m-focus", 
                c.index());
                var h = c.offset().left, e = c.offset().top + f(c), d = 99999, l = 0, k = null, r = b();
                return r.size() && (r.each(function() {
                    if (!(0 === $(this).offset().left && 0 === $(this).offset().top || $(this).offset().top <= e)) {
                        var a = $(this).offset().left;
                        0 > a && (a = 0);
                        l = Math.sqrt(Math.pow(h - a, 2) + Math.pow(e - $(this).offset().top, 2));
                        0 < l && l < d && (d = l, k = $(this))
                    }
                }), k) ? (r = k.attr("m-focus") ? parseInt(k.attr("m-focus")) : 0, k.children("a").size() > r ? k.children("a").eq(r) : k.children("a").last()) : null
            }
            var c = g();
            if (c && c.size()) {
                var h = c.index(), 
                e = d(c);
                if (!(e.ma && !e.ca && h + e.q >= e.q * e.Fa))
                    if (h + e.q >= c.parent().children("a").size())
                        if (Math.floor(h / e.q) < e.Fa - 1)
                            c.parent().children().eq(h).removeClass("active"), c.parent().children().last().addClass("active");
                        else {
                            var l = a();
                            l ? (c.removeClass("active"), l.addClass("active")) : Math.floor(h / e.q) < e.Fa - 1 && (c.removeClass("active"), c.parent().children().last().addClass("active"))
                        }
                    else
                        h + e.q < c.parent().children("a").size() && (c.parent().children("a").eq(h).removeClass("active"), c.parent().children("a").eq(h + 
                        e.q).addClass("active"))
            }
        }
        function k() {
            function a() {
                c.parent().attr("m-focus", c.index());
                var e = c.parent().offset().left, h = c.parent().offset().top, l = 99999, k = 0, d = null, r = b();
                return r.size() && (r.each(function() {
                    if (!(0 === $(this).offset().left && 0 === $(this).offset().top || $(this).offset().top >= h)) {
                        var a = $(this).offset().left;
                        0 > a && (a = 0);
                        k = Math.sqrt(Math.pow(e - a, 2) + Math.pow(h - $(this).offset().top, 2));
                        0 < k && k < l && (l = k, d = $(this))
                    }
                }), d) ? (r = d.attr("m-focus") ? parseInt(d.attr("m-focus")) : 0, d.children("a").size() > r ? 
                d.children("a").eq(r) : d.children("a").last()) : null
            }
            var c = g();
            if (c && c.size()) {
                var e = c.index(), h = d(c);
                if (!(h.ma && !h.ca && e < h.q))
                    if (e < h.q) {
                        if (e = a())
                            c.removeClass("active"), e.addClass("active")
                    } else
                        c.removeClass("active"), c.parent().children("a").eq(e - h.q).addClass("active")
            }
        }
        function l() {
            switch (a.a.current().m()) {
                case 99:
                    a.G.next()
            }
        }
        function h() {
            switch (a.a.current().m()) {
                case 99:
                    a.G.prev()
            }
        }
        function s() {
            var b = a.a.element("a.active");
            "true" === b.parent().attr("it-select") && (b.parent().children("a").removeClass("selected"), 
            b.addClass("selected"))
        }
        function t() {
            a.f.back()
        }
        function y() {
            a.f.next()
        }
        $("div.wrap-container").css({width: window.innerWidth || document.body.clientWidth + "px",height: window.innerHeight || document.body.clientHeight + "px"});
        var p = [];
        p[37] = function() {
            if (a.a.U() || 4 !== a.a.current().m())
                m(function() {
                    a.f.back()
                });
            else {
                var b = a.a.M();
                if (b)
                    switch (parseInt(b.attr("action"))) {
                        case B.fa:
                            if (a.d.T()) {
                                a.d.R().back();
                                var c = a.d.R();
                                a.F.set("audio", c.index());
                                b.find("span").html(c.get())
                            } else
                                a.message = new G({title: "Zing TV",
                                    message: "Tính năng yêu cầu đăng nhập tài khoản ?",buttons: [{text: "Đăng nhập",c: a.f.V}, {text: "Bỏ qua"}],Y: !0}), a.message.show();
                            break;
                        case B.ga:
                            a.d.T() ? (a.d.P().back(), c = a.d.P(), a.F.set("resolution", c.index()), b.find("span").html(c.get())) : (a.message = new G({title: "Zing TV",message: "Tính năng yêu cầu đăng nhập tài khoản ?",buttons: [{text: "Đăng nhập",c: a.f.V}, {text: "Bỏ qua"}],Y: !0}), a.message.show())
                    }
            }
        };
        p[39] = function() {
            if (a.a.U() || 4 !== a.a.current().m())
                e(function() {
                    a.f.next()
                });
            else {
                var b = a.a.M();
                if (b)
                    switch (parseInt(b.attr("action"))) {
                        case B.fa:
                            if (a.d.T()) {
                                a.d.R().next();
                                var c = a.d.R();
                                a.F.set("audio", c.index());
                                b.find("span").html(c.get())
                            } else
                                a.message = new G({title: "Zing TV",message: "Tính năng yêu cầu đăng nhập tài khoản ?",buttons: [{text: "Đăng nhập",c: a.f.V}, {text: "Bỏ qua"}],Y: !0}), a.message.show();
                            break;
                        case B.ga:
                            a.d.T() ? (a.d.P().next(), c = a.d.P(), a.F.set("resolution", c.index()), b.find("span").html(c.get())) : (a.message = new G({title: "Zing TV",message: "Tính năng yêu cầu đăng nhập tài khoản ?",buttons: [{text: "Đăng nhập",c: a.f.V}, {text: "Bỏ qua"}],Y: !0}), a.message.show())
                    }
            }
        };
        p[40] = function() {
            c()
        };
        p[38] = function() {
            k()
        };
        p[8] = function() {
            a.a.U() ? (a.message && a.message.fb(), delete a.message) : (99 === a.a.current().m() && a.G.lb(), a.a.back() || (a.message = new G({title: "Zing TV",message: "Bạn muốn thoát ứng dụng ?",buttons: [{text: "Bỏ qua"}, {text: "Đồng ý",c: a.a.B}]}), a.message.show()))
        };
        p[13] = function() {
            if (a.a.U())
                a.message && a.message.Qa(), delete a.message;
            else if (!a.a.Ha()) {
                var b = g();
                if (b) {
                    var c = parseInt(b.attr("action"));
                    console.log('action code: '+c);
                    switch (c) {
                        case 51:
                        case 52:
                        case 53:
                            if (b.hasClass("selected"))
                                break;
                            s();
                            a.f.search();
                            break;
                        case 54:
                            a.f.hb();
                            break;
                        case 50:
                            a.f.gb();
                            break;
                        case B.sa:
                            a.f.V();
                            break;
                        case B.ta:
                            a.f.Ua();
                            break;
                        case B.ga:
                            a.d.T() ? (a.d.P().next(), b = a.d.P(), a.F.set("resolution", b.index()), active.find("span").html(b.get())) : (a.message = new G({title: "Zing TV",message: "Tính năng yêu cầu đăng nhập tài khoản ?",buttons: [{text: "Đăng nhập",c: a.f.V}, {text: "Bỏ qua"}],Y: !0}), a.message.show());
                            break;
                        case B.fa:
                            a.d.T() ? (a.d.R().next(), b = a.d.R(), a.F.set("audio", b.index()), active.find("span").html(b.get())) : 
                            (a.message = new G({title: "Zing TV",message: "Tính năng yêu cầu đăng nhập tài khoản ?",buttons: [{text: "Đăng nhập",c: a.f.V}, {text: "Bỏ qua"}],Y: !0}), a.message.show());
                            break;
                        case B.ra:
                            a.f.jb();
                            a.log.google("Mp3", "Setting");
                            break;
                        case 184:
                            a.f.Ca();
                            a.log.google("Mp3", "Album cá nhân");
                            break;
                        case 183:
                            a.f.Aa();
                            a.log.google("Mp3", "Album yêu thích");
                            break;
                        case 182:
                            a.f.Ba();
                            a.log.google("Mp3", "Movie yêu thích");
                            break;
                        case 181:
                            a.f.$a();
                            a.log.google("Mp3", "Bài hát yêu thích");
                            break;
                        case 180:
                            a.d.T() ? a.f.Za() : (a.message = 
                            new G({title: "Zing TV",message: "Tính năng yêu cầu đăng nhập tài khoản ?",buttons: [{text: "Đăng nhập",c: a.f.V}, {text: "Bỏ qua"}],Y: !0}), a.message.show());
                            break;
                        case 194:
                            a.G.next();
                            break;
                        case 199:
                            a.G.prev();
                            break;
                        case 196:
                            a.G.pause();
                            break;
                        case 197:
                            a.G.play();
                            break;
                        case 192:
                            a.G.repeat();
                            break;
                        case 193:
                            if (b.hasClass("selected"))
                                break;
                            s();
                            a.G.bb(b.attr("eid"));
                            break;
                        case 164:
                        case 163:
                            if (b.hasClass("selected"))
                                break;
                            s();
                            c = a.a.current().u();
                            $.extend(c, {page: 1,total: 1});
                            a.a.current().j(c);
                            a.f.na();
                            a.log.google("Page", 
                            "Singers", b.find("p span").html());
                            break;
                        case 162:
                            a.f.na({l: ["Ca sĩ", b.find("h3").html()],pa: b.attr("eid")});
                            a.log.google("Page", "Singers", b.find("p span").html());
                            break;
                        case 161:
                            if (b.hasClass("selected"))
                                break;
                            s();
                            c = a.a.current().u();
                            $.extend(c, {page: 1,total: 1});
                            a.a.current().j(c);
                            a.f.oa({l: ["Singer", b.find("p span").html()],aa: b.attr("eid")});
                            a.log.google("Page", "Singers", b.find("p span").html());
                            break;
                        case 160:
                            if (b.hasClass("selected"))
                                break;
                            s();
                            a.f.oa({l: ["Ca sĩ"]});
                            a.log.google("Page", "Singers", 
                            b.find("p span").html());
                            break;
                        case 252:
                            a.f.xa({l: ["Bảng xếp hạng", "Bài hát"],action: c});
                            a.log.google("Cửa sổ", "Bảng xếp hạng - Bài hát", "Home");
                            break;
                        case 250:
                            a.f.xa({l: ["Bảng xếp hạng", "MV"],action: c});
                            a.log.google("Cửa sổ", "Bảng xếp hạng - MV", "Home");
                            break;
                        case 251:
                            a.f.xa({l: ["Bảng xếp hạng", "Album"],action: c});
                            a.log.google("Cửa sổ", "Bảng xếp hạng - Album", "Home");
                            break;
                        case 139:
                            a.f.ab({l: ["Bảng xếp hạng", "Bài hát", b.find("span").html()],id: b.attr("eid"),title: "Bảng xếp hạng bài hát " + b.find("span").html(),
                                o: b.find("img").attr("src")});
                            a.log.google("Play", "Bảng xếp hạng - Song", b.find("span").html());
                            break;
                        case 138:
                            a.f.ua({l: ["Bảng xếp hạng", "Album", b.find("span").html()],id: b.attr("eid")});
                            a.log.google("Cửa sổ", "Bảng xếp hạng - Album", b.find("span").html());
                            break;
                        case 133:
                            a.f.wa({l: ["Album", "Mới"]});
                            a.log.google("Cửa sổ", "Thể loại - Album", "NEW");
                            break;
                        case 132:
                            a.f.va({l: ["Album", "Nổi bật"]});
                            a.log.google("Cửa sổ", "Thể loại - Album", "Hot");
                            break;
                        case 135:
                            if (b.hasClass("selected"))
                                break;
                            s();
                            c = a.a.current().u();
                            $.extend(c, {page: 1,total: 1});
                            a.a.current().j(c);
                            a.f.ia({l: ["Album", b.find("p span").html()],aa: b.attr("eid")});
                            a.log.google("Cửa sổ", "Thể loại - Album ", b.find("p span").html());
                            break;
                        case 134:
                            a.f.ia({l: ["Album", b.find("p span").html()],aa: b.attr("eid")});
                            a.log.google("Page", "Album genre", b.find("p span").html());
                            break;
                        case 136:
                        case 137:
                            a.f.Ga({id: b.attr("eid")});
                            a.log.google("Play", "Album", b.find("p span").html());
                            break;
                        case 107:
                            a.f.za({l: ["Bảng xếp hạng", "MV", b.find("span").html()],id: b.attr("eid")});
                            a.log.google("Cửa sổ", "Bảng xếp hạng - Movie", b.find("span").html());
                            break;
                        case 105:
                            a.f.Xa({id: b.attr("eid")});
                            break;
                        case 102:
                            a.f.Ya();
                            a.log.google("Cửa sổ", "Thể loại - MV", "NEW");
                            break;
                        case 101:
                            a.f.ea({l: ["Video clip", "Nổi bật"]});
                            a.log.google("Cửa sổ", "Thể loại - MV", "Hot");
                            break;
                        case 104:
                            if (b.hasClass("selected"))
                                break;
                            s();
                            c = a.a.current().u();
                            $.extend(c, {page: 1,total: 1});
                            a.a.current().j(c);
                            a.f.la({l: ["MV", b.find("p span").html()],aa: b.attr("eid")});
                            a.log.google("Cửa sổ", "Thể loại - MV ", b.find("p span").html());
                            break;
                        case 103:
                            a.f.la({l: ["MV", b.find("p span").html()],aa: b.attr("eid")});
                            a.log.google("Page", "Movie genre", b.find("p span").html());
                            break;
                        case 130:
                            if (b.hasClass("selected"))
                                break;
                            s();
                            a.f.Ma({l: ["Album", b.find("p span").html()]});
                            a.log.google("Page", "Album genre", b.find("p span").html());
                            break;
                        case 100:
                            if (b.hasClass("selected"))
                                break;
                            s();
                            a.f.Wa({l: ["MOVIE", b.find("p span").html()]});
                            a.log.google("Page", "Movie genre", b.find("p span").html())
                    }
                }
            }
        };
        p[19] = function() {
            a.G.pause();
            console.log('PAUSED by userjs');
        };
        p[415] = function() {
            a.G.play();
            console.log('PLAY by userjs');
        };
        p[45] = l;
        p[425] = l;
        //p[463] = h;
        p[424] = h;
        p[405] = t;
        p[502] = 
        t;
        p[406] = y;
        p[98] = y;
        this.Ra = function(a) {
            return d(a)
        };
        this.Pa = function(b) {
            try {
                if (!("keyup" !== b.type && "keydown" !== b.type && "keypress" !== b.type || 8 !== b.keyCode && a.a.Ha())) {
                    if (p[b.keyCode])
                        if (a.a.U() || 99 !== a.a.current().m())
                            p[b.keyCode]();
                        else
                            switch (b.keyCode) {
                                case 37:
                                case 39:
                                case 38:
                                case 40:
                                case 463:
                                case 415:
                                case 13:
                                    if (!a.G.control())
                                        p[b.keyCode]();
                                    break;
                                default:
                                    p[b.keyCode]()
                            }
                    b.preventDefault()
                }
            } catch (c) {
                a.log.google("Error", b.type + " | Code: " + b.keyCode, c.message)
            }
        };
        (function(a) {
            $(a).each(function() {
                var a = 0;
                $(this).children().each(function() {
                    a += 
                    n($(this))
                });
                $(this).css({width: a + "px",left: "0px"})
            })
        })("div.slider div.box");
        (function(a) {
            $(a).each(function() {
                var a = 0;
                $(this).children().each(function() {
                    a += f($(this))
                });
                $(this).css({height: a + "px"})
            })
        })("div.page-wrap");
        return this
    };
    window.onkeydown = function(n) {
        a.platform.Pa(n)
    }
})(q);