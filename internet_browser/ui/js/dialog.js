$(function()
{
    var $write = $('#write');

    $write.html("");

    $('#keyboard li').click(function()
    {
        var $this = $(this);
		
        // Add
        if ($this.hasClass('Add'))
        {
            return false;
        }

        // Cancel
        if ($this.hasClass('Cancel'))
        {
            // Hide the bookmark dialog
            operaController.showBookmarkDialog('HIDE');
        }
    
        // Add the character
        $write.html($write.html() + character);
    });
});