class FirstNextCell {
    findCell = (board, y, x) => {
        if(board[y-1][x-1] === "X" && board[y+1][x+1] !== "X" && board[y-1][x+1] === "X") {
              return {
                  y: y-1,
                  x: x-1
              }
        } else if (board[y-1][x+1] === "X" && board[y+1][x+1] === "X" && board[y+1][x-1] !== "X") {
            return {
                  y: y-1,
                  x: x+1
            }
        } else if (board[y+1][x-1] === "X" && board[y-1][x+1] !== "X" && board[y-1][x-1] === "X") {
            return {
                y: y+1,
                x: x-1
            }
        } else if (board[y+1][x+1] === "X" && board[y-1][x+1] === "X" && board[y-1][x-1] !== "X"){
            return {
                y: y+1,
                x: x+1
            }
        }
    }
}

const firstNextCell = new FirstNextCell();

module.exports = {
    firstNextCell: firstNextCell
}