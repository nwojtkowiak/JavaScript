let game = (function () {

    let initialNumberOfPieces = 4,
        level = 0,
        currentOfPieces,

        setPieces = function () {
            let i, pieces = [];

            for (i = 0; i < currentOfPieces; i++) {
                pieces.push({});
                pieces[i].toGuess = false;
            }

            return pieces;
        },
        increaseLevel = function () {
            let level = game.getLevel() + 1;
            game.setLevel(level);

        },countNumberOfHighlight = function () {
            return game.getLengthPieces() - 3 - game.getLevel();
        },


        randPiece = function () {
            return Math.floor(Math.random() * (game.getLengthPieces() - 1) + 1);
        },
        getPieces = function () {
            let i, pieces = [];
            let randNumbers = countNumberOfHighlight();
            console.log("randNumbers: " +randNumbers);
            let rand;
            for (i = 0; i < currentOfPieces; i++) {
                pieces.push({});
            }

            for (i = 0; i < randNumbers; i++) {
                rand = randPiece();
                pieces[rand].toGuess = true;
            }
            return pieces;
        },


        startGame = function (config) {
            if (config && config.numberOfPieces) {
                currentOfPieces = config.numberOfPieces;
            } else {
                currentOfPieces = initialNumberOfPieces;
            }
            level = 0;
            setPieces();
        },
        addPiece = function(){
            currentOfPieces = currentOfPieces + 1;
            setPieces();

        },
        getLengthPieces = function () {
            return currentOfPieces;
        },

        getLevel = function () {
            return level;
        },
        setLevel = function (newLevel) {
            level = newLevel;
        };

    return {
        'startGame': startGame,
        'addPiece': addPiece,
        'getPieces': getPieces,
        'setPieces': setPieces,
        'getLengthPieces': getLengthPieces,
        'getLevel': getLevel,
        'setLevel': setLevel,
        'increaseLevel': increaseLevel,
        'countNumberOfHighlight': countNumberOfHighlight,
        'randPiece' : randPiece

    }
})();