'use strict'

const movesAndEffects = require('./movesAndEffects');

class MovingBall {
  ballMoving = (board) => {
    let y = 1;
    let x = 1;
    let flag = 1;
    let previousY;
    let previousX;
    while(flag > 0) {
      if(board[y-1][x-1] === "X" && board[y-1][x+1] === "X" && board[y+1][x-1] === "X") {
        let stop = false;
        while(stop === false) {
          const wholeBallMove = movesAndEffects.movesAndEffects.fromUpLeftCorner(board, y, x);
          y = wholeBallMove.y;
          x = wholeBallMove.x;
          if(board[y+1][x+1] === "X") {
            previousY = y-1;
            previousX = x-1;
            break;
          }
        }
      } else if (board[y-1][x+1] === "X" && board[y-1][x-1] !== "X" && board[y+1][x-1] !== "X" && board[y+1][x+1] === "X") {
        if(previousY === y-1 && previousX === x-1) {
          let stop = false;
          while(stop === false) {
            const wholeBallMove = movesAndEffects.movesAndEffects.  downLeftFromRightWall(board, y, x);
            y = wholeBallMove.y;
            x = wholeBallMove.x;
            if(board[y+1][x-1] === "X") {
              previousY = y-1;
              previousX = x+1;
              break;
            }
          }
        } else if(previousY === y+1 && previousX === x-1) {
          let stop = false;
          while(stop === false) {
            const wholeBallMove = movesAndEffects.movesAndEffects.upLeftFromRightWall(board, y, x);
            y = wholeBallMove.y;
            x = wholeBallMove.x;
            if(board[y-1][x-1] === "X") {
              if(y === 1 && x === 1) {
                flag = 0;
              }
              previousY = y+1;
              previousX = x+1;
              break;
            }
          }
        }
      } else if (board[y-1][x-1] !== "X" && board[y-1][x+1] !== "X" && board[y+1][x-1] === "X" && board[y+1][x+1] === "X") {
          if(previousY === y-1 && previousX === x+1) {
            let stop = false;
            while(stop === false) {
              const wholeBallMove = movesAndEffects.movesAndEffects.   upLeftFromDownWall(board, y, x);
              y = wholeBallMove.y;
              x = wholeBallMove.x;
              if(board[y-1][x-1] === "X") {
                previousY = y+1;
                previousX = x+1;
                break;
              }
            }
          } else if (previousY === y-1 && previousX === x-1) {
            let stop = false;
            while(stop === false) {
              const wholeBallMove = movesAndEffects.movesAndEffects.  upRightFromDownWall(board, y, x);
              y = wholeBallMove.y;
              x = wholeBallMove.x;
              if(board[y-1][x+1] === "X") {
                previousY = y+1;
                previousX = x-1;
                break;
              }
            }
          }
        } else if (board[y-1][x-1] === "X" && board[y-1][x+1] !== "X" && board[y+1][x-1] === "X" && board[y+1][x+1] !== "X") {
          if(previousY === y+1 && previousX === x+1) {
            let stop = false;
            while(stop === false) {
              const wholeBallMove = movesAndEffects.movesAndEffects.  upRightFromLeftWall(board, y, x);
              y = wholeBallMove.y;
              x = wholeBallMove.x;
              if(board[y-1][x+1] === "X") {
                previousY = y+1;
                previousX = x-1;
                break;
              }
            }
          } else if(previousY === y-1 && previousX === x+1) {
            let stop = false;
            while(stop === false) {
              const wholeBallMove = movesAndEffects.movesAndEffects.  downRightFromLeftWall(board, y, x);
              y = wholeBallMove.y;
              x = wholeBallMove.x;
              if(board[y+1][x+1] === "X") {
                previousY = y-1;
                previousX = x-1;
                break;
              }
            }
          }
        } else if (board[y-1][x-1] === "X" && board[y-1][x+1] === "X" && board[y+1][x-1] !== "X" && board[y+1][x+1] !== "X") {
          if(previousY === y+1 && previousX === x-1) {
            let stop = false;
            while(stop === false) {
              const wholeBallMove = movesAndEffects.movesAndEffects.  downRightFromUpWall(board, y, x);
              y = wholeBallMove.y;
              x = wholeBallMove.x;
              if(board[y+1][x+1] === "X") {
                previousY = y-1;
                previousX = x-1;
                break;
              }
            }
          } else if(previousY === y+1 && previousX === x+1) {
            let stop = false;
            while(stop === false) {
              const wholeBallMove = movesAndEffects.movesAndEffects.  downLeftFromUpWall(board, y, x);
              y = wholeBallMove.y;
              x = wholeBallMove.x;
              if(board[y+1][x-1] === "X") {
                previousY = y-1;
                previousX = x+1;
                break;
              }
            }
          }
        } else if(board[y-1][x-1] === "X" && board[y-1][x+1] === "X" && board[y+1][x+1] === "X" && board[y+1][x-1] !=="X") {
          let stop = false;
          while(stop === false) {
            const wholeBallMove = movesAndEffects.movesAndEffects.fromUpRightCorner(board, y, x);
            y = wholeBallMove.y;
            x = wholeBallMove.x;
            if(board[y+1][x-1] === "X") {
              previousY = y-1;
              previousX = x+1;
              break;
            }
          }
        } else if(board[y-1][x-1] === "X" && board[y-1][x+1] !== "X" && board[y+1][x-1] === "X" && board[y+1][x+1] ==="X") {
          let stop = false;
          while(stop === false) {
            const wholeBallMove = movesAndEffects.movesAndEffects.fromDownLeftCorner(board, y, x);
            y = wholeBallMove.y;
            x = wholeBallMove.x;
            if(board[y-1][x+1] === "X") {
              previousY = y+1;
              previousX = x-1;
              break;
            }
          }
        } else if(board[y-1][x-1] !== "X" && board[y-1][x+1] === "X" && board[y+1][x+1] === "X" && board[y+1][x-1] ==="X") {
          let stop = false;
          while(stop === false) {
            const wholeBallMove = movesAndEffects.movesAndEffects.fromDownRightCorner(board, y, x);
            y = wholeBallMove.y;
            x = wholeBallMove.x;
            if(board[y-1][x-1] === "X") {
              previousY = y+1;
              previousX = x+1;
              break;
            }
          }
        }
    }  
  }
}

const moveBall = new MovingBall();

module.exports = {
    moveBall: moveBall
}