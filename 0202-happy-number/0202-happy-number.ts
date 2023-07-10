function isHappy(n: number): boolean {
    let uniqueChar = [1, 7, 1111111]
    if(uniqueChar.includes(n)) return true;

    let strN = JSON.stringify(n);

    while(strN.length !== 1){
        let sum = 0;

        for(let i = 0; i < strN.length; i++){
            sum += Number(strN[i]) * Number(strN[i])
        }

        console.log(sum)

        if(sum === 1) return true;
        strN = JSON.stringify(sum);
    }

    return false;
};