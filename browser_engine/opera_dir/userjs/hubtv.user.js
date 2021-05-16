// ==UserScript==
// @name aa
// @description aa
// @match *://hbbtest.v3.tvp.pl/hubtv/index.php*
// @run-at document-start

(function () {
    var old_onready = document.onreadystatechange;
    var haveRun = false;
    document.onreadystatechange = function (state) {
        if (haveRun) return;

        var obj = document.getElementById("oipfAppMan");
        if (obj) {
            obj.parentElement.style.display="block";
            obj.parentElement.style.visibility="hidden";
            obj.parentElement.style.width="0px";
            obj.parentElement.style.height="0px";
            haveRun = true;
        }

        if (old_onready) old_onready(state);
    };
})();
