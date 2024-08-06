module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketsMap = {};
  let openBrackets = new Set();
  let closeBrackets = new Set();

  bracketsConfig.forEach((pair) => {
    bracketsMap[pair[1]] = pair[0];
    openBrackets.add(pair[0]);
    closeBrackets.add(pair[1]);
  });

  for (let char of str) {
    if (openBrackets.has(char)) {
      if (closeBrackets.has(char) && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (closeBrackets.has(char)) {
      if (stack.length === 0 || stack.pop() !== bracketsMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
