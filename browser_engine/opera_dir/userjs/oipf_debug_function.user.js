// ==UserScript==
// @name OIPF debug function
// @description Provides debug facilities for OIPF as defined in DAE 7.15.5
// @match *://*/*
// @run-at document-end
// ==/UserScript==

(function () {
  if (typeof(window.__opera_window_type) === 'undefined' ||
      typeof(window.debug) !== 'undefined') {
    return;
  }

  if (window.__opera_window_type != "hbbtv" &&
      window.__opera_window_type != "oipf") {
    return;
  }

  window.debug = function(arg) {
    if (typeof(oipfObjectFactory) !== 'undefined' &&
        typeof(oipfObjectFactory.debug) === 'function') {
      oipfObjectFactory.debug(arg);
    }
  };
})();
