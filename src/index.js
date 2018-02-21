module.exports = function check(str, bracketsConfig) {
    const stack = [];
    for (const br of str) {
        const pair = bracketsConfig.find(b => b.includes(br));
            br === pair[1] && pair[0] === stack[stack.length - 1] ? stack.pop() : stack.push(br);
    }
    return !stack.length;
    //OLOLO PERL STYLE
    // return str.split('').reduce((accum,br) =>  ((br === bracketsConfig.find(b => b.includes(br))[1] && bracketsConfig.find(b => b.includes(br))[0] === accum[accum.length - 1] ? accum.pop() :  accum.push(br)),true) && accum,[]).length;
}



