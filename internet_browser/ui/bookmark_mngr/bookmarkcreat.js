var GstrTreeStructor=""; //tree structure:HTML code
var GintBranchCount=0;  //branch count
var GintItemCount=0;  //item count

var GarraySpanID = new Array();
var GstrCurFocusSpanID = "";
//images path
var GstrBookClose="../../img/bookmark_mngr/bm_icon_expand.png";
var GstrBookOpen="../../img/bookmark_mngr/bm_icon_shrink.png";
var GstrPage="../../img/bookmark_mngr/bm_icon_page.png";
var GstrDelete="../../img/bookmark_mngr/bm_icon_delete.png";
var GstrDeleteF="../../img/bookmark_mngr/bm_icon_delete_hi.png";
var GstrEdit="../../img/bookmark_mngr/bm_icon_edit.png";
var GstrEditF="../../img/bookmark_mngr/bm_icon_edit_hi.png";
var times = 1;
var currentpos = -1;
var gcurLinkType = 2;
var glasLinkType = 2;
//Function Set////////////////////////////////////////////////////////////////
function init()
	{
		 var css=document.getElementById("cssid");
	     if(1920 == document.documentElement.clientWidth )
	     {
           times = 2;
		   css.setAttribute("href","style1920.css");
	     }
	     else if(960 == document.documentElement.clientWidth)
	     { 

		  css.setAttribute("href","style960.css");
	     }
		 	document.onkeydown = secondkeydown;
	  
	}


function objBranch(n,uuid)
{
    this.name=n;
    this.uuid=uuid;
}

function objItem(n,k,uuid)
{
    //define object:link item
    this.name=n;
    this.link=k;
    this.uuid=uuid;
}//end of objItem()

function menuExpand(id)
{
    //shrink or expand sub-selected menu
    top.focus();
    var img=eval("document.all.img"+id);
	var imgEx=eval("document.all.imgEx"+id);
    var tab=eval("document.all.tab"+id);
    if(tab.style.display=="none")
    {
        tab.style.display="block";
		img.style.display="none";
		imgEx.style.display="inline";
    }
    else
    {
        tab.style.display="none";
		img.style.display="inline";
		imgEx.style.display="none";
    }
}// end of menuExpend()

function deleteBranch(uuid) 
{
    operaController.showBookmarkDialog('SHOW','DEL','FOLDER', uuid);
}

function editBranch(uuid)
{
    operaController.showBookmarkDialog('SHOW','SET','FOLDER', uuid);
}

function deleteItem(uuid)
{    	    
    operaController.showBookmarkDialog('SHOW','DEL','ITEM', uuid);	
}

function editItem(uuid)
{
    operaController.showBookmarkDialog('SHOW','SET','ITEM', uuid);	
}

function initSpans(){
    // it is assumed that the 1st branch is default-focus.
    // and ID = "branchSpanID1"
    if(0 < GarraySpanID.length)
    {
        GstrCurFocusSpanID = GarraySpanID[0];
		//document.getElementById(GstrCurFocusSpanID).style.display="inline";
    }
    
    for(var i = 1; i < GarraySpanID.length; ++ i)
    {
        document.getElementById(GarraySpanID[i]).style.display="none";
    }
}

function showSpan(spanID)
{
    if(GstrCurFocusSpanID != "")
    {
        document.getElementById(GstrCurFocusSpanID).style.display="none";
	}
        GstrCurFocusSpanID = spanID;
        document.getElementById(GstrCurFocusSpanID).style.display="inline";
    
}

function hideSpan(spanID)
{
    if((GstrCurFocusSpanID != spanID)&&(GstrCurFocusSpanID != ""))
    {
        document.getElementById(GstrCurFocusSpanID).style.display="none";
    }
    document.getElementById(spanID).style.display="none";
	GstrCurFocusSpanID = "";	 
}

// branch begin
function focusBranchEdit(branchIndex)
{
    var branchEditNID="branchEditNImg"+branchIndex;
	var branchEditFID="branchEditFImg"+branchIndex;
	
	document.getElementById(branchEditNID).style.display="none";
	document.getElementById(branchEditFID).style.display="inline";
}

function unfocusBranchEdit(branchIndex)
{
    var branchEditNID="branchEditNImg"+branchIndex;
	var branchEditFID="branchEditFImg"+branchIndex;
	
	document.getElementById(branchEditFID).style.display="none";
	document.getElementById(branchEditNID).style.display="inline";
}

function focusBranchDel(branchIndex)
{
    var branchEditNID="branchDelNImg"+branchIndex;
	var branchEditFID="branchDelFImg"+branchIndex;
	
	document.getElementById(branchEditNID).style.display="none";
	document.getElementById(branchEditFID).style.display="inline";
}

