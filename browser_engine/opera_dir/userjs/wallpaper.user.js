// ==UserScript==
// @name iPlayer app fix
// @description Show wallpaper
// @match *://www.test.bbc.co.uk/*
// @run-at document-end

(function() {
    var appmgr = document.getElementById("appmgr");
    appmgr.style.display="none";
})();

