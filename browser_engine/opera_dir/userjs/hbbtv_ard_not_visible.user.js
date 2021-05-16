// ==UserScript==
// @name ARD Startleiste app fix
// @description Fixes the ARD HbbTV application which incorrectly calls video.setFullscreen(true)
// @match *://itv.ard.de/ardstart/index*
// @run-at document-end
// ==/UserScript==

(function () {
  var initVideo_old = initVideo;

  initVideo = function () {
    initVideo_old.apply(this, arguments);
    var videlem = document.getElementById("video");
    try {
      videlem.setFullScreen(false);
    } catch (e) {
    }
  };
})();

