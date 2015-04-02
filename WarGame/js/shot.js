/**
 * Created by Milenca Ventura on 3/31/2015.
 */

var Shot = function(x, y, destination) {
    var _x = x;
    var _y = y;
    var destination = destination;
    var _status = CONST.get('NONE');

    this.setStatus = function(status){
        _status = status;
    };

};