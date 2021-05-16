// ==UserScript==
// @name FPTPlay user script
// @description define 463 pause keycode event
// @match http://smarttv.fptplay.net.vn/*
// @run-at document-end
console.log('fptplay userjs enabled');
document.addEventListener("keydown", function(event){ 
    
    var keyCode = event.keyCode;
    
    console.log("keyCode: " + keyCode);
    
    switch(keyCode)
    {
        case 19:    //pause
			console.log("userjs handle pause key");
            VK_PAUSE();
            break;
        case 469:   //info
			console.log("userjs handle info key");
            VK_INFO();
            break;          
        default:
            //ShowHideFunctionBar();
            break;
    }
});