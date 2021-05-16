var urlSelect=false;
function adjustCoordinate(name) 
{
	temp=document.getElementById(name);
	if(name=="naviBg")
	{
		tempTop=0;
		temp.style.top=tempTop+"px";
		temp.style.height=document.documentElement.clientHeight+"px";
		temp.style.width=document.documentElement.clientWidth + "px";
	}
	else if (name == "addressbar")
	{
		tempTop=document.documentElement.clientHeight*0.1897;
		temp.style.top=tempTop+"px";
		addressbarWidth=document.documentElement.clientWidth*0.5729;
		if (addressbarWidth > 0) 
		{
			temp.style.width=addressbarWidth + "px";
		}	
		addressBg1=document.getElementById("addressBg1");
		addressBg1.style.top=document.documentElement.clientHeight*0.1897 +"px";
		addressBg1.style.left=document.documentElement.clientWidth*0.3406 +"px";
			
		addressBg3Left=document.documentElement.clientWidth*0.9302;//-55; // 55 = 46 + 9;

		icon_place=document.getElementById("icon_place");
		icon_place.style.top=addressBg1.style.top;
		icon_place.style.left=document.documentElement.clientWidth*0.9021+"px";
		icon_place.style.visibility="hidden";
			
		addressBg3=document.getElementById("addressBg3");
		addressBg3.style.top=addressBg1.style.top;
		addressBg3.style.left=addressBg3Left+"px";
		addressBg3.style.width=document.documentElement.clientWidth*0.0083+"px";
		addressBg3.style.height=document.documentElement.clientHeight*0.6207+"px";
	}
	else if((name == "goTo") || (name == "goToDisable"))
	{//alert(10);
		tempTop=document.documentElement.clientHeight*0.1379;
		goButton=document.getElementById(name);
		goButton.style.top=tempTop+"px";
				
		goButtonLeft=document.documentElement.clientWidth*0.9448;//-55;
		goButton.style.left=goButtonLeft+"px";
	}
	else if (name == "close") 
	{
		tempTop=document.documentElement.clientHeight*0.1379;
		temp.style.top=tempTop+"px";
		ExitLeft=document.documentElement.clientWidth*0.9427;
		temp.style.left=exitLeft + "px";
	}
	else 
	{
		tempTop=document.documentElement.clientHeight*0.1379;
		temp.style.top=tempTop+"px";
	}
}
		
function init() 
{
		
	var css=document.getElementById("cssid");
	if(1920 == document.documentElement.clientWidth )
	{
		css.setAttribute("href","style1920.css");
	}
	else if(960 == document.documentElement.clientWidth)
	{
	      
		css.setAttribute("href","style960.css");
	} 
			
	adjustCoordinate("naviBg");
	adjustCoordinate("greatWeb");
	adjustCoordinate("back");
	adjustCoordinate("backDisabled");
	adjustCoordinate("fwd");
	adjustCoordinate("fwdDisabled");
	adjustCoordinate("reload");
	adjustCoordinate("stop");
	adjustCoordinate("showBookmark");
	adjustCoordinate("addToBookmark");
	adjustCoordinate("addToBookmarkDisabled");
	adjustCoordinate("addressbar");
	adjustCoordinate("goTo");
	adjustCoordinate("goToDisable");
	//adjustCoordinate("close");
	document.onkeydown = onKeyDown;
	opera_omi.addPlatformEventListener(handlePlatformEvent);
}

function handlePlatformEvent(event)
{
	if(event == "loadingStart")
	{
		loadingStart();
	}else if(event == "loadingFinished")
	{
		loadingFinished();
	}
}

