/**
 * Created by Samuel Vargas on 3/29/2015.
 */
var Player = function(id){
    var _id = id;
    var _score = 0;
    var _ships = new Array();

    this.getShips = function(){
        return _ships;
    };

    this.createShips = function(){
        for(var i = 0; i < 4; i++){
            var ship = new Ship();
            ship.initializeShip();
            _ships.push(ship);
        };
    };

    this.displayPlayer = function(){
        console.log('Player ' + _id + ' : ' + _score +' pts');
    };

    this.displayShips = function(){
        for(var i = 0; i < 4; i++){
            console.log("Ship " + i + " :");
            _ships[i].displayLocation();
        };
    };
};
