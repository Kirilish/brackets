module.exports = function check(str, bracketsConfig) {
   const stack = [];
  const openingBrackets = new Set(bracketsConfig.map(pair => pair[0]));
  const closingBrackets = new Set(bracketsConfig.map(pair => pair[1]));
  const matchingBrackets = {};
  for (const pair of bracketsConfig) {
    matchingBrackets[pair[1]] = pair[0];
  }
  for (const char of str) {
    if (openingBrackets.has(char)) {
      stack.push(char);
    } else if (closingBrackets.has(char)) {
      const matching = matchingBrackets[char];
      if (stack.length === 0 || stack[stack.length - 1] !== matching) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}
