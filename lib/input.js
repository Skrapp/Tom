var Input = function() 
{
    this.kb = {};
    this.unicode_mapping = {};

    document.onkeydown = function(e)
    {
        var key = e.charCode? e.charCode : e.keyCode
        input.kb[key] = true;
    }

    document.onkeyup = function(e)
    {
        var key = e.charCode? e.charCode : e.keyCode
        delete input.kb[key];
    }

    this.keyIsPressed = function(key)
    {
    	return this.kb[key];
    }
}

var input = new Input();