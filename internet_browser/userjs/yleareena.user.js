// ==UserScript==
// @name yleareena user js to fix input invoid issue
// @description yleareena user js to redifine input focus function
// @match  https://smarttv.cdn.yle.fi/prod/sony/yle-areena-app/*
// @match  http://smarttvsony.sfanytime.com/*
// @run-at document-end
// ==/UserScript==

console.log('yleareena js enabled');
(function(){
    window.addEventListener("focus", function(e){
        var p;
        e = e || window.event;
        p = e.target;
        if (p.nodeName === "INPUT") {
            e.preventDefault();
            p.blur();  
        }
    }, true)
}());
