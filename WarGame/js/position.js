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