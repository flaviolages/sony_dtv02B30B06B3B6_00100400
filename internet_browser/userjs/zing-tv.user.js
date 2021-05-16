// ==UserScript==
// @name zing tv user js to change the pause keycode
// @description zing tv user js to change the pause keycode
// @match  http://tv.zing.vn/smarttv/sony.html*
// @run-at document-end
// ==/UserScript==

console.log('zing tv user js enabled');
(function(a) {
    unsafeWindow.onkeydown = function(d) {
        try {
            $key.PAUSE = 19;
            $key.BACK = 8;
            d.keyCode === $key.RETURN ? (d.preventDefault(), zing.focus() !== $window.popup && (zing.focus() === $window.home ? 
            (zing.loading(!1), $msbox.show({back: zing.focus(),title: "Zing TV",message: "B\u1ea1n \u0111\u1ed3ng \u00fd tho\u00e1t kh\u1ecfi \u1ee9ng d\u1ee5ng ?",buttons: [{text: "\u0110\u1ed3ng \u00fd",func: function() {
                            a.exit()
                        }}, {text: "Kh\u00f4ng ph\u1ea3i",func: null}]})) : a.back())) : (zing.busy() || a.keydown(d), d.preventDefault());
        } catch (c) {
            c.stack ? _debug("Error", c.stack) : _debug("Error", c.message)
        }
    };
    _debug("Control load", "success")
})($app);
