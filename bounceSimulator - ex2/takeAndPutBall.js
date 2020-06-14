class TakeAndPutBall {
   takeBall = () => {
     let emptyCellValue = "0";
     return emptyCellValue;
   }

   putBall = () => {
     let filledCellValue = "1";
     return filledCellValue;
   }
}

const takeAndPutBall = new TakeAndPutBall()
module.exports = {
    takeAndPut: takeAndPutBall
}