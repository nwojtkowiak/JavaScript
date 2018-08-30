let controller = function () {
    let startGame = function (numberOfPieces) {
            let initialNumberOfPieces = view.getInitialNumberOfPieces();
            if (numberOfPieces) {
                game.startGame(
                    {numberOfPieces: numberOfPieces}
                )
            } else {
                game.startGame(
                    {numberOfPieces: initialNumberOfPieces}
                )
            }

            //alert(initialNumberOfPieces);
            view.draw(0);
            view.highlightPieces(game.getPieces());
        },

        highlight = function(){
        game.generateRandPieces();
            view.highlightPieces(game.getPieces());
        },

        addPiece = function () {
            game.addPiece();
            view.draw(game.getLengthPieces()-1,1);
        },

        changeColor = function (id) {
            //alert("change color: "+id);
            view.changeColor(id,game.getPieces());
        };


    return {
        'startGame': startGame,
        'addPiece': addPiece,
        'changeColor' : changeColor,
        'highlight' : highlight

    };
}();