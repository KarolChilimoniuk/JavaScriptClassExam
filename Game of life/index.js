'use strict'

class GameOfLife {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.divider = 10;
        this.width = 500;
        this.height = 500;
        this.board = [];
    }
    setBoard = () => {
       this.canvas.width = this.width;
       this.canvas.height = this.height;
       const cols = this.canvas.width / this.divider;
       const rows = this.canvas.height / this.divider;
       const board = [];
       let i =0;
       while(i < rows) {
           board.push(new Array());
           let j = 0;
           while(j < cols) {
               board[i].push(Math.floor(Math.random()*2));
               j++;
           }
           i++;
       }
       console.log(board);
       this.board = board;
       console.log(this.board);
    }
    setGrid = () => {
        this.board.forEach((row, i) => {
            row.forEach((cell, j) => {
                this.ctx.beginPath();
                this.ctx.rect(j * this.divider, i * this.divider, this.divider, this.divider );
                if(cell === 1) {
                  this.ctx.fillStyle = 'black';
                  this.ctx.fill();
                } else {
                    this.ctx.fillStyle = 'white';
                  this.ctx.fill();
                }
                //this.ctx.stroke();
            })
        })
    }
    setNewGeneration = () => {
        const nextGeneration = this.board.map(el => [...el]);
        const cols = this.canvas.width / this.divider;
        const rows = this.canvas.height / this.divider;
        let row = 0;
        while(row < this.board.length) {
            let column = 0;
            while(column < this.board[row].length) {
                const cell = this.board[row][column];
                let neighboursCounter = 0;
                let i = - 1;
                while (i < 2) {    
                    for (let j = - 1; j < 2; j++) {
                        const checkedRow = row + i;
                        const checkedCol = column + j;       
                        if (i === 0 && j === 0) {
                            continue;
                        }
                        if (checkedRow >= 0 && checkedCol >= 0 && checkedRow < rows && checkedCol < cols) {
                            const neighbour = this.board[checkedRow][checkedCol];
                            if (neighbour === 1) {
                                neighboursCounter += neighbour;
                                console.log(neighboursCounter);
                            }
                        }
                    }
                    i++;
                }
                if (neighboursCounter < 2 && cell === 1) {
                    nextGeneration[row][column] = 0;
                } else if (neighboursCounter > 3 && cell === 1) {
                    nextGeneration[row][column] = 0;
                } else if (neighboursCounter === 3 && cell === 0) {
                    nextGeneration[row][column] = 1;
                }
                column++;
            }
            row++;
        }
        console.log(nextGeneration);
        return nextGeneration;
    }
    updateGrid = async() => {
       this.board = await this.setNewGeneration(this.board);
       this.setGrid(this.board);
    }
}

const gameOfLife = new GameOfLife();
gameOfLife.setBoard();
gameOfLife.setGrid();
setInterval(() => {gameOfLife.updateGrid()}, 500);
