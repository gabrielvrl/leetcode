function fizzBuzz(n: number): string[] {
    let results: string[] = [];
    
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            results.push('FizzBuzz')
        } else if(i % 3 === 0 ){
            results.push('Fizz')
        } else if(i % 5 === 0 ){
            results.push('Buzz')
        } else {
            results.push(JSON.stringify(i))
        }
    }
    
    return results
    
};