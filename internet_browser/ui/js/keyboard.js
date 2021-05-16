
var $write = $('#write');

function changeInputType(input_type)
{
	document.getElementById("write").type=input_type;
}

function clearInputText(text){
    document.getElementById("write").value=text;
    document.getElementById("write").focus();
}

//add character at cursor position
var addToWriteOnPos=function(character)
{   
    var startPos = $write[0].selectionStart;
    var endPos = $write[0].selectionEnd;
    var scrollTop = $write[0].scrollTop;
    var content = document.getElementById("write").value;
    
    if ($write[0].selectionStart || $write[0].selectionStart =='0')
    {
        content = content.substring(0, startPos) + character + content.substring(endPos, content.length);
    }
    else
    {
        content = content + character;
    }
    
    document.getElementById("write").value=content;
    $write[0].selectionStart = startPos + character.length;
    $write[0].selectionEnd = startPos + character.length;
    $write[0].scrollTop = scrollTop; 
}

var delWriteContentOnPos=function()
{
    if ($write[0].selectionStart>=0)
    {
        var startPos = $write[0].selectionStart;
        var endPos = $write[0].selectionEnd;
        var scrollTop = $write[0].scrollTop;
		var content = document.getElementById("write").value;
       
        if(startPos==endPos)
        {
            startPos=startPos-1;
            if(startPos<0)
                startPos=0;
        }
		content = content.substring(0, startPos) + content.substring(endPos, content.length);
		
		document.getElementById("write").value=content;
        $write[0].selectionStart = startPos;
        $write[0].selectionEnd = startPos;
        $write[0].scrollTop = scrollTop;
    }
    else if($write[0].selectionStart<0)
    {
        $write[0].selectionStart = 0;
        $write[0].selectionEnd = 0;
        $write[0].scrollTop = 0;
    }
}

$(function()
  {
      var shift = false, capslock = false;  
      document.getElementById("write").value="";

      $('#keyboard li').click(function()
                              {
                                  var $this = $(this), character = $this.html(); // If it's a lowercase letter, nothing happens to this variable

                                  // Enter
                                  if ($this.hasClass('return'))
                                  {
                                      $write.focus();
                                      $write.select();

                                      // Copy to the clipboard
                                      operaController.toClipboard(document.getElementById("write").value);

                                      return false;
                                  }

                                  // Reset
                                  if ($this.hasClass('reset'))
                                  {
           							  document.getElementById("write").value="";
                                      return false;
                                  }

                                  // Shift keys
                                  if ($this.hasClass('left-shift'))
                                  {
                                      $('.letter').toggleClass('uppercase');
                                      $('.symbol span').toggle();

                                      shift = (shift === true) ? false : true;     
                                      capslock = false;

                                      return false;
                                  }

                                  // Caps lock
                                  if ($this.hasClass('capslock'))
                                  {
                                      $('.letter').toggleClass('uppercase');
                                      capslock = true;
                                      return false;
                                  }

                                  // Delete
                                  if ($this.hasClass('delete')) {
                                      delWriteContentOnPos();
                                      return false;
                                  }

                                  // Special characters
                                  if ($this.hasClass('symbol')) 
                                  {
                                      character = $('span:visible', $this).html();
                                  }
						        if ($this.hasClass('space')) character = ' ';
						        if ($this.hasClass('tab')) character = '    ';

                                  // Uppercase letter
                                  if ($this.hasClass('uppercase')) character = character.toUpperCase();
                                  
                                  // Remove shift once a key is clicked.
                                  if (shift === true)
                                  {
                                      $('.symbol span').toggle();
                                      if (capslock === false) $('.letter').toggleClass('uppercase');

                                      shift = false;
                                  }

                                  // Add the character
                                  addToWriteOnPos(character);
                                  return false;
                              });
  });
