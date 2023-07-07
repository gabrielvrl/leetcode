function getSum(a: number, b: number): number {
    while (b !== 0) {
        const carry = a & b;
        a ^= b;
        b = carry << 1;
        if (b === 0 && carry === 0) break;
    }
    return a;    
};