class ShowBoard {
    showBoard = (board) => {
       console.log(`
        ${board[0]},
        ${board[1]},
        ${board[2]},
        ${board[3]},
        ${board[4]},
        ${board[5]},
        ${board[6]},
        ${board[7]},
        ${board[8]},
        ${board[9]},
        ${board[10]},
        ${board[11]},
        ${board[12]},
        ${board[13]},
        ${board[14]},
        ${board[15]}`
       );
    }
}

const boardShow = new ShowBoard();
module.exports = {
    boardShow: boardShow
}