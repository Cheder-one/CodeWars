var isValid = function(s) {
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let i = 0; i < s.length; i++) {
        if (s[i] in map) {
            stack.push(s[i]);
        } else {
            let popped = stack.pop();
            if (s[i] !== map[popped]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

isValid("[[()[]]]({}[[][]{{}})]"); // true
