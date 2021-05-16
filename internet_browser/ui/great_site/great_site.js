var g_NotInitializeed = true;
var g_showPreNextImg = true;
var times ;

var g_arrayImgsList = new Array();
g_arrayImgsList[0] = new objImg("../../img/great_site/logo_baidu.png", "www.baidu.com");
g_arrayImgsList[1] = new objImg("../../img/great_site/logo_google.png", "www.google.com.hk");
g_arrayImgsList[2] = new objImg("../../img/great_site/logo_qq.png", "www.qq.com");
g_arrayImgsList[3] = new objImg("../../img/great_site/logo_taobao.png", "www.taobao.com");
g_arrayImgsList[4] = new objImg("../../img/great_site/logo_sina.png", "www.sina.com.cn");
g_arrayImgsList[5] = new objImg("../../img/great_site/logo_163.png", "www.163.com");
g_arrayImgsList[6] = new objImg("../../img/great_site/logo_renren.png", "www.renren.com");
g_arrayImgsList[7] = new objImg("../../img/great_site/logo_youku.png", "www.youku.com");
g_arrayImgsList[8] = new objImg("../../img/great_site/logo_sohu.png", "www.sohu.com");
g_arrayImgsList[9] = new objImg("../../img/great_site/logo_tudou.png", "www.tudou.com");
g_arrayImgsList[10] = new objImg("../../img/great_site/logo_sogou.png", "www.sogou.com");
g_arrayImgsList[11] = new objImg("../../img/great_site/logo_tianya.png", "www.tianya.cn");
g_arrayImgsList[12] = new objImg("../../img/great_site/logo_ifeng.png", "www.ifeng.com");
g_arrayImgsList[13] = new objImg("../../img/great_site/logo_yahoo.png", "www.yahoo.cn");
g_arrayImgsList[14] = new objImg("../../img/great_site/logo_ku6.png", "www.ku6.com");

// definition of grid palace
var g_rowsCountOfMatrix;
var g_columsCountOfMatrix;

// altered by User
var g_originIndexOfCurPage = 0;
//var g_focusImgIndex        = 0;

function init()
{

    if(1920 == document.documentElement.clientWidth )
	{
	      
	   times =2;
	}
	else if(960 == document.documentElement.clientWidth)
	{
	     times =1; 
		
	} 

}

function initSetting(rows, columns, originIndexOf1stPage){
    g_originIndexOfCurPage = originIndexOf1stPage;
    g_rowsCountOfMatrix = rows;
    g_columsCountOfMatrix = columns;
}

/*function focusOn(index){
    var imgID = "td";
    imgID += index;
	document.getElementById(imgID).focus();
}*/

// HTML constructor
var g_strPalaceConstructor   = "";

function objImg(srcPath, lnk){
    this.m_srcPath = srcPath;
    this.m_link    = lnk;
}

/*function cleanFocus(){
    var img;
	img = eval("document.all.focusImg"+g_focusImgIndex);
	focusImg.style.display="none";
    img.style.border = 2;
	img.style.width = 141;
	img.style.height = 118;
	
	//g_focusImgIndex = 0;
	//focusOn(g_focusImgIndex);
}*/

function focusOnTheImg(imgIndexOfCurPage){
    //alert("browseSelectedSite(imgIndexOfCurPage) = "+imgIndexOfCurPage);
	
	/*if (g_NotInitializeed) {
	    g_NotInitializeed=false;
		
		g_focusImgIndex = imgIndexOfCurPage;
	    focusImg = eval("document.all.focusImg"+imgIndexOfCurPage);
		focusImg.style.display="inline";
		
		return ;
	}*/
	

	// prev focus
	//prevFocusImg = eval("document.all.focusImg"+g_focusImgIndex);
	//prevFocusImg.style.display="none";
	
	//g_focusImgIndex = imgIndexOfCurPage;
	
	// focus
	focusImg = eval("document.all.focusImg"+imgIndexOfCurPage);
	focusImg.style.display="inline";
}

function focusOutTheImg(imgIndexOfCurPage){
	focusImg = eval("document.all.focusImg"+imgIndexOfCurPage);
	focusImg.style.display="none";
}

function browseSelectedSite(imgIndexOfCurPage){
	var strURL = g_arrayImgsList[g_originIndexOfCurPage+imgIndexOfCurPage].m_link;	
    operaController.openUrl(strURL);
}

function constructFocusImgHtml(imgIndexOfCurPage){
    var strImg;
    strImg = "<img src=";
	strImg+="../../img/great_site/logo_hi.png";
    strImg += " ";
    strImg += "border=0 ";
    strImg += "id= focusImg";
    strImg += imgIndexOfCurPage;
    strImg += " ";
	
	strImg+="style='display:none;'";
    strImg += "/>";
	
    return strImg;
}

