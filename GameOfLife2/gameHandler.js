class GameHandler {
    setBoard = (game) => {
        const rows = game.height/game.divider;
        const columns = game.width/game.divider;
        let board = [];
        let i = 0;
        while(i < rows) {
            board.push(new Array());
            let j = 0;
            while(j < columns) {
                board[i].push(Math.floor(Math.random()*2));
                j++;
            }
            i++;
        }
        return board;
    }
    renderColony = (game) => {
        game.board.forEach((row, i) => {
            row.forEach((cell, j) => {
                game.ctx.beginPath();
                game.ctx.rect(j * game.divider, i * game.divider, game.divider, game.divider );
                if(cell === 1) {
                    game.ctx.fillStyle = 'black'
                    game.ctx.fill();
                } else {
                    game.ctx.fillStyle = 'white';
                    game.ctx.fill();
                }
                game.ctx.stroke();
            });
        });
    }
    setNextGeneration = (board, width, height,divider) => {
        const nextGeneration = board.map(row => Array.from(row));
        const rows = height/divider;
        const columns = width/divider;
        board.forEach((row, i) => {
            row.forEach((column, j) => {
                const currentCell = board[i][j];
                let neighboursCounter = 0;
                    for(let k = -1; k < 2; k++) {
                        const checkedRow = i + k;
                        for(let l = -1; l < 2; l++) {
                           if(k === 0 && l === 0) {
                               continue;
                           }
                           const checkedColumn = j + l;
                           if(checkedRow >= 0 && checkedColumn >= 0 && checkedRow < rows && checkedColumn < columns) {
                            const neighbourCell = board[checkedRow][checkedColumn];
                            if(neighbourCell === 1) {
                                neighboursCounter += 1;
                              }
                           }
                        }
                    }
                if (neighboursCounter < 2 && currentCell=== 1) {
                    nextGeneration[i][j] = 0;
                } else if (neighboursCounter > 3 && currentCell === 1) {
                    nextGeneration[i][j] = 0;
                } else if (neighboursCounter === 3 && currentCell === 0) {
                    nextGeneration[i][j] = 1;
                }
            });
        });
        console.log(nextGeneration);
        return nextGeneration;
    }
    updateColony = async (game) => {
        this.setNextGeneration(game.board);
        game.board = await this.setBoard(game);
        this.renderColony(game);
    }
}

export const gameHandler = new GameHandler();