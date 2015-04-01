/**
 * This function is for initilize the player and his attributes (name, id, score) ahd his ships
 */
    var Player = function(id){
    var _id = id;
    var _score = 0;
    var _ships = new Array();
/*
* this variable is for send the correct result to the player
* @type {bool}
* */

    this.getShips = function(){
        return _ships;
    };
/**
 * This function is for create ships and works with the "function ships"
 */
    this.createShips = function(){
        for(var i = 0; i < 4; i++){
            var ship = new Ship();
            ship.initializeShip();
            _ships.push(ship);
        };
    };
/**
 * This function is for display in console the name, id and score of the player.
 */
    this.displayPlayer = function(){
        console.log('Player ' + _id + ' : ' + _score +' pts');
    };
/**
 * This function is for diaplay in console the ships and its location
 */
    this.displayShips = function(){
        for(var i = 0; i < 4; i++){
            console.log("Ship " + i + " :"); 
            _ships[i].displayLocation();
        };
    };
};

