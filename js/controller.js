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

            view.draw(0);
            view.highlightPieces(game.getPieces());
        },

        highlight = function () {
            game.generateRandPieces();
            view.highlightPieces(game.getPieces());
        },

        addPiece = function () {
            //todo podawać jako parametr a nie 1 - i to z view - możliwość ustawienia ile dodajemy
            game.addPiece();
            view.draw(game.getLengthPieces());
            view.highlightPieces(game.getPieces());

        },

        changeColor = function (id) {
            var resultLevel = view.changeColor(id, game.getPieces(), game.getNumberToGuess());
            if(resultLevel !== 'CONTINUE') {
                setTimeout(function () {
                    var gameResult = game.checkResult(resultLevel);
                    view.applyResultOfGame(gameResult, game.getPieces());

                }, 1000);
            }

        };


    return {
        'startGame': startGame,
        'addPiece': addPiece,
        'changeColor': changeColor,
        'highlight': highlight

    };
}();