'use strict'

const createBoard = require('./boardSingleton');
const moveBall = require('./boardHandler');


const board = createBoard.createBoard.newBoard([
    ["X", "X", "X", "X", "X", "X", "X"],
    ["X", "1", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "X", "X", "X", "X", "X", "X"]
]);

moveBall.moveBall.ballMoving(board.board);

