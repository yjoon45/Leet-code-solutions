/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanWords = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let d = 0;
  s.split('').forEach((e) => (d = d + romanWords[e]));
  if (s.includes('IV') || s.includes('IX')) d = d - 2;
  if (s.includes('XL') || s.includes('XC')) d = d - 20;
  if (s.includes('CD') || s.includes('CM')) d = d - 200;
  return d;
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
