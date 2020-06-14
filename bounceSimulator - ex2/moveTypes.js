class MoveTypes {
    goUpRight = (y, x) => {
       return {
           prevY: y,
           prevX: x,
           y: y -= 1,
           x: x += 1
       }
    }
    goUpLeft = (y, x) => {
        return {
            prevY: y,
            prevX: x,
            y: y -= 1,
            x: x -= 1
        }
    }
    goDownRight = (y, x) => {
        return {
            prevY: y,
            prevX: x,
            y: y += 1,
            x: x += 1,
        }
    }
    goDownLeft = (y, x) => {
        return {
            prevY: y,
            prevX: x,
            y: y += 1,
            x: x -= 1
        }
    }
}

const moveTypes = new MoveTypes();
module.exports = {
    moveTypes: moveTypes
}