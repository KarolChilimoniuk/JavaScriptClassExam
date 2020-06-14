const movesAndEffects = require('./movesAndEffects');
const showBoard = require('./showBoard');
const setFirstNextCell = require('./findFirstNextCell');

class MovingBall {
  findBall = (board) => {
    const params = {
      y: 0,
      x: 0
    }
    let row = 0;
    while(row < board.length) {
      let column = 0;
      while(column < board[row].length) {
        if(board[row][column] === "1") {
          params.y = row;
          params.x = column
          break;
        }
        column++;
      }
      if(params.y !== 0 && params.x !== 0) {
        break;
      }
      row++;
    }
    return params;
  }

  ballMoving = (board) => {
    const ballParams = this.findBall(board);
    let y = ballParams.y;
    let x = ballParams.x;
    let flag = 1;
    let yParams = {};
    let previousY;
    let previousX;
    let moveCounter = 0;
    const nextCellParams = setFirstNextCell.firstNextCell.findCell(board, y, x);
    let nextCell = board[nextCellParams.y][nextCellParams.x];
    while(flag > 0) { 
      if (board[y-1][x+1] === "X" && board[y-1][x-1] !== "X" && board[y+1][x-1] !== "X" && board[y+1][x+1] === "X" && nextCell !== "Y") {
        if(previousY === y-1 && previousX === x-1) {
          let stop = false;
          while(stop === false) {
            const newBallParameters = movesAndEffects.movesAndEffects.downLeftFromRightWall(board, y, x);
            y = newBallParameters.y;
            x = newBallParameters.x;
            const nextStep = board[y+1][x-1];
            if(nextStep === "X" || nextStep === "Y") {
              previousY = y-1;
              previousX = x+1;
              yParams.y = y+1;
              yParams.x = x-1;
              nextCell = nextStep;
              break;
            }
          }
        } else if(previousY === y+1 && previousX === x-1) {
          let stop = false;
          while(stop === false) {
            const newBallParameters = movesAndEffects.movesAndEffects.upLeftFromRightWall(board, y, x);
            y = newBallParameters.y;
            x = newBallParameters.x;
            const nextStep = board[y-1][x-1];
            if(nextStep === "X" || nextStep === "Y") {
              if(y === 1 && x === 1) {
                flag = 0;
              }
              previousY = y+1;
              previousX = x+1;
              yParams.y = y-1;
              yParams.x = x-1;
              nextCell = nextStep;
              break;
            }
          }
        }
      } else if (board[y-1][x-1] !== "X" && board[y-1][x+1] !== "X" && board[y+1][x-1] === "X" && board[y+1][x+1] === "X" && nextCell !== "Y") {
          if(previousY === y-1 && previousX === x+1) {
            let stop = false;
            while(stop === false) {
              const newBallParameters = movesAndEffects.movesAndEffects.   upLeftFromDownWall(board, y, x);
              y = newBallParameters.y;
              x = newBallParameters.x;
              const nextStep = board[y-1][x-1];
              if(nextStep === "X" || nextStep === "Y") {
                previousY = y+1;
                previousX = x+1;
                yParams.y = y-1;
                yParams.x = x-1;
                nextCell = nextStep;
                break;
              }
            }
          } else if (previousY === y-1 && previousX === x-1) {
            let stop = false;
            while(stop === false) {
              const newBallParameters = movesAndEffects.movesAndEffects.  upRightFromDownWall(board, y, x);
              y = newBallParameters.y;
              x = newBallParameters.x;
              const nextStep = board[y-1][x+1];
              if(nextStep === "X" || nextStep === "Y") {
                previousY = y+1;
                previousX = x-1;
                yParams.y = y-1;
                yParams.x = x+1;
                nextCell = nextStep;
                break;
              }
            }
          }
        } else if (board[y-1][x-1] === "X" && board[y-1][x+1] !== "X" && board[y+1][x-1] === "X" && board[y+1][x+1] !== "X" && nextCell !== "Y") {
          if(previousY === y+1 && previousX === x+1) {
            let stop = false;
            while(stop === false) {
              const newBallParameters = movesAndEffects.movesAndEffects.  upRightFromLeftWall(board, y, x);
              y = newBallParameters.y;
              x = newBallParameters.x;
              const nextStep = board[y-1][x+1];
              if(nextStep === "X" || nextStep === "Y") {
                previousY = y+1;
                previousX = x-1;
                yParams.y = y-1;
                yParams.x = x+1;
                nextCell = nextStep;
                break;
              }
            }
          } else if(previousY === y-1 && previousX === x+1) {
            let stop = false;
            while(stop === false) {
              const newBallParameters = movesAndEffects.movesAndEffects.  downRightFromLeftWall(board, y, x);
              y = newBallParameters.y;
              x = newBallParameters.x;
              const nextStep = board[y+1][x+1];
              if(nextStep === "X" || nextStep === "Y") {
                previousY = y-1;
                previousX = x-1;
                yParams.y = y+1;
                yParams.x = x+1;
                nextCell = nextStep;
                break;
              }
            }
          }
        } else if (board[y-1][x-1] === "X" && board[y-1][x+1] === "X" && board[y+1][x-1] !== "X" && board[y+1][x+1] !== "X" && nextCell !== "Y") {
          if(previousY === y+1 && previousX === x-1) {
            let stop = false;
            while(stop === false) {
              const newBallParameters = movesAndEffects.movesAndEffects.  downRightFromUpWall(board, y, x);
              y = newBallParameters.y;
              x = newBallParameters.x;
              const nextStep = board[y+1][x+1];
              if(nextStep === "X" || nextStep === "Y") {
                previousY = y-1;
                previousX = x-1;
                yParams.y = y+1;
                yParams.x = x+1;
                nextCell = nextStep;
                break;
              }
            }
          } else if(previousY === y+1 && previousX === x+1) {
            let stop = false;
            while(stop === false) {
              const newBallParameters = movesAndEffects.movesAndEffects.  downLeftFromUpWall(board, y, x);
              y = newBallParameters.y;
              x = newBallParameters.x;
              const nextStep = board[y+1][x-1];
              if(nextStep === "X" || nextStep === "Y") {
                previousY = y-1;
                previousX = x+1;
                yParams.y = y+1;
                yParams.x = x-1;
                nextCell = nextStep;
                break;
              }
            }
          }
        } else if(nextCell === "X" && nextCell !== "Y") {
          if(nextCell === board[y-1][x-1] && board[y+1][x+1] === "0") {
            let stop = false;
            while(stop === false) {
              const newBallParameters = movesAndEffects.movesAndEffects.fromUpLeftCorner(board, y, x);
              y = newBallParameters.y;
              x = newBallParameters.x;
              const nextStep =  board[y+1][x+1];
              if(nextStep === "X" || nextStep === "Y") {
                previousY = y-1;
                previousX = x-1;
                yParams.y = y+1;
                yParams.x = x+1;
                nextCell = nextStep;
                break;
              }
            }
          } else if(nextCell === board[y-1][x+1] && board[y+1][x-1] === "0") {
            let stop = false;
            while(stop === false) {
              const newBallParameters = movesAndEffects.movesAndEffects.fromUpRightCorner(board, y, x);
              y = newBallParameters.y;
              x = newBallParameters.x;
              const nextStep = board[y+1][x-1];
              if(nextStep === "X" || nextStep === "Y") {
                previousY = y-1;
                previousX = x+1;
                yParams.y = y+1;
                yParams.x = x-1;
                nextCell = nextStep;
                break;
              }
            }
          } else if (nextCell === board[y+1][x-1] && board[y-1][x+1] === "0") {
            let stop = false;
            while(stop === false) {
              const newBallParameters = movesAndEffects.movesAndEffects.fromDownLeftCorner(board, y, x);
              y = newBallParameters.y;
              x = newBallParameters.x;
              const nextStep = board[y-1][x+1];
              if(nextStep === "X" || nextStep === "Y") {
                previousY = y+1;
                previousX = x-1;
                yParams.y = y-1;
                yParams.x = x+1;
                nextCell = nextStep;
                break;
              }
            }
          } else if (nextCell === board[y+1][x+1] && board[y-1][x-1] === "0") {
            let stop = false;
            while(stop === false) {
              const newBallParameters = movesAndEffects.movesAndEffects.fromDownRightCorner(board, y, x);
              y = newBallParameters.y;
              x = newBallParameters.x;
              const nextStep = board[y-1][x-1];
              if(nextStep === "X" || nextStep === "Y") {
                previousY = y+1;
                previousX = x+1;
                yParams.y = y-1;
                yParams.x = x-1;
                nextCell = nextStep;
                break;
              }
            }
          }
        } else if((previousY === y - 1 && previousX === x - 1) || (previousY === y - 1 && previousX === x+1) || (previousY === y + 1 && previousX === x-1) || (previousY === y + 1 && previousX === x+1)) {
          let stop = false;
          board[y][x] = "0"
          board[yParams.y][yParams.x] = "1";
          previousY = y;
          previousX = x;
          y = yParams.y;
          x = yParams.x;
          showBoard.boardShow.showBoard(board);
          const newBallParameters = movesAndEffects.movesAndEffects.callChosenRandom(board, y, x, previousY, previousX);
          y = newBallParameters.y;
          x = newBallParameters.x;
          previousY = newBallParameters.prevY;
          previousX = newBallParameters.prevX;
          yParams = newBallParameters.yParams
          nextCell = newBallParameters.nextStep;
        }
      moveCounter++;
      if(moveCounter === 20) {
        flag = 0;
      }
    }  
  }
}

const moveBall = new MovingBall();

module.exports = {
    moveBall: moveBall
}