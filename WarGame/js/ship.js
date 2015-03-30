/**
 * Created by Pablo Sahonero on 3/24/2015.
 */

var Ship = function(id)
{
    var _id = id;
    var _length = 0;
    var _orientation = 0;
    var _board;
    var start;
    var end;

    var location = new Array();
    location.push();

    var initializeShip = function(){
        var x = Math.floor((Math.random() * board.getSize()) + 1);
        var y = Math.floor((Math.random() * board.getSize()) + 1);
        _orientation = Math.floor((Math.random() * 2) + 1);


        start = {
          "x" : x,
          "y" : y
        };

        end = {
            "x" : x,
            "y" : y
        };

        location.push(position);
        fillShipPosition(Math.floor((Math.random() * MAX_LENGTH) + 1) - 1);
        _length = location.length;

    };


    var fillShipPosition = function(length)
    {
        if(length > 0) {
            if (_orientation == VERTICAL) {
                if (y + 1 < board.lenght - 1) {
                    var position = {
                        "x": start.x,
                        "y": start.y + 1
                    };
                }
                else {
                    var position = {
                        "x": end.x,
                        "y": end.y - 1
                    };
                }
                location.push(position);
            }
            else {
                if (x + 1 < board.lenght - 1) {
                    var position = {
                        "x": start.x + 1,
                        "y": start.y
                    };
                }
                else {
                    var position = {
                        "x": end.x - 1,
                        "y": end.y
                    };
                }
                location.push(position);
            }
        }

        fillShipPosition(length - 1);
    };
};