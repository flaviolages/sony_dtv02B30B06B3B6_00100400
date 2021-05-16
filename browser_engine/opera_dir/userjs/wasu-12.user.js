// ==UserScript==
// @name wasu user script
// @description testhh
// @match http://sonyceb-epg.wasu.tv/*
// @run-at document-end

(function () {
	console.log('wasu-12 user js enabled');
	for(var i=0;i<6;i++){
		var divFocus = 'focus' + (i+3);
		var x = document.getElementById(divFocus);
		if (x != undefined || x != null) {
			x.style.paddingTop = 6+"px";
		}
	}
})();