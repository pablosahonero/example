/**
 * Created by Samuel Vargas on 3/24/2015.
 */
var Game = function (name, players, size)// be careful with the size, size = 10
{
    var _name = name;
    var _boards = Array();
    var _players = players;
    var _size = size;

    this.startGame = function(){
        for(var i = 0; i < _players; i++){
            var board = new Board(i, _size);
            board.initializeBoard();
            _boards.push(board);

        };
    };

    this.displayGame = function(){
        for(var i = 0; i < _boards.length; i++){
            _boards[i].displayBoard();
        };
    };
};