function getMatrixSupportNum(){
    return g_rowsCountOfMatrix * g_columsCountOfMatrix;
}

function gotoPrevPage(){
    if(g_originIndexOfCurPage <= 0){
	    
        return ;
    }
    
	showNextImgTag();
    var imgsCountOfPageSupport = getMatrixSupportNum();
    
    g_originIndexOfCurPage -= imgsCountOfPageSupport;
	if(g_originIndexOfCurPage <= 0){	    
       hidePreImgTag();
    }
	else
	{
	   showPreImgTag();
	}
    var imgID;
    var imgIndex;
    for(var i = 0; i < imgsCountOfPageSupport; ++ i){
        imgID = "td";
        imgID += i;
        imgIndex = g_originIndexOfCurPage+i;
        document.getElementById(imgID).style.backgroundImage="url("+g_arrayImgsList[imgIndex].m_srcPath+")";
        document.getElementById(imgID).style.visibility="visible";
    }
	
	//cleanFocus();
}

function gotoNextPage()
{
    
    var imgsCountOfPageSupport = getMatrixSupportNum();
    
    var remains = g_arrayImgsList.length - g_originIndexOfCurPage;
    if(remains <= imgsCountOfPageSupport){
        return ;
    }else{
	    showPreImgTag();
        remains = remains - imgsCountOfPageSupport;
        var imgID;
        var imgIndex;
        if(remains > imgsCountOfPageSupport){
		    showNextImgTag(); 
            for(var i = 0; i < imgsCountOfPageSupport; ++ i){
                imgID = "td";
                imgID += i;
                imgIndex = g_originIndexOfCurPage+imgsCountOfPageSupport+i;
                document.getElementById(imgID).style.backgroundImage="url("+g_arrayImgsList[imgIndex].m_srcPath+")";
				document.getElementById(imgID).style.visibility="visible";
            }
        }else{
		    hideNextImgTag();
            var j;
            for(j = 0; j < remains; ++ j){
                imgID = "td";
                imgID += j;
                imgIndex = g_originIndexOfCurPage+imgsCountOfPageSupport+j;
                document.getElementById(imgID).style.backgroundImage="url("+g_arrayImgsList[imgIndex].m_srcPath+")";
                document.getElementById(imgID).style.visibility="visible";
            }
            
            for(; j < imgsCountOfPageSupport; ++ j){
                imgID = "td";
                imgID += j;
                document.getElementById(imgID).style.visibility="hidden";
            }
        }
        
        g_originIndexOfCurPage += imgsCountOfPageSupport;
    }
	
	//cleanFocus();
}

function updateBtnSta_Prev_Next(){
    var imgsCountOfPageSupport = getMatrixSupportNum();
	
    if(g_arrayImgsList.length > imgsCountOfPageSupport){
        showNextImgTag();
        return ;
    }
}

