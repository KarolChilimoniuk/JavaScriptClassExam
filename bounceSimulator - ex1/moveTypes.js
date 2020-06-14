'use strict'

class MoveTypes {
    goUpRight = (y, x) => {
       return {
           y: y -= 1,
           x: x += 1
       }
    }
    goUpLeft = (y, x) => {
        return {
            y: y -= 1,
            x: x -= 1
        }
    }
    goDownRight = (y, x) => {
        return {
            y: y += 1,
            x: x += 1
        }
    }
    goDownLeft = (y, x) => {
        return {
            y: y += 1,
            x: x -= 1
        }
    }
}

const moveTypes = new MoveTypes();
module.exports = {
    moveTypes: moveTypes
}