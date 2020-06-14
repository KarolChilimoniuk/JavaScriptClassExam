'use strict'

import {gameHandler} from './gameHandler.js';

const setGameOfLife = (function() {
    let instance;
    class GameOfLife {
        constructor() {
            this.canvas = document.querySelector('.canvasElement');
            this.ctx = this.canvas.getContext('2d');
            this.width = 500;
            this.height = 500;
            this.divider = 10;
            this.board = [];
        }
    }
    return {
        setInstance: () => {
            if(!instance) {
                instance = new GameOfLife();
            }
            return instance;
        }
    }
} ());

const gameOfLife = setGameOfLife.setInstance();
gameOfLife.canvas.width = gameOfLife.width;
gameOfLife.canvas.height = gameOfLife.height;
gameOfLife.board = gameHandler.setBoard(gameOfLife);
gameHandler.renderColony(gameOfLife);
gameOfLife.board = gameHandler.setNextGeneration(gameOfLife.board, gameOfLife.height, gameOfLife.width, gameOfLife.divider);
setInterval(() => {gameHandler.updateColony(gameOfLife)}, 1000);
