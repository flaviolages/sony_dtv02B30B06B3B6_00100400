// ==UserScript==
// @name culturebox user js to change the z-index
// @description culturebox user js to change the id:player z-index
// @match  http://tvconnect.francetv.fr/sony/culturebox/*
// @run-at document-end
// ==/UserScript==

console.log('culturebox js enabled');
function addGlobalStyle(css) {
  var head, style;
  head = document.getElementsByTagName('head')[0];
  if (!head) { return; }
  style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = css;
  head.appendChild(style);
}

addGlobalStyle('#player { z-index: -1 ! important; }');
