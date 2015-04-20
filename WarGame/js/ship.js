/**
 * Created by Pablo Sahonero on 3/24/2015.
 */
var Ship = function(){

    var _status = CONST.get('SAFE');
    /**
     * Represents the location of Ship based on Positions
     * @type {Array}
     */
    var _location;
    /**
     * Represents the Ship orientation in the Board
     * @type {number}
     */
    var _orientation;

    /**
     * Represents first position of the Ship
     * @type {Position}
     */
    var _startPosition;

    /**
     * Represents last position of the Ship
     * @type {Position}
     */
    var _endPosition;

    /**
     * Returns the Ship's location
     * @return {Array}
     */
    this.getLocation = function(){
        return _location;
    };

    this.setStatus = function(status){
        _status = status;
    };

    /**
     * Initializes the Ship orientation and location
     */
    this.initializeShip = function(){
        //length from 1 block up to 4 (should be a constant)
        _orientation = Math.floor((Math.random() * 2) + 1);
        _location = new Array();
        this.setLocation(Math.floor((Math.random() * CONST.get('MAX_SHIP_SIZE')) + 1));
    };

    /**
     * Sets the Ship's location  based on an Array of Positions
     *
     */
    this.setLocation = function(l){
        var length = l;
        if(_location.length == 0){

            var position = new Position(Math.floor(Math.random() * CONST.get('BOARD_SIZE'))+0, Math.floor(Math.random() * CONST.get('BOARD_SIZE'))+0);
            _location.push(position);
            _startPosition = position;
            _endPosition = position;
            length = length -1;
        };

        if(length > 0){
            if(_orientation == CONST.get('VERTICAL'))//vertical
            {
                if(_startPosition.getY()-1 >= 0){

                    var position = new Position(_startPosition.getX(), _startPosition.getY()-1);

                    _location.push(position);
                    _startPosition = position;
                }else{
                    if(_endPosition.getY()+1 <= CONST.get('BOARD_SIZE')){
                        var position = new Position(_endPosition.getX(), _endPosition.getY()+1);

                        _location.push(position);
                        _endPosition = position;
                    }
                }
            }else{
                if(_startPosition.getX()-1 >= 0){

                    var position = new Position(_startPosition.getX()-1, _startPosition.getY());

                    _location.push(position);
                    _startPosition = position;
                }else{
                    if(_endPosition.getX()+1<= CONST.get('BOARD_SIZE')){
                        var position = new Position(_endPosition.getX()+1, _endPosition.getY());

                        _location.push(position);
                        _endPosition = position;
                    }
                }
            }
            this.setLocation(length-1);
        };
    };

    /**
     * Displays the location of the Ship based in Positions
     *
     */
    this.displayLocation = function(){
        for (var i = 0; i < _location.length; i++) {
            console.log("cell " + i +   ": " + "x = "+_location[i].getX() + "; y = " + _location[i].getY());
        };
    };
    /**
     * Displays the location of the Ship based in Positions
     *
     */
    this.displayLocation = function(){
        for (var i = 0; i < _location.length; i++) {
            console.log("cell " + i +   ": " + "x = "+_location[i].getX() + "; y = " + _location[i].getY());
        };
    };

    this.isShipHit = function(x, y){
        for(var i = 0; i < _location.length-1; i++){
            if(_location[i].isSamePosition(x, y)){
                return true;
            };
        };
        return false;
    }
};