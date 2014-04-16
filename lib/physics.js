//Colliding
var isCollidingCB = function(first,second)
{
    return first.y + first.height > second.y && first.x + first.width > second.x  && first.x< second.x + second.width && first.y< second.y + second.height;
};

//var isCollidingCBAbove = function(first,second)
