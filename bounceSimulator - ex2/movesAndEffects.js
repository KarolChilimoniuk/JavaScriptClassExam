const moveTypes = require('./moveTypes');
const takeAndPutBall = require('./takeAndPutBall');
const checkNextStep = require('./nextStep');
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
    takeRandomDirection = (board, y, x, prevY, prevX) => {
        let nextStep;
        if(prevY === y - 1 && prevX === x - 1) {
            const functions = [moveTypes.moveTypes.goDownLeft, moveTypes.moveTypes.goUpRight];
            //const functions = [moveTypes.moveTypes.goDownLeft];
            const chosenFunction = functions[Math.floor(Math.random() * functions.length)];
            const newBallPosition = chosenFunction(y, x);
            nextStep = checkNextStep.nextStep.setNextStep(board, y, x, chosenFunction);
            board[y][x] = takeAndPutBall.takeAndPut.takeBall();
            y = newBallPosition.y;
            x = newBallPosition.x;
            board[y][x] = takeAndPutBall.takeAndPut.putBall();
            showBoard.boardShow.showBoard(board);
            return {
                y: y,
                x: x,
                prevY: newBallPosition.prevY,
                prevX: newBallPosition.prevX,
                nextStep: nextStep,
                chosenFunct: chosenFunction
            }
          } else if(prevY === y - 1 && prevX === x+1) {
            const functions = [moveTypes.moveTypes.goDownRight, moveTypes.moveTypes.goUpLeft]
            const chosenFunction = functions[Math.floor(Math.random() * functions.length)];
            const newBallPosition = chosenFunction(y, x);
            board[y][x] = takeAndPutBall.takeAndPut.takeBall();
            y = newBallPosition.y;
            x = newBallPosition.x;
            board[y][x] = takeAndPutBall.takeAndPut.putBall();
            nextStep = checkNextStep.nextStep.setNextStep(board, y, x, chosenFunction);
            showBoard.boardShow.showBoard(board);
            return {
                y: y,
                x: x,
                prevY: newBallPosition.prevY,
                prevX: newBallPosition.prevX,
                nextStep: nextStep,
                chosenFunct: chosenFunction
            }
          } else if(prevY === y + 1 && prevX === x-1) {
            const functions = [moveTypes.moveTypes.goDownRight, moveTypes.moveTypes.goUpLeft]
            const chosenFunction = functions[Math.floor(Math.random() * functions.length)];
            const newBallPosition = chosenFunction(y, x);
            board[y][x] = takeAndPutBall.takeAndPut.takeBall();
            y = newBallPosition.y;
            x = newBallPosition.x;
            board[y][x] = takeAndPutBall.takeAndPut.putBall();
            nextStep = checkNextStep.nextStep.setNextStep(board, y, x, chosenFunction);
            showBoard.boardShow.showBoard(board);
            return {
                y: y,
                x: x,
                prevY: newBallPosition.prevY,
                prevX: newBallPosition.prevX,
                nextStep: nextStep,
                chosenFunct: chosenFunction
            }
          } else if(prevY === y + 1 && prevX === x+1) {
            const functions = [moveTypes.moveTypes.goDownLeft, moveTypes.moveTypes.goUpRight]
            const chosenFunction = functions[Math.floor(Math.random() * functions.length)];
            const newBallPosition = chosenFunction(y, x);
            board[y][x] = takeAndPutBall.takeAndPut.takeBall();
            y = newBallPosition.y;
            x = newBallPosition.x;
            board[y][x] = takeAndPutBall.takeAndPut.putBall();
            nextStep = checkNextStep.nextStep.setNextStep(board, y, x, chosenFunction);
            showBoard.boardShow.showBoard(board);
            return {
            y: y,
            x: x,
            prevY: newBallPosition.prevY,
            prevX: newBallPosition.prevX,
            nextStep: nextStep,
            chosenFunct: chosenFunction
            }
          }
    }      
  callChosenRandom = (board, y, x, prevY, prevX) => {
      let stop = false;
      const nextBallMove = this.takeRandomDirection(board, y, x, prevY, prevX); 
      let nextStep = nextBallMove.nextStep;
      let yParams = {};
      y = nextBallMove.y;
      x = nextBallMove.x;
      prevY = nextBallMove.prevY;
      prevX = nextBallMove.prevX;
      while(stop !== true) {
        if(nextStep === "X" || nextStep === "Y") {
          stop = true;
          break;
        }
        const ballMove = nextBallMove.chosenFunct(y, x);
        if(prevY === y - 1 && prevX === x-1) {
          nextStep = board[y+1][x+1];
          if(nextStep === "X" || nextStep === "Y") {
            if(nextStep === "Y") {
              yParams.y = y+1;
              yParams.x = x+1;
            }
            stop = true;
            break;
          }
          board[y][x] = takeAndPutBall.takeAndPut.takeBall();
          y = ballMove.y;
          x = ballMove.x;
          board[y][x] = takeAndPutBall.takeAndPut.putBall();
          prevY = y - 1;
          prevX = x - 1;
        } else if(prevY === y - 1 && prevX === x+1) {
          nextStep = board[y-1][x-1];
          if(nextStep === "X" || nextStep === "Y") {
            if(nextStep === "Y") {
              yParams.y = y-1;
              yParams.x = x-1;
            }
            stop = true;
            break
          }
          board[y][x] = takeAndPutBall.takeAndPut.takeBall();
          y = ballMove.y;
          x = ballMove.x;
          board[y][x] = takeAndPutBall.takeAndPut.putBall();
          prevY = y - 1;
          prevX = x + 1;
        } else if(prevY === y + 1 && prevX === x-1) {
          nextStep = board[y-1][x+1];
          if(nextStep === "X" || nextStep === "Y") {
            if(nextStep === "Y") {
              yParams.y = y-1;
              yParams.x = x+1;
            }
            stop = true;
            break;
          }
          board[y][x] = takeAndPutBall.takeAndPut.takeBall();
          y = ballMove.y;
          x = ballMove.x;
          board[y][x] = takeAndPutBall.takeAndPut.putBall();
          prevY = y + 1;
          prevX = x - 1;
        } else if(prevY === y + 1 && prevX === x+1) {
          nextStep = board[y-1][x-1];
          if(nextStep === "X" || nextStep === "Y") {
            if(nextStep === "Y") {
              yParams.y = y-1;
              yParams.x = x-1;
            }
            stop = true;
            break;
          }
          board[y][x] = takeAndPutBall.takeAndPut.takeBall();
          y = ballMove.y;
          x = ballMove.x;
          board[y][x] = takeAndPutBall.takeAndPut.putBall();
          prevY = y + 1;
          prevX = x + 1;
        }
        showBoard.boardShow.showBoard(board);
      }
    return {
      y: y,
      x: x,
      prevY: prevY,
      prevX: prevX,
      yParams: yParams,
      nextStep: nextStep
    }
  }
}

const movesAndEffects = new MovesAndEffects();
module.exports = {
    movesAndEffects: movesAndEffects
}