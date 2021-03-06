// ==UserScript==
// @name DOM3 KeyboardEvent .key workaround
// @description Adds basic support for the DOM3 KeyboardEvent .key attribute following the specification in http://www.w3.org/TR/DOM-Level-3-Events/. Handling of modifiers is not supported in this implementation.
// @match <all_urls>
// @run-at document-start
// ==/UserScript==

var e = Event.prototype;
Object.defineProperty(e, 'key', {
    get: function() {
        var evt = this;

        if (evt.type == 'keypress') {
// evt.keyCode holds the ASCII code for keypress events
            switch (evt.keyCode) {
                case 0 :
                    return 'Unidentified';
                case 8:
                    return 'Backspace';
                case 9 :
                    return 'Tab';
                case 12 :
                    return 'Clear';
                case 13 :
                    return 'Enter';
                case 27 :
                    return 'Escape';
                case 32 :
                    return ' ';
                case 33 :
                    return '!';
                case 34 :
                    return '"';
                case 35 :
                    return '#';
                case 36 :
                    return '$';
                case 37 :
                    return '%';
                case 38 :
                    return '&';
                case 39 :
                    return '\'';
                case 40 :
                    return '(';
                case 41 :
                    return ')';
                case 42 :
                    return '*';
                case 43 :
                    return '+';
                case 44 :
                    return ',';
                case 45 :
                    return '-';
                case 46 :
                    return '.';
                case 47 :
                    return '/';
                case 48:
                    return '0';
                case 49:
                    return '1';
                case 50:
                    return '2';
                case 51:
                    return '3';
                case 52:
                    return '4';
                case 53:
                    return '5';
                case 54:
                    return '6';
                case 55:
                    return '7';
                case 56:
                    return '8';
                case 57:
                    return '9';
                case 58:
                    return ':';
                case 59:
                    return ';';
                case 60:
                    return '<';
                case 61:
                    return '=';
                case 62:
                    return '>';
                case 63:
                    return '?';
                case 64:
                    return '@';
                case 65:
                    return 'A';
                case 66:
                    return 'B';
                case 67:
                    return 'C';
                case 68:
                    return 'D';
                case 69:
                    return 'E';
                case 70:
                    return 'F';
                case 71:
                    return 'G';
                case 72:
                    return 'H';
                case 73:
                    return 'I';
                case 74:
                    return 'J';
                case 75:
                    return 'K';
                case 76:
                    return 'L';
                case 77:
                    return 'M';
                case 78:
                    return 'N';
                case 79:
                    return 'O';
                case 80:
                    return 'P';
                case 81:
                    return 'Q';
                case 82:
                    return 'R';
                case 83:
                    return 'S';
                case 84:
                    return 'T';
                case 85:
                    return 'U';
                case 86:
                    return 'V';
                case 87:
                    return 'W';
                case 88:
                    return 'X';
                case 89:
                    return 'Y';
                case 90:
                    return 'Z';
                case 91:
                    return '[';
                case 92:
                    return '\\';
                case 93:
                    return ']';
                case 94:
                    return '^';
                case 95:
                    return '_';
                case 96:
                    return '`';
                case 97:
                    return 'a';
                case 98:
                    return 'b';
                case 99:
                    return 'c';
                case 100:
                    return 'd';
                case 101:
                    return 'e';
                case 102:
                    return 'f';
                case 103:
                    return 'g';
                case 104:
                    return 'h';
                case 105:
                    return 'i';
                case 106:
                    return 'j';
                case 107:
                    return 'k';
                case 108:
                    return 'l';
                case 109:
                    return 'm';
                case 110:
                    return 'n';
                case 111:
                    return 'o';
                case 112:
                    return 'p';
                case 113:
                    return 'q';
                case 114:
                    return 'r';
                case 115:
                    return 's';
                case 116:
                    return 't';
                case 117:
                    return 'u';
                case 118:
                    return 'v';
                case 119:
                    return 'w';
                case 120:
                    return 'x';
                case 121:
                    return 'y';
                case 122:
                    return 'z';
                case 123:
                    return '{';
                case 124:
                    return '|';
                case 125:
                    return '}';
                case 126:
                    return '~';
                case 127:
                    return 'Delete';
                default:
                    return 'Unidentified';
            }
        } else {
// Map evt.keyCode with the key codes set in input.omi
            switch (evt.keyCode) {
                case 0 :
                    return 'Unidentified';
                case 3 :
                    return 'Cancel';
                case 8 :
                    return 'Backspace';
                case 9 :
                    return 'Tab';
                case 12 :
                    return 'Clear';
                case 13 :
                    return 'Enter';
                case 16 :
                    return 'Shift';
                case 17 :
                    return 'Control';
                case 18 :
                    return 'Alt';
                case 19 :
                    return 'Pause';
                case 20 :
                    return 'CapsLock';
                case 21 :
                    return 'KanaMode';
                case 24 :
                    return 'FinalMode';
                case 25 :
                    return 'KanjiMode';
                case 27 :
                    return 'Escape';
                case 28 :
                    return 'Convert';
                case 29 :
                    return 'NonConvert';
                case 30 :
                    return 'Accept';
                case 31 :
                    return 'ModeChange';
                case 32 :
                    return ' ';
                case 33:
                    return 'PageUp';
                case 34:
                    return 'PageDown';
                case 35:
                    return 'End';
                case 36:
                    return 'Home';
                case 37:
                    return 'ArrowLeft';
                case 38:
                    return 'ArrowUp';
                case 39:
                    return 'ArrowRight';
                case 40:
                    return 'ArrowDown';
                case 44 :
                    return 'PrintScreen';
                case 45:
                    return 'Insert';
                case 46:
                    return 'Delete';
                case 47:
                    return 'Help';
                case 48:
                    return '0';
                case 49:
                    return '1';
                case 50:
                    return '2';
                case 51:
                    return '3';
                case 52:
                    return '4';
                case 53:
                    return '5';
                case 54:
                    return '6';
                case 55:
                    return '7';
                case 56:
                    return '8';
                case 57:
                    return '9';
                case 65:
                    return 'a';
                case 66:
                    return 'b';
                case 67:
                    return 'c';
                case 68:
                    return 'd';
                case 69:
                    return 'e';
                case 70:
                    return 'f';
                case 71:
                    return 'g';
                case 72:
                    return 'h';
                case 73:
                    return 'i';
                case 74:
                    return 'j';
                case 75:
                    return 'k';
                case 76:
                    return 'l';
                case 77:
                    return 'm';
                case 78:
                    return 'n';
                case 79:
                    return 'o';
                case 80:
                    return 'p';
                case 81:
                    return 'q';
                case 82:
                    return 'r';
                case 83:
                    return 's';
                case 84:
                    return 't';
                case 85:
                    return 'u';
                case 86:
                    return 'v';
                case 87:
                    return 'w';
                case 88:
                    return 'x';
                case 89:
                    return 'y';
                case 90:
                    return 'z';
                case 96:
                    return '0'; // NumPad
                case 97:
                    return '1'; // NumPad
                case 98:
                    return '2'; // NumPad
                case 99:
                    return '3'; // NumPad
                case 100:
                    return '4'; // NumPad
                case 101:
                    return '5'; // NumPad
                case 102:
                    return '6'; // NumPad
                case 103:
                    return '7'; // NumPad
                case 104:
                    return '8'; // NumPad
                case 105:
                    return '9'; // NumPad
                case 106:
                    return '*';
                case 107:
                    return '+';
                case 108:
                    return ',';
                case 109:
                    return '-';
                case 110:
                    return '.';
                case 111:
                    return '/';
                case 112:
                    return 'F1';
                case 113:
                    return 'F2';
                case 114:
                    return 'F3';
                case 115:
                    return 'F4';
                case 116:
                    return 'F5';
                case 117:
                    return 'F6';
                case 118:
                    return 'F7';
                case 119:
                    return 'F8';
                case 120:
                    return 'F9';
                case 121:
                    return 'F10';
                case 122:
                    return 'F11';
                case 123:
                    return 'F12';
                case 144:
                    return 'NumLock';
                case 145:
                    return 'ScrollLock';
                case 151:
                    return 'Meta';
                case 186:
                    return ';';
                case 187:
                    return '=';
                case 188:
                    return ',';
                case 189:
                     return '-';
                case 190:
                     return '.';
                case 191:
                    return '/';
                case 192:
                    return '`';
                case 219:
                    return '[';
                case 220:
                    return '\\';
                case 221:
                    return ']';
                case 222:
                    return '\'';
                case 403:
                    return 'ColorF0Red';
                case 404:
                    return 'ColorF1Green';
                case 405:
                    return 'ColorF2Yellow';
                case 406:
                    return 'ColorF3Blue';
                case 407:
                    return 'ColorF4Grey';
                case 408:
                    return 'ColorF5Brown';
                case 409:
                    return 'Power';
                case 410:
                    return 'Dimmer';
                case 411:
                    return 'Wink';
                case 412:
                    return 'MediaRewind';
                case 413:
                    return 'MediaStop';
                case 414:
                    return 'Eject';
                case 415:
                    return 'MediaPlay';
                case 416:
                    return 'MediaRecord';
                case 417:
                    return 'MediaFastForward';
                case 418:
                    return 'PlaySpeedUp';
                case 419:
                    return 'PlaySpeedDown';
                case 420:
                    return 'PlaySpeedReset';
                case 421:
                    return 'RecordSpeedNext';
                case 422:
                    return 'MediaTrackStart';
                case 423:
                    return 'MediaTrackEnd';
                case 424:
                    return 'MediaTrackPrevious';
                case 425:
                    return 'MediaTrackNext';
                case 426:
                    return 'RandomToggle';
                case 427:
                    return 'ChannelUp';
                case 428:
                    return 'ChannelDown';
                case 429:
                    return 'FavoriteStore0';
                case 430:
                    return 'FavoriteStore1';
                case 431:
                    return 'FavoriteStore2';
                case 432:
                    return 'FavoriteStore3';
                case 433:
                    return 'FavoriteRecall0';
                case 434:
                    return 'FavoriteRecall1';
                case 435:
                    return 'FavoriteRecall2';
                case 436:
                    return 'FavoriteRecall3';
                case 437:
                    return 'FavoriteClear0';
                case 438:
                    return 'FavoriteClear1';
                case 439:
                    return 'FavoriteClear2';
                case 440:
                    return 'FavoriteClear3';
                case 441:
                    return 'ScanChannelsToggle';
                case 442:
                    return 'PinPToggle';
                case 443:
                    return 'SplitScreenToggle';
                case 444:
                    return 'DisplaySwap';
                case 445:
                    return 'ScreenModeNext';
                case 446:
                    return 'VideoModeNext';
                case 447:
                    return 'VolumeUp';
                case 448:
                    return 'VolumeDown';
                case 449:
                    return 'VolumeMute';
                case 450:
                    return 'AudioSurroundModeNext';
                case 451:
                    return 'AudioBalanceRight';
                case 452:
                    return 'AudioBalanceLeft';
                case 453:
                    return 'AudioFaderFront';
                case 454:
                    return 'AudioFaderRear';
                case 455:
                    return 'AudioBassBoostUp';
                case 456:
                    return 'AudioBassBoostDown';
                case 457:
                    return 'Info';
                case 458:
                    return 'Guide';
                case 459:
                    return 'Teletext';
                case 460:
                    return 'Subtitle';
                case 461:
                    return 'BrowserBack';
                case 462:
                    return 'ContextMenu';
                case 463:
                    return 'MediaPlayPause';
                default:
                    return 'Unidentified';
            }
        }
    }
});