// ==UserScript==
// @name YTTV scrolling issue fix
// @description Force scrolling to (0, 0) on all scroll events
// @match *://*.youtube.com/tv*
// @run-at document-idle
// ==/UserScript==

window.addEventListener('scroll', function(e) { window.scrollTo(0, 0); }, false);
