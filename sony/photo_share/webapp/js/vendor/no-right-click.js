/*
 * Copyright 2014 Sony Corporation
 */

function clickIE() {
    if (event.button == 0) {
        return false;
    }
}

function clickNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2 || e.which == 3) {
            return false;
        }
    }
}

function disable() {
	if (window.navigator.appName == "Netscape") {
		document.onmouseup = clickNS;
		document.oncontextmenu = clickIE;
		document.oncontextmenu = new Function("return false")
	} else if (window.navigator.appName == "Microsoft Internet Explorer") {
		document.oncontextmenu = clickIE;
	} else if (window.navigator.appName == "Opera") {
	} else if (document.layers) {
		document.captureEvents(Event.MOUSEDOWN);
		document.onmousedown = clickNS;
	} else {
		document.onmouseup = clickNS;
		document.oncontextmenu = clickIE;
	}
}

function enable() {
	if (window.navigator.appName == "Netscape") {
		document.onmouseup = null;
		document.oncontextmenu = null;
		document.oncontextmenu = null;
	} else if (window.navigator.appName == "Microsoft Internet Explorer") {
		document.oncontextmenu = null;
	} else if (window.navigator.appName == "Opera") {
	} else if (document.layers) {
		document.captureEvents(Event.MOUSEDOWN);
		document.onmousedown = null;
	} else {
		document.onmouseup = null;
		document.oncontextmenu = null;
	}
}