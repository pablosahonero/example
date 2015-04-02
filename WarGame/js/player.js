/**
 * This function is for initialize the player and his attributes (name, id, score) ahd his ships
 */
var Player = function(id){
    var _id = id;
    var _score = 0;
    var _board = new Board(_id);

    /**
     * This function is for displaying in console the name, id and score of the player.
     */
    this.displayBoard = function(){
        console.log('Player ' + _id + ' : ' + _score +' pts');
        _board.displayBoard();
    };

    this.initializePlayer = function(){
        _board.initializeBoard();
    };

    this.addShot = function(x, y){
        _board.addShot(x, y);
    };

    this.locateShot = function(x, y){
        _board.locateShot(x, y);
    };

};
