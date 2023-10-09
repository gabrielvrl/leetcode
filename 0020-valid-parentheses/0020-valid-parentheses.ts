function isValid(s: string): boolean {
    const stack = [];
    
    const bracketPairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    
     for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        console.log(bracketPairs[char])
         
        if (bracketPairs[char]) {
            stack.push(char);
        } else {
            if (!stack.length || bracketPairs[stack.pop()] !== char) {
                return false; // Invalid
            }
        }
    }
    
   
    return !stack.length;
};