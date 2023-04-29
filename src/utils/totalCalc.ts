function totalCalculator(
    adwaNum: number,
    userNum: number,
): number {
    const guessNumber = adwaNum.toString();
    let total = 0;

    for(let i=0; i < guessNumber.length; i++){
        for(let j= 0; j < guessNumber.length; j++){
          if(userNum.toString()[i] === guessNumber[j]){
            console.log(`${userNum} - ${guessNumber[j]}`)
            total ++
          }
          
        }}
        return total
}

export default totalCalculator;