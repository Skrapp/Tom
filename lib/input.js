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

    this.keyCodes = 
    {
        up: 38,
        down: 40,
        right: 39, 
        left: 37,
        w: 87,
        s: 83,
        a: 65, 
        d: 68


    }

}

var input = new Input();