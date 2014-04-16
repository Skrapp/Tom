//Colliding
var isCollidingCB = function(first,second)
{
    return first.y + first.height > second.y && first.x + first.width > second.x  && first.x< second.x + second.width && first.y< second.y + second.height;
};

var isLeft = function(left,right)
{
    return left.x < right.x;
};

var isAbove = function(above,under)
{
    return above.y < under.y;
};

var isUnder = function(under,above)
{
    return under.y > above.y;
};

var isRight = function(right, left)
{
    return right.x > left.x;
}