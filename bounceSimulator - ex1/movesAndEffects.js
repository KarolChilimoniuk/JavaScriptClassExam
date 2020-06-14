'use strict'

const moveTypes = require('./moveTypes');
const takeAndPutBall = require('./takeAndPutBall');
const showBoard = require('./showBoard');

class MovesAndEffects {
   fromUpLeftCorner = ( board, y, x) => {
    const newBallPosition = moveTypes.moveTypes.goDownRight(y, x);
        board[y][x] = takeAndPutBall.takeAndPut.takeBall();
        y = newBallPosition.y;
        x = newBallPosition.x;
        board[y][x] = takeAndPutBall.takeAndPut.putBall();
        showBoard.boardShow.showBoard(board);
        return {
            y: y,
            x: x
        }
    }
    fromDownLeftCorner = ( board, y, x) => {
    const newBallPosition = moveTypes.moveTypes.goUpRight(y, x);
        board[y][x] = takeAndPutBall.takeAndPut.takeBall();
        y = newBallPosition.y;
        x = newBallPosition.x;
        board[y][x] = takeAndPutBall.takeAndPut.putBall();
        showBoard.boardShow.showBoard(board);
        return {
            y: y,
            x: x
        }
    }
    fromUpRightCorner = ( board, y, x) => {
    const newBallPosition = moveTypes.moveTypes.goDownLeft(y, x);
        board[y][x] = takeAndPutBall.takeAndPut.takeBall();
        y = newBallPosition.y;
        x = newBallPosition.x;
        board[y][x] = takeAndPutBall.takeAndPut.putBall();
        showBoard.boardShow.showBoard(board);
        return {
            y: y,
            x: x
        }
    }
    fromDownRightCorner = ( board, y, x) => {
    const newBallPosition = moveTypes.moveTypes.goUpLeft(y, x);
        board[y][x] = takeAndPutBall.takeAndPut.takeBall();
        y = newBallPosition.y;
        x = newBallPosition.x;
        board[y][x] = takeAndPutBall.takeAndPut.putBall();
        showBoard.boardShow.showBoard(board);
        return {
            y: y,
            x: x
        }
    }
    downLeftFromRightWall = (board, y, x) => {
        const newBallPosition = moveTypes.moveTypes.goDownLeft(y, x);
        board[y][x] = takeAndPutBall.takeAndPut.takeBall();
        y = newBallPosition.y;
        x = newBallPosition.x;
        board[y][x] = takeAndPutBall.takeAndPut.putBall();
        showBoard.boardShow.showBoard(board);
        return {
            y: y,
            x: x
        }
    }
    upLeftFromRightWall = (board, y, x) => {
        const newBallPosition = moveTypes.moveTypes.goUpLeft(y, x);
        board[y][x] = takeAndPutBall.takeAndPut.takeBall();
        y = newBallPosition.y;
        x = newBallPosition.x;
        board[y][x] = takeAndPutBall.takeAndPut.putBall();
        showBoard.boardShow.showBoard(board);
        return {
            y: y,
            x: x
        }
    }
    upLeftFromDownWall = (board, y, x) => {
        const newBallPosition = moveTypes.moveTypes.goUpLeft(y, x);
        board[y][x] = takeAndPutBall.takeAndPut.takeBall();
        y = newBallPosition.y;
        x = newBallPosition.x;
        board[y][x] = takeAndPutBall.takeAndPut.putBall();
        showBoard.boardShow.showBoard(board);
        return {
            y: y,
            x: x
        }
    }
    upRightFromDownWall = (board, y, x) => {
        const newBallPosition = moveTypes.moveTypes.goUpRight(y, x);
        board[y][x] = takeAndPutBall.takeAndPut.takeBall();
        y = newBallPosition.y;
        x = newBallPosition.x;
        board[y][x] = takeAndPutBall.takeAndPut.putBall();
        showBoard.boardShow.showBoard(board);
        return {
            y: y,
            x: x
        }
    }
    upRightFromLeftWall = (board, y, x) => {
        const newBallPosition = moveTypes.moveTypes.goUpRight(y, x);
        board[y][x] = takeAndPutBall.takeAndPut.takeBall();
        y = newBallPosition.y;
        x = newBallPosition.x;
        board[y][x] = takeAndPutBall.takeAndPut.putBall();
        showBoard.boardShow.showBoard(board);
        return {
            y: y,
            x: x
        }
    }
    downRightFromLeftWall = (board, y, x) => {
        const newBallPosition = moveTypes.moveTypes.goDownRight(y, x);
        board[y][x] = takeAndPutBall.takeAndPut.takeBall();
        y = newBallPosition.y;
        x = newBallPosition.x;
        board[y][x] = takeAndPutBall.takeAndPut.putBall();
        showBoard.boardShow.showBoard(board);
        return {
            y: y,
            x: x
        }
    }
    downRightFromUpWall = (board, y, x) => {
        const newBallPosition = moveTypes.moveTypes.goDownRight(y, x);
        board[y][x] = takeAndPutBall.takeAndPut.takeBall();
        y = newBallPosition.y;
        x = newBallPosition.x;
        board[y][x] = takeAndPutBall.takeAndPut.putBall();
        showBoard.boardShow.showBoard(board);
        return {
            y: y,
            x: x
        }
    }
    downLeftFromUpWall = (board, y, x) => {
        const newBallPosition = moveTypes.moveTypes.goDownLeft(y, x);
        board[y][x] = takeAndPutBall.takeAndPut.takeBall();
        y = newBallPosition.y;
        x = newBallPosition.x;
        board[y][x] = takeAndPutBall.takeAndPut.putBall();
        showBoard.boardShow.showBoard(board);
        return {
            y: y,
            x: x
        }
    }
}

const movesAndEffects = new MovesAndEffects();
module.exports = {
    movesAndEffects: movesAndEffects
}