function buildMatrix(){
    var imgsCountOfPageSupport = getMatrixSupportNum();
    
    if((g_originIndexOfCurPage % imgsCountOfPageSupport) != 0){
        alert("The origin index was initialized errorly!");
        return ;
    }
    
    var effectImgsCount4Page = g_arrayImgsList.length - g_originIndexOfCurPage;
    if(effectImgsCount4Page > imgsCountOfPageSupport){
        effectImgsCount4Page = imgsCountOfPageSupport;
    }
    g_strPalaceConstructor="<table style=margin:auto> <tr><td>";   
	g_strPalaceConstructor+="<table name='gridPalace' border=0 cellspacing=0 cellpadding=0 id=matrix style=display:none>";
    
    var switcher = 0;
    var imgIndexOfAll = 0;
    for(var i = 0; i < effectImgsCount4Page; ++ i){
        imgIndexOfAll = g_originIndexOfCurPage + i;
        
        if((switcher % g_columsCountOfMatrix) == 0){
            g_strPalaceConstructor += "<tr>";
        }
        
        g_strPalaceConstructor += "<td border=0 height="+ 126*times + "  width=" + 149*times + "  align='center'";
		
		g_strPalaceConstructor += "onmouseover=\"focusOnTheImg(";
        g_strPalaceConstructor += i;
        g_strPalaceConstructor += ");\""
		
		g_strPalaceConstructor += "onmouseout=\"focusOutTheImg(";
        g_strPalaceConstructor += i;
        g_strPalaceConstructor += ");\""
		
		g_strPalaceConstructor += "onfocus=\"focusOnTheImg(";
        g_strPalaceConstructor += i;
        g_strPalaceConstructor += ");\""
		
		g_strPalaceConstructor += " onclick=\"browseSelectedSite(";
        g_strPalaceConstructor += i;
        g_strPalaceConstructor += ");\"";
		
		g_strPalaceConstructor += " ";
	    g_strPalaceConstructor += "TABINDEX = '"
	    g_strPalaceConstructor += i;
	    g_strPalaceConstructor += "'";
		
		g_strPalaceConstructor += "style=\"background-image:url(' ";
		g_strPalaceConstructor += g_arrayImgsList[i].m_srcPath;
		g_strPalaceConstructor += "')\"";

		g_strPalaceConstructor += " id=td";
		g_strPalaceConstructor += i;
		g_strPalaceConstructor += " >";
		
        //g_strPalaceConstructor += constructImgHtml(g_arrayImgsList[imgIndexOfAll], i);
		g_strPalaceConstructor += constructFocusImgHtml(i);
        g_strPalaceConstructor += "</td>";
        
        ++ switcher;
        if((switcher % g_columsCountOfMatrix) == 0){
            g_strPalaceConstructor += "</tr>";
        }
    }
    
    g_strPalaceConstructor += "</table>";
	g_strPalaceConstructor += "</td><td><table id=pagebtn style=display:none>";
	g_strPalaceConstructor += "<tr><td valign='top' border=0 height="+ 180*times+ " width=" + 17*times + " tabindex='";
	g_strPalaceConstructor += effectImgsCount4Page;
	g_strPalaceConstructor += "'>";
	g_strPalaceConstructor += "<span onmouseover=\"mouseOnPre()\"  onmouseout=\"mouseOutPre()\" onclick=\"gotoPrevPage()\"";
	g_strPalaceConstructor += " id=preenabled style=display:none>";
	g_strPalaceConstructor += " <img id=premouseout  src=\"../../img/great_site/greatwebsite_up_nor.png\" style=display:inline>";
	g_strPalaceConstructor += " <img id=premouseover  src=\"../../img/great_site/greatwebsite_up_hi.png\" style=display:none></span></td></tr>";
    
	g_strPalaceConstructor += "<tr><td valign='bottom' border=0 height=" + 180*times + " width=" + 17*times + " tabindex='";
	g_strPalaceConstructor += (effectImgsCount4Page+1);
	g_strPalaceConstructor +="'>";
	g_strPalaceConstructor +="<span onmouseover=\"mouseOnNext()\"  onmouseout=\"mouseOutNext()\" onclick=\"gotoNextPage()\"";	
	g_strPalaceConstructor +=" id=nextenabled style=display:none> "; 
	g_strPalaceConstructor +="<img id=nextmouseout src=\"../../img/great_site/greatwebsite_down_nor.png\" style=display:inline>";
	g_strPalaceConstructor +="<img id=nextmouseover  src=\"../../img/great_site/greatwebsite_down_hi.png\" style=display:none>";
	g_strPalaceConstructor +="</span></td></tr></table></td>";
	
	
    g_strPalaceConstructor += "</tr></table>";
    document.write(g_strPalaceConstructor);
    //alert(g_strPalaceConstructor);
}

function showMatrix(){
	initSetting(3, 5, 0);
    buildMatrix();
}

function config() {
    document.getElementById("opera_icon").style.display="none";
    document.getElementById("matrix").style.display="inline";
	if (g_showPreNextImg)
	{
	   document.getElementById("pagebtn").style.display="inline";
	}
	updateBtnSta_Prev_Next();
	//focusOn(0);
}

function showPreImgTag()
{
    document.getElementById("preenabled").style.display="inline";
}
function hidePreImgTag()
{
    document.getElementById("preenabled").style.display="none";
}

function showNextImgTag()
{
    document.getElementById("nextenabled").style.display="inline";
}
function hideNextImgTag()
{
    document.getElementById("nextenabled").style.display="none";
}

function mouseOnPre()
{
  	document.getElementById("premouseover").style.display="inline";
    document.getElementById("premouseout").style.display="none";
}
function mouseOutPre()
{
  	document.getElementById("premouseover").style.display="none";
    document.getElementById("premouseout").style.display="inline";
}
function mouseOnNext()
{
  	document.getElementById("nextmouseover").style.display="inline";
    document.getElementById("nextmouseout").style.display="none";
}
function mouseOutNext()
{
  	document.getElementById("nextmouseover").style.display="none";
    document.getElementById("nextmouseout").style.display="inline";
}
