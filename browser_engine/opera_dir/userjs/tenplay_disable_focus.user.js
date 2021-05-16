// ==UserScript==
// @name Disable focus highlight
// @match *://tenhbbtv.freeviewplus.net.au/index*
// @match *://tv.tenplay.com.au/*
// @run-at document-end
// ==/UserScript==
(function() {
	var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = "*:focus { outline:none; }";
	document.body.appendChild(css);
})();
