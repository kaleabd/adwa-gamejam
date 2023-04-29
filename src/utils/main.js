function toGeezNumber(number){
    let strOfGeezNums = `፩ 1 ኣሓዱ
    ፪ 2 ክልኤቱ
    ፫ 3 ሠለስቱ
    ፬ 4 ኣርባዕቱ
    ፭ 5 ሓምስቱ
    ፮ 6 ስድስቱ
    ፯ 7 ሰብዓቱ
    ፰ 8 ሰመንቱ
    ፱ 9 ተስዓቱ
    ፲ 10 ዓሠርቱ
    ፳ 20 ዕሥራ
    ፴ 30 ሠላሳ
    ፵ 40 ኣርባዓ
    ፶ 50 ሓምሳ
    ፷ 60 ስሳ
    ፸ 70 ሰብዓ
    ፹ 80 ሰማንያ
    ፺ 90 ተስዓ
    ፻ 100 ምእት
    ፼ 10000 እልፍ
    ፻፼ 1000000 ምእት_እልፍ`

    //partitioning the numbers as object
    strOfGeezNums = strOfGeezNums.split('\n')
    strOfGeezNums = strOfGeezNums.map(e=>{
        let trim_and_split = e.trim().split(' ')
        trim_and_split[1] = trim_and_split[1].replace(',','')
        trim_and_split[1] = parseInt(trim_and_split[1])
        return trim_and_split
    })

    let objOfGeezNums = {}
    for(let geezNum of strOfGeezNums){
        let geezNumArr = geezNum
        objOfGeezNums[geezNumArr[1]] = {
            amhNum : geezNumArr[0],
            name: geezNum[2]
        }
    }

    // console.log(objOfGeezNums)
    //logic
    let result = {}

    let given = `${number}`
    
    let geezNumName = []

    //first we will check if the number is in the default geez numbers
    let keys = Object.keys(objOfGeezNums)
    if(keys.includes(given)){

        result['number'] = objOfGeezNums[given].amhNum
        result['name'] = objOfGeezNums[given].name

        // return objOfGeezNums[given].amhNum
        return result
    }

    //pulling out the written formatt
    let tenth = 1
    let times = []

    for(let i in given){
        if(i!=0 && i%4==0)tenth = 10000

        if(tenth >= 100){
            times.push(tenth)
            tenth = 1
        }

        times.push(tenth)
        tenth*=10
    }
    times.reverse()

    // console.log(times)
    // console.log(objOfGeezNums)
    
    let numbersGiven = []
    for(let i of given){
        numbersGiven.push(parseInt(i))
    }

    // console.log(numbersGiven)

    let geezFormat = []
    let count = 0

    for(let i of times){

        let calculation = i*numbersGiven[count]

        if(i == 100 || i ==10000){
            geezFormat.push(i)
            continue
        }

        geezFormat.push(calculation)
        count++
    }
    //here if the number is greater than or equals to 100 and less than 200 
    //it removes the first number in array
    
    if(number < 200 && number >= 100){
        if(geezFormat[0] == 1)geezFormat.shift()
    }

    // console.log(geezFormat)

    let geezNum = []

    for(let i of geezFormat){

        if(i == 0)continue

        geezNum.push(objOfGeezNums[`${i}`].amhNum)
        geezNumName.push(objOfGeezNums[`${i}`].name)
    }
    if(geezNumName.length>1 && number%10 != 0)geezNumName[geezNumName.length-1] = `ወ${geezNumName[geezNumName.length-1]}`
    
    geezNumName = geezNumName.join(' ')
    geezNum = geezNum.join('')
    
    result['number'] = geezNum
    result['name'] = geezNumName

    // return geezNum
    return result

}

// const num = toGeezNumber(2016)
// console.log(num)
export default toGeezNumber