function unfocusBranchDel(branchIndex)
{
    var branchEditNID="branchDelNImg"+branchIndex;
	var branchEditFID="branchDelFImg"+branchIndex;
	
	document.getElementById(branchEditFID).style.display="none";
	document.getElementById(branchEditNID).style.display="inline";
}
// branch end

// item begin
function focusItemEdit(itemIndex)
{
    var itemEditNID="itemEditNImg"+itemIndex;
	var itemEditFID="itemEditFImg"+itemIndex;
	
	document.getElementById(itemEditNID).style.display="none";
	document.getElementById(itemEditFID).style.display="inline";
}

function unfocusItemEdit(itemIndex)
{
    var itemEditNID="itemEditNImg"+itemIndex;
	var itemEditFID="itemEditFImg"+itemIndex;
	
	document.getElementById(itemEditFID).style.display="none";
	document.getElementById(itemEditNID).style.display="inline";
}

function focusItemDel(itemIndex)
{
    var itemEditNID="itemDelNImg"+itemIndex;
	var itemEditFID="itemDelFImg"+itemIndex;
	
	document.getElementById(itemEditNID).style.display="none";
	document.getElementById(itemEditFID).style.display="inline";
}

function unfocusItemDel(itemIndex)
{
    var itemEditNID="itemDelNImg"+itemIndex;
	var itemEditFID="itemDelFImg"+itemIndex;
	
	document.getElementById(itemEditFID).style.display="none";
	document.getElementById(itemEditNID).style.display="inline";
}
// item end

