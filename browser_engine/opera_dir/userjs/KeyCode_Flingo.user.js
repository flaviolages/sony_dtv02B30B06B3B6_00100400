// ==UserScript==
// @name Flingo html5
// @description for Flingo keyCode map.
// @match http://*.hotlist.samba.tv/*
// @run-at document-end
// ==/UserScript==
window.addEventListener('keydown', function() {
    if (RemoteControl && typeof(window.VK_PLAY) == 'undefined') {
        window.VK_UP = KeyboardEvent.DOM_VK_UP;
        window.VK_DOWN = KeyboardEvent.DOM_VK_DOWN;
        window.VK_LEFT = KeyboardEvent.DOM_VK_LEFT;
        window.VK_RIGHT = KeyboardEvent.DOM_VK_RIGHT;
        window.VK_ENTER = KeyboardEvent.DOM_VK_ENTER;
    window.VK_PLAY = 415;
    window.VK_PAUSE = 19;
    window.VK_PLAY_PAUSE = 179;
    window.VK_STOP = 413;
    window.VK_FAST_FWD = 417;
    window.VK_REWIND = 412;
    window.VK_TRACK_PREV = 424;
    window.VK_TRACK_NEXT = 425;
        window.VK_0 = KeyboardEvent.DOM_VK_0;
        window.VK_1 = KeyboardEvent.DOM_VK_1;
        window.VK_2 = KeyboardEvent.DOM_VK_2;
        window.VK_3 = KeyboardEvent.DOM_VK_3;
        window.VK_4 = KeyboardEvent.DOM_VK_4;
        window.VK_5 = KeyboardEvent.DOM_VK_5;
        window.VK_6 = KeyboardEvent.DOM_VK_6;
        window.VK_7 = KeyboardEvent.DOM_VK_7;
        window.VK_8 = KeyboardEvent.DOM_VK_8;
        window.VK_9 = KeyboardEvent.DOM_VK_9;
    window.VK_BACK_SPACE = 461;
    window.VK_SUBTITLE = 460;
    window.VK_INFO = 469;
    window.VK_RED = 403;
    window.VK_BLUE = 406;
    window.VK_YELLOW = 405;
    window.VK_GREEN = 404;
    window.VK_MENU = 462;
        console.log("Flingo userjs VK_PLAY415 = " + VK_PLAY);
        RemoteControl.setProfile(OperaTVRemoteProfile);
    }
}, false);
