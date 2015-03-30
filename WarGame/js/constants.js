var CONST = (function() {
    var private = {
        'MAX_SHIP_SIZE': 4,
        'TOTAL_SHIPS': 10,
        'BOARD_SIZE_MAX': 20,
        'BOARD_SIZE_MIN': 10,
        'GAME_TURNS': 20,
        'FREE_SPACE': 0,
        'SHIP_SPACE': 1,
        'SHOT_SPACE': 2
    };

    return {
        get: function(key) { return private[key]; }
    };
})();