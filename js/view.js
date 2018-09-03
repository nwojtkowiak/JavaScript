'use strict'

var view = function () {
    var correctAnswers = [],
        timeout = 1000,
        getInitialNumberOfPieces = function () {
            return 4;
        },
        getDisplayTimeout = function () {
            var newTimeout = Number(document.getElementById("displayTime").value ) * 1000;
            timeout = newTimeout || timeout;
            return  timeout;
        },
        draw = function (num, numberToGuess, callbackChangeColor) {
            var i, element, piece;
            if (!num) {
                num = getInitialNumberOfPieces();
            }
            element = document.getElementById("pieces");
            element.innerHTML = "";
            for (i = 0; i < num; i++) {
                piece = document.createElement("div");

                piece.setAttribute("class", "piece");
                piece.setAttribute("id", i);
                piece.addEventListener("click", callbackChangeColor);
                element.appendChild(piece);
            }
            element = document.getElementById("toGuess");
            element.innerText = "To guess: " + numberToGuess.toString();

        },
        highlightPieces = function (pieces) {
            var id, element;
            for (id = 0; id < pieces.length; id++) {
                if (pieces[id].toGuess) {
                    element = document.getElementById(id.toString());
                    element.classList.add('marked');
                }
            }
            unHighlightPieces(pieces, 'marked');

        },
        unHighlightPieces = function (pieces, status) {

            correctAnswers = [];
            var piecesContainer, idElement;
            piecesContainer = document.getElementsByClassName("piece");

            for (idElement = 0; idElement < piecesContainer.length; idElement++) {
                piecesContainer.item(idElement).classList.add('blocked');
            }

            setTimeout(function () {
                var id, element;

                for (id = 0; id < pieces.length; id++) {
                    console.log("pieceId: " + id + " " + pieces[id].toGuess);
                    if (pieces[id].toGuess) {

                        element = document.getElementById(id.toString());
                        element.classList.remove(status);

                    }
                }

                for (idElement = 0; idElement < piecesContainer.length; idElement++) {
                    piecesContainer.item(idElement).classList.remove('blocked');
                }

                return true;
            }, getDisplayTimeout());
        },
        unHighlightPiece = function (pieceId) {
            correctAnswers = [];
            setTimeout(function () {
                var element;
                element = document.getElementById(pieceId);
                element.classList.remove('wrongAnswer');


            }, getDisplayTimeout());

        },
        setCorrectAnswer = function (element, pieces, numberToGuess) {
            element.classList.add('correctAnswer');

            if (correctAnswers.length === numberToGuess) {
                unHighlightPieces(pieces, 'correctAnswer');
                return 'END_LEVEL';
            }
            return 'CONTINUE';
        },

        setWrongAnswer = function (element, pieceId) {
            element.classList.add('wrongAnswer');
            unHighlightPiece(pieceId);
            return 'GAME_OVER';
        },

        changeColor = function (pieceId, pieces, numberToGuess) {
            function compareElements(element) {
                return element === this;
            }

            var element = document.getElementById(pieceId);

            if (pieces[pieceId].toGuess) {

                if (correctAnswers.some(compareElements, pieceId) === true) {
                    return setWrongAnswer(element, pieceId);
                }
                correctAnswers.push(pieceId);
                return setCorrectAnswer(element, pieces, numberToGuess);


            } else {
                return setWrongAnswer(element, pieceId);
            }
            return 'CONTINUE';

        },
        gameOver = function (numberToGuess, callbackChangeColor ) {
            var element = document.getElementById("result");
            var end = document.createElement("center");
            end.setAttribute("class", "end");
            end.innerHTML = "GAME OVER";
            element.appendChild(end);
            setTimeout(function () {
                end.innerHTML = '';
            },3000);
            draw(getInitialNumberOfPieces(), numberToGuess, callbackChangeColor);
        },
        applyResultOfGame = function (result, pieces, numberToGuess, callbackChangeColor) {
            if (result === false) {
                gameOver(numberToGuess, callbackChangeColor);
            } else {
                draw(pieces.length, numberToGuess,callbackChangeColor);
                highlightPieces(pieces);
            }
        };


    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'draw': draw,
        'changeColor': changeColor,
        'highlightPieces': highlightPieces,
        'gameOver': gameOver,
        'applyResultOfGame': applyResultOfGame
    };
}();