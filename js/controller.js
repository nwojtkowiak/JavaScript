'use strict'

var controller = function () {
    var startGame = function (numberOfPieces) {
            var initialNumberOfPieces = view.getInitialNumberOfPieces();
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
        //todo podawać jako parametr a nie 1 - i to z view - możliwość ustawienia ile dodajemy
            game.addPiece();
            view.draw(game.getLengthPieces()-1,1);
        },

        changeColor = function (id) {
            //alert("change color: "+id);
            var resultLevel = view.changeColor(id,game.getPieces(), game.getNumberToGuess());
           /*if(game.checkResult(resultLevel) === false) {
               view.gameOver();
            }else{
                view.draw(game.getLengthPieces(),1);
            }*/
        };


    return {
        'startGame': startGame,
        'addPiece': addPiece,
        'changeColor' : changeColor,
        'highlight' : highlight

    };
}();