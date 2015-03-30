/**
 * This function is for define the X, Y position on the board, because we need reuse that position for the 
 * ships and for the shots.
 */
var Position = function(x, y){
    var _x = x;
    var _y = y;

    this.getX = function(){
        return _x;
    };

    this.getY = function(){
        return _y;
    };
};
