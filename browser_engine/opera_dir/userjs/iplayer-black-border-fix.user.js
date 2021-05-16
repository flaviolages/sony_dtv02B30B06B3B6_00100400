// ==UserScript==
// @name iPlayer app fix
// @description Hide scroll bars
// @match *://www.bbc.co.uk/*
// @match *://www.test.bbc.co.uk/*
// @run-at document-end

(function() {
    var appmgr = document.getElementById("appmgr");
    var app = document.getElementById("app");
    app.parentNode.insertBefore(appmgr, app.nextSibling);
})();
