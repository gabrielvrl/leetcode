function maxProfit(prices: number[]): number {
    let sortedPrices = [...prices].sort((a,b) => a - b);
    let reverseSortedPrices = [...prices].sort((a,b) => b - a);

    
    if(prices.every((price, index) => price === sortedPrices[index])){
        return  prices[prices.length - 1] - prices[0];
    }
    
    if(prices.every((price, index) => price === reverseSortedPrices[index])) {
        return 0;
    }
    
    let profit = 0;
    let buy = Math.max(...prices);
    let sell = Math.min(...prices);
    
    // for(let i = 0; i < prices.length; i++){
    //     let potencialProfit = 0;

    //     for(let j = i+1; j < prices.length; j++){
    //         if(prices[i] < prices[j]){
    //             console.log(potencialProfit, ' | ', prices[j], '-', prices[i], '=', prices[j] - prices[i])
    //             potencialProfit = Math.max(potencialProfit, prices[j] - prices[i])
                
    //         } else {
    //             profit += potencialProfit
    //         }
    //     }

    // }

    
    const n = prices.length;

    for (let i = 1; i < n; i++) {
        if (prices[i] > prices[i - 1]) {
        profit += prices[i] - prices[i - 1];
        }
    }
    
    return profit
};