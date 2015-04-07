/**
 * Created by Milenca Ventura on 3/31/2015.
 */

/* */
var Shot = function(x, y, status, destinationPlayer) {
    var _x = x;
    var _y = y;
    var _destinationPlayer = destinationPlayer;
    var _status = status;

    this.setStatus = function(status){
        _status = status;
    };
};