function treeBuild(obj, pos)
{
    //build tree directory and output HTML code
    if(pos=="end" && obj.constructor != Array)
    {
        GstrTreeStructor+="<tr><td style='padding-top:" + 5*times+ "; padding-bottom:" + 8*times +";'>";
    }
    else
    {
        GstrTreeStructor+="<tr><td style='padding-top:" + 5*times + ";'" +
		">";
    }

    if(obj.constructor==Array)
    {
        //new branch: recursion
        GintBranchCount++;

        var tabID="tab"+GintBranchCount;
        var imgID="img"+GintBranchCount; 
		var imgExtractID="imgEx"+GintBranchCount;
        var branchDelImgID="branchDelImg"+GintBranchCount; 
        //var branchEditImgID="branchEditImg"+GintBranchCount;
          
        var spanID="branchSpanID"+GintBranchCount;
        GarraySpanID.push(spanID);
		
		// edit
		var branchEditSpanID="branchEditSpanID"+GintBranchCount;
		var branchEditNID="branchEditNImg"+GintBranchCount;
		var branchEditFID="branchEditFImg"+GintBranchCount;
		
		// delete
		var branchDelSpanID="branchDelSpanID"+GintBranchCount;
		var branchDelNID="branchDelNImg"+GintBranchCount;
		var branchDelFID="branchDelFImg"+GintBranchCount;

        GstrTreeStructor += "<span id=MySpan " +  
		
		" onmouseout=\"hideSpan(" + "'" + spanID + "'" + ");\"" +
		" onmouseover=\"showSpan(" + "'" + spanID + "'" + ");\" >" +
		
		// 
		"<span onclick=\"menuExpand(" + GintBranchCount + ");\">" +
        "<img height=" +44*times + " style='display:inline'; align=absMiddle " + //add icon
		" border=0 id=" + imgID + 
        " src=" + GstrBookClose + " valign=middle />" +
		//    
        "<img height=" +44*times + "  style='display:none'; align=absMiddle " + //extract icon
		" border=0 id=" + imgExtractID + 
        " src=" + GstrBookOpen + " valign=middle />" ;
		//
		if(obj[0].name.length<=40)
		{
		    GstrTreeStructor +=obj[0].name;
		}
		else
		{
		     GstrTreeStructor +=obj[0].name.substring(0,40)+"...";
		}
        
		//
		
        GstrTreeStructor +="</span>" +
        "<span style=\"display:none\" id=\"" + spanID + "\">" +     
  
        // edite branch
		"<span id=\">" + branchEditSpanID + "\"" + 
		" onmouseover=\"focusBranchEdit(" + "'" + GintBranchCount + "'" + ");\"" +
		" onmouseout=\"unfocusBranchEdit(" + "'" + GintBranchCount + "'" + ");\"" +
		" onclick=\"editBranch(" + "'" + obj[0].uuid + "'" + ");\">" +
		
        "<img style='display:inline'; align=absMiddle border=0 id=" + branchEditNID + 
        " src=" + GstrEdit + " valign=middle />" +
		//
		"<img style='display:none'; align=absMiddle border=0 id=" + branchEditFID + 
        " src=" + GstrEditF + " valign=middle />" +
		
		"</span>" + 
		
        // delete branch  
		"<span id=\">" + branchDelSpanID + "\"" + 
		" onmouseover=\"focusBranchDel(" + "'" + GintBranchCount + "'" + ");\"" +
		" onmouseout=\"unfocusBranchDel(" + "'" + GintBranchCount + "'" + ");\"" +
		" onclick=\"deleteBranch(" + "'" + obj[0].uuid + "'" + ");\">" +
		      
        "<img style='display:inline'; align=absMiddle border=0 id=" + branchDelNID + 
        " src=" + GstrDelete + " valign=middle />"+
		//
		"<img style='display:none'; align=absMiddle border=0 id=" + branchDelFID + 
        " src=" + GstrDeleteF + " valign=middle />"+
		
		"</span>" + 
         "</span>" + 
        "</span>" + 
        "<table id=" + tabID + " border=0 cellpadding=0 cellspacing=0 style=\"position:relative; left:" +32*times + "; display:none;\">" ;

        for(var i = 1 ; i < obj.length ; i++)
        {
            if(i == (obj.length - 1))
            {
                treeBuild(obj[i], "end");
            }
            else
            {
                treeBuild(obj[i], "mid");
            }
        }
        GstrTreeStructor+="</table>";
    }
    else
    {
        // hypelink item
        GintItemCount++;
        var itemDelImgID="itemDelImg"+GintItemCount; 
        var itemEditImgID="itemEditImg"+GintItemCount; 
  
        var spanID="itemSpanID" + GintItemCount;
        GarraySpanID.push(spanID);
		
		// edit
		var itemEditSpanID="itemEditSpanID"+GintItemCount;
		var itemEditNID="itemEditNImg"+GintItemCount;
		var itemEditFID="itemEditFImg"+GintItemCount;
		
		// delete
		var itemDelSpanID="itemDelSpanID"+GintItemCount;
		var itemDelNID="itemDelNImg"+GintItemCount;
		var itemDelFID="itemDelFImg"+GintItemCount;
  
        GstrTreeStructor +=
        "<span id=MySpan onmouseover=\"showSpan(" + "'" + spanID + "'" + ");\"" +
		" onmouseout=\"hideSpan(" + "'" + spanID + "'" + ");\">" +
        "<span onclick=\"openBookmarkUrl(" + "'" + obj.link + "'" + ");\">" + 
		"<img height=" + 44*times + " align=absMiddle border=0 src=" + GstrPage + ">";
		if(obj.name.length<=40)
		{
		    GstrTreeStructor +=obj.name;
		}
		else
		{
		     GstrTreeStructor +=obj.name.substring(0,40)+"...";
		}
		GstrTreeStructor +="</span>"+
          
        "<span style=\"display:none\" id=\"" + spanID + "\">" +     
		
		// edite item
		"<span id=\">" + itemEditSpanID + "\"" + 
		" onmouseover=\"focusItemEdit(" + "'" + GintItemCount + "'" + ");\"" +
		" onmouseout=\"unfocusItemEdit(" + "'" + GintItemCount + "'" + ");\"" +
		" onclick=\"editItem(" + "'" + obj.uuid + "'" + ");\">" +
		
        "<img style='display:inline'; align=absMiddle border=0 id=" + itemEditNID + 
        " src=" + GstrEdit + " valign=middle />" +
		//
		"<img style='display:none'; align=absMiddle border=0 id=" + itemEditFID + 
        " src=" + GstrEditF + " valign=middle />" +
		
		"</span>" + 
		
		// delete item
		"<span id=\">" + itemDelSpanID + "\"" + 
		" onmouseover=\"focusItemDel(" + "'" + GintItemCount + "'" + ");\"" +
		" onmouseout=\"unfocusItemDel(" + "'" + GintItemCount + "'" + ");\"" +
		" onclick=\"deleteItem(" + "'" + obj.uuid + "'" + ");\">" +
		      
        "<img style='display:inline'; align=absMiddle border=0 id=" + itemDelNID + 
        " src=" + GstrDelete + " valign=middle />"+
		//
		"<img style='display:none'; align=absMiddle border=0 id=" + itemDelFID + 
        " src=" + GstrDeleteF + " valign=middle />"+
		
		"</span>" + 
        "</span>"+ 
        "</span>";
    };

    GstrTreeStructor+="</td></tr>";
}//end of treeBuild()

