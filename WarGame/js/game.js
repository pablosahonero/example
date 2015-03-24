/**
 * Created by Samuel Vargas on 3/24/2015.
 */
function Game(player, id, board )
{

    var _player=player ;
    var _id=id;
    var _board=board;

    //Metodo de la clase Game

    this.getPlayer =function()
    {
        return player;
    };

    this.getId=function()
    {
        return id;
    };
//comentjdggg
    this.getBoard = function()
    {
        return board;
    };

    function startGame(player, ships, board)
    {
        getPlayer(player);
        getShips(ships);
        getBoard(size);
    }
    var game1=new Game('Jhon',1,8);
    game1.getBoard();
    game1.getId();
    game1.getPlayer();

    game1.setBoard();
    game1.setPlayer();
    geme1.setId();

}