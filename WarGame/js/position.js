/**
 * This function is for define the X, Y position on the board, because that values are needed for
 * the ships positions and for the shots position
 * This function return to numeric values X and Y.
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
