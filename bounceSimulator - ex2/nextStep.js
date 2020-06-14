class NextStep {
    setNextStep = (board, y, x, moveType) => {
        if (moveType.name === "goDownLeft") {
            return board[y+1][x-1];
        } else if (moveType.name === "goUpRight") {
            return board[y-1][x+1];
        } else if (moveType.name === "goDownRight") {
            return board[y+1][x+1];
        } else if(moveType.name === "goUpLeft") { 
            return board[y-1][x-1];
        }
    }
}

const nextStep = new NextStep();

module.exports = {
    nextStep: nextStep
}