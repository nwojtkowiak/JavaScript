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

            alert(initialNumberOfPieces);
        },
        addPiece = function () {
            game.addPiece();
        };



    return {
        'startGame': startGame,
        'addPiece': addPiece

    };
}();