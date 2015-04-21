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
        if(status==undefined){
            throw("Error: enter a status");
        };

        if(typeof status == "number"){
            throw("Error: enter a status");
        };

        _status = status;
    };
};