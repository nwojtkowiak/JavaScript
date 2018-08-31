'use strict'

var game = (function () {

    var initialNumberOfPieces = 4,
        level = 0,
        points = 0,
        randPieces = [],
        pieces = [],
        currentOfPieces,
        numberToGuess = 1,
        lifes = 1,


        countNumberOfHighlight = function () {
            numberToGuess = game.getLengthPieces() - 3 - game.getLevel();
        },

        randPiece = function () {
            var rand = Math.random() * game.getLengthPieces();
            return Math.ceil(rand - 1);
        },

        generateRandPieces = function () {
            countNumberOfHighlight();
            var rand, i;
            console.log("randNumbers: " + numberToGuess);

            randPieces = [];

            for (i = 0; i < numberToGuess; i++) {
                do {
                    rand = randPiece();
                } while (randPieces.includes(rand));
                console.log("RAND: " + rand);
                randPieces.push(rand);

            }
        },

        setPieces = function () {
            var id;
            pieces = [];
            for (id = 0; id < currentOfPieces; id++) {
                pieces.push({});
                pieces[id].toGuess = false;
            }
            return pieces;
        },

        increaseLevel = function () {
            var level = game.getLevel() + 1;
            game.setLevel(level);

        },

        getRandPieces = function () {

            return randPieces;
        },

        getPieces = function () {
            var id;

            for (id = 0; id < currentOfPieces; id++) {

                if (randPieces.includes(id)) {
                    pieces[id].toGuess = true;
                } else {
                    pieces[id].toGuess = false;
                }
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
            generateRandPieces();
        },
        addPiece = function () {
            currentOfPieces++;
            level++;
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
        },
        getNumberToGuess = function () {
            return numberToGuess;
        }
        ,
        checkResult = function (result) {
            if(checkResult){
                addPiece();
                return true;
            }else{
                if(--lifes === 0){
                    return false;
                }
            }
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
        'randPiece': randPiece,
        'getRandPieces': getRandPieces,
        'generateRandPieces': generateRandPieces,
        'getNumberToGuess' : getNumberToGuess,
        'checkResult' : checkResult

    }
})();