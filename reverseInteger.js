/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const d = x.toString().split('').reverse().join('');
  const rangeMinus = Math.pow(-2, 31);
  const rangePlus = Math.pow(2, 31) - 1;
  const num = d.includes('-') ? -parseInt(d) : parseInt(d);

  if (rangePlus < num) return 0;
  if (num < 0 && rangeMinus > num) return 0;

  return num;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));
console.log(reverse(-2147483648));
console.log(reverse(-1563847412));
