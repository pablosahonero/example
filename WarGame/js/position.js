/**
 * This function is for define the X, Y position on the board, because that values are needed for
 * the ships positions and for the shots position
 * This function return to numeric values X and Y .
 */
var Position = function(x, y){
    var _x = x;
    var _y = y;

    /**
     * This function get the "x" position
     */
    this.getX = function(){
        return _x;
    };
    /**
     * This function get the "y" position
     */
    this.getY = function(){
        return _y;
    };

    /**
     * This function is same position
     */
    this.isSamePosition = function(x, y){
        if((_x == x) && (_y == y)){
          return true;
        };
        return false;
    };
};
