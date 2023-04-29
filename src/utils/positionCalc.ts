function positionCalculator(
    adwaNum: number,
    userNum: number,

  ): number {
    const guessNumber = adwaNum.toString();
    let position = 0;
  
    for (let i = 0; i < guessNumber.length; i++) {
    if (userNum.toString()[i] === guessNumber[i]) {
        console.log(`position: ${userNum} - ${guessNumber[i]}`);
        position++;
    }
    
    } 
    console.log(
      `${adwaNum} - ${userNum} - ${position} `
    );
    return position;
  }
  
  export default positionCalculator;
  