function maxProfit(prices: number[]): number {

    let buy = prices[0];
    let sell = 0;

    let potentialMax = 0;

    // for(let i = 0; i < prices.length; i++){
    //     for(let j = i+1; j < prices.length; j++){
    //         if(prices[j] - prices[i] > potentialMax){
    //             potentialMax = prices[j] - prices[i]
    //         }
    //     }
    // }

    for(let i = 0; i < prices.length; i++){
        buy = Math.min(buy , prices[i]);
        sell = Math.max(sell, prices[i] - buy);
    }



    return sell;
};