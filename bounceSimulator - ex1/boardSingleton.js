'use strict'

const createBoard = ( function () {
    let instance;
    class Board {
        constructor(board) {
            this.board = board
        }
    }

    return {
        newBoard: (board) => {
            return new Board(board);
        }
    }
}) ();

module.exports = {
    createBoard: createBoard
}