function treeShow()
{
    var arTree = new Array();

    treeCreate(arTree);
	
    GstrTreeStructor="<table id=tabTree border=0 cellspacing=0 cellpadding=0 align=left";
    GstrTreeStructor+=" style=\"position:relative; left:" + 6*times + "; visibility=hidden;\" >";
     
    for( i = 0 ; i < arTree.length - 1 ; i++)
    {
        treeBuild(arTree[i],"mid");
    }

    treeBuild(arTree[arTree.length-1],"end");

    GstrTreeStructor+="</table";	
	//alert(GarraySpanID.toString());

    document.write(GstrTreeStructor);
    //document.all.img1.click();
    document.all.tabTree.style.visibility="visible";
 
    initSpans();

	
} //end of treeShow()

function focusOnAddFolder()
{
    document.getElementById("addFolderN").style.display="none";
	document.getElementById("addFolderF").style.display="inline";
}

function unFocusOnAddFolder()
{
    document.getElementById("addFolderF").style.display="none";
    document.getElementById("addFolderN").style.display="inline";
}

function focusOnCloseBm()
{
    document.getElementById("closeBmN").style.display="none";
	document.getElementById("closeBmF").style.display="inline";
}

function unFocusOnCloseBm()
{
    document.getElementById("closeBmF").style.display="none";
    document.getElementById("closeBmN").style.display="inline";
}
function firstkeydown(event)
{
	var addFolderE = document.getElementById("addFolder");
	var closeBmE = document.getElementById("closeBM");
	if(event.keyCode == 37)//left
	{
		currentPos = 0;
	}
	else if(event.keyCode == 39)//right
	{
		currentPos = 1;
	}
	else if(event.keyCode == 38)//up
	{
		currentPos = 2;	
	}
	else if(event.keyCode == 40)//down
	{
		currentPos = 3;	
	}
	if(0 == currentPos)
	{
		addFolderE.style.background="url('../../img/bookmark_mngr/Topbutton_hi.png')";
		addFolderE.style.color="yellow";
		closeBmE.style.background="url('../../img/bookmark_mngr/Topbutton_Nor.png')";
		closeBmE.style.color="white";
	}
	else if(1 == currentPos)
	{
		addFolderE.style.background="url('../../img/bookmark_mngr/Topbutton_Nor.png')";
		addFolderE.style.color="white";
		closeBmE.style.background="url('../../img/bookmark_mngr/Topbutton_hi.png')";
		closeBmE.style.color="yellow";
	}
	else if(3 == currentPos)
	{
		addFolderE.style.background="url('../../img/bookmark_mngr/Topbutton_Nor.png')";
		addFolderE.style.color="white";
		closeBmE.style.background="url('../../img/bookmark_mngr/Topbutton_Nor.png')";
		closeBmE.style.color="white";
	}
	else if(2 == currentPos)
	{
			addFolderE.style.background="url('../../img/bookmark_mngr/Topbutton_hi.png')";
			addFolderE.style.color="yellow";
			closeBmE.style.background="url('../../img/bookmark_mngr/Topbutton_Nor.png')";
			closeBmE.style.color="white";
			addFolderE.focus();
			//opera.postError('487currentPos='+currentPos);
	}
}
function setCurLinkType(curlinktype)
{
	glasLinkType = gcurLinkType;
	gcurLinkType = curlinktype;
	var addFolderE = document.getElementById("addFolder");
	var closeBmE = document.getElementById("closeBM");
	//opera.postError('493curlinktype='+curlinktype);
	if(65542 == curlinktype && 2 == currentPos)
	{
			addFolderE.style.background="url('../../img/bookmark_mngr/Topbutton_hi.png')";
			addFolderE.style.color="yellow";
			closeBmE.style.background="url('../../img/bookmark_mngr/Topbutton_Nor.png')";
			closeBmE.style.color="white";
			addFolderE.focus();
			//opera.postError('501curlinktype='+curlinktype);
	}
}
function secondkeydown(event)
{
	var addFolderE = document.getElementById("addFolder");
	var closeBmE = document.getElementById("closeBM");
	//opera.postError('510lastElement.id'+lastElement.id);
	//opera.postError('511srcElement1.id'+srcElement1.id);
	if(event.keyCode == 38)//up
	{
		currentPos = 2;	
	}
	//opera.postError('516gcurLinkType='+gcurLinkType);
	if(65542 == gcurLinkType && 2 == currentPos)
	{
			addFolderE.style.background="url('../../img/bookmark_mngr/Topbutton_hi.png')";
			addFolderE.style.color="yellow";
			closeBmE.style.background="url('../../img/bookmark_mngr/Topbutton_Nor.png')";
			closeBmE.style.color="white";
			addFolderE.focus();
			//opera.postError('524currentPos='+currentPos);
	}
}
function openBookmarkUrl(url)
{
	operaController.showBookmarkManager('HIDE');
	operaController.openUrl(url);
}