function onKeyDown(event)
{
	 switch (event.keyCode)
    {
    case 38://up
    case 13://enter
		document.getElementById("greatWeb").style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_greatweb.png\")";
		document.getElementById("back").style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_back.png\")";
		document.getElementById("fwd").style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_forward.png\")";
		document.getElementById("reload").style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_refresh.png\")";
		document.getElementById("stop").style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_cancel.png\")";
		document.getElementById("reload").style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_refresh.png\")";
		document.getElementById("showBookmark").style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_favorit.png\")";
		document.getElementById("addToBookmark").style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_favoritadd.png\")";
		document.getElementById("help").style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_help.png\")";
		document.getElementById("goTo").style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_Go.png\")";
		document.getElementById("close").style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_cancel.png\")";
		break;
	default:
		break;
	 }
}

// Set opera to visit the given URL. Return false to allow use
// with the onSubmit event, which otherwise would cause this
function openURL(obj) 
{
	if(obj.value)
	{
		if(urlSelect)
		{
			urlSelect=false;
			obj.style.color='black';
				operaController.openUrl(obj.value);
		}
		else
		{
			urlSelect=true;
			obj.style.color='green';
		}
	}
	return false;
}

function goTo() 
{
	addressbar=document.getElementById("addressbar");
	operaController.openUrl(addressbar.value);
}

function setUrlSelect(obj)
{
	if(urlSelect)
	{
		urlSelect=false;
		obj.style.color='black';
	}
}


function urlChange(url) {
	addressbar=document.getElementById("addressbar");
	addressbar.value=url;
}

/*function setDocumentIcon(url) {
	addressbar=document.getElementById("addressbar");
	addressbar.style.backgroundImage="url(" + url + ")";
}

function unsetDocumentIcon()
{
	addressbar=document.getElementById("addressbar");
	addressbar.style.backgroundImage="url(documents.png)";
}
*/

function urlChange(url, normalBrowsing) 
{
    if (normalBrowsing)
    {
	    addressbar=document.getElementById("addressbar");
	    addressbar.value=url;

		show(document.getElementById("addToBookmark"));
		hide(document.getElementById("addToBookmarkDisabled"));
		
		show(document.getElementById("goTo"));
		hide(document.getElementById("goToDisable"));
    }
    else
    {
		show(document.getElementById("addToBookmarkDisabled"));
		hide(document.getElementById("addToBookmark"));
		
		show(document.getElementById("goToDisable"));
		hide(document.getElementById("goTo"));
    }
}

function show(e) {
	e.style.visibility="visible";
}

function hide(e) {
	e.style.visibility="hidden";
}

function loadingStart() {
	show(document.getElementById("stop"));
	hide(document.getElementById("reload"));
}

function loadingFinished() {
	show(document.getElementById("reload"));
	hide(document.getElementById("stop"));
}

function addToBookmark(obj)
{
   obj.style.backgroundImage="url('../../img/nav_window/brs_navi_icon_favoritadd.png')";
   operaController.showBookmarkDialog('SHOW', 'ADD', 'ITEM', '0');
}
// If fwd/back is true, make the respective navigation button active,
// otherwise make in inactive (gray, dimmed).
function setNavigation(goBack, goFwd) {
	back = document.getElementById("back");
	backDisabled = document.getElementById("backDisabled");
	fwd = document.getElementById("fwd");
	fwdDisabled = document.getElementById("fwdDisabled");
	if (goBack) {
		show(back);
	} else {
		hide(back);
	}

	if (goFwd) {
		show(fwd);
	} else {
		hide(fwd);
	}
}

