var isPalindrome = function (x) {
  return (
    JSON.stringify(x) ===
    JSON.stringify(parseInt(x.toString().split('').reverse().join('')))
  );
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
