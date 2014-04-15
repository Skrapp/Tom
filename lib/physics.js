//Colliding
var isCollidingCB = function(first,second)
{
    return first.y + first.height/2 > second.y && first.x + first.width/2 > second.x  && first.x - first.width/2 < second.x + second.width && first.y - first.height/2< second.y + second.height;
};