function setMouseEvent()
{
    document.getElementById("greatWeb").onmouseover=function(){
	     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_greatweb_hi.png\")";
	}
	document.getElementById("greatWeb").onmouseout=function(){
	     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_greatweb.png\")";
	}
	
	document.getElementById("back").onmouseover=function(){
	     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_back_hi.png\")";
	}
	document.getElementById("back").onmouseout=function(){
	     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_back.png\")";
	}
	
	document.getElementById("fwd").onmouseover=function(){
	     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_forward_hi.png\")";
	}
	document.getElementById("fwd").onmouseout=function(){
	     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_forward.png\")";
	}
	
	document.getElementById("reload").onmouseover=function(){
	    this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_refresh_hi.png\")";
		document.getElementById("stop").style.backgroundImage="url(\"brs_navi_icon_cancel_hi.png\")";
	}
	document.getElementById("reload").onmouseout=function(){
	    this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_refresh.png\")";
		document.getElementById("stop").style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_cancel.png\")";
	}
	
	document.getElementById("stop").onmouseover=function(){
	    this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_cancel_hi.png\")";
		document.getElementById("reload").style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_refresh_hi.png\")";
	}
	document.getElementById("stop").onmouseout=function(){
	    this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_cancel.png\")";
		document.getElementById("reload").style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_refresh.png\")";
	}

	document.getElementById("showBookmark").onmouseover=function(){
	     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_favorit_hi.png\")";
	}
	document.getElementById("showBookmark").onmouseout=function(){
	     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_favorit.png\")";
	}
	
	document.getElementById("addToBookmark").onmouseover=function(){
	     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_favoritadd_hi.png\")";
	}
	document.getElementById("addToBookmark").onmouseout=function(){
	     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_favoritadd.png\")";
	}
	
	//add goTo button
	document.getElementById("goTo").onmouseover=function(){
	     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_Go_hi.png\")";
	}
	document.getElementById("goTo").onmouseout=function(){
	     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_Go.png\")";
	}
	//
	
	document.getElementById("close").onmouseover=function(){
	     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_cancel_hi.png\")";
	}
	document.getElementById("close").onmouseout=function(){
	     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_cancel.png\")";
	}
	
}
		
function setFocusEvent()
{
	document.getElementById("greatWeb").onfocus=function()
	{
		this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_greatweb_hi.png\")";
	}
	document.getElementById("greatWeb").onblur=function()
	{
		this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_greatweb.png\")";
	}		
			
	document.getElementById("back").onfocus=function()
	{
		this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_back_hi.png\")";
	}
			document.getElementById("back").onblur=function(){
			     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_back.png\")";
			}
			
			document.getElementById("fwd").onfocus=function(){
			     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_forward_hi.png\")";
			}
			document.getElementById("fwd").onblur=function(){
			     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_forward.png\")";
			}
			
			document.getElementById("reload").onfocus=function(){
			    this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_refresh_hi.png\")";
				document.getElementById("stop").style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_cancel_hi.png\")";
			}
			document.getElementById("reload").onblur=function(){
			    this.style.backgroundImage="url(\"brs_navi_icon_refresh.png\")";
				document.getElementById("stop").style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_cancel.png\")";
			}
			
			document.getElementById("stop").onfocus=function(){
			    this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_cancel_hi.png\")";
				document.getElementById("reload").style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_refresh_hi.png\")";
			}
			document.getElementById("stop").onblur=function(){
			    this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_cancel.png\")";
				document.getElementById("reload").style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_refresh.png\")";
			}

			document.getElementById("showBookmark").onfocus=function(){
			     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_favorit_hi.png\")";
			}
			document.getElementById("showBookmark").onblur=function(){
			     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_favorit.png\")";
			}
			
			document.getElementById("addToBookmark").onfocus=function(){
			     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_favoritadd_hi.png\")";
			}
			document.getElementById("addToBookmark").onblur=function(){
			     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_favoritadd.png\")";
			}
			
			//add goTo button
			document.getElementById("goTo").onfocus=function(){
			     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_Go_hi.png\")";
			}
			document.getElementById("goTo").onblur=function(){
			     this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_Go.png\")";
			}
			//
			
		document.getElementById("close").onfocus=function()
		{
			this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_cancel_hi.png\")";
		}
		document.getElementById("close").onblur=function()
		{
			this.style.backgroundImage="url(\"../../img/nav_window/brs_navi_icon_cancel.png\")";
		}
}
function ssl_Icon(show)
{
	if(show)
		document.getElementById("icon_place").style.visibility="visible";
	else
		document.getElementById("icon_place").style.visibility="hidden";
}	
