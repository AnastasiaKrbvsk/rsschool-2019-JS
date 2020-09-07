module.exports = function reverse (n) {
    n = Math.abs(n);
  return n.toString().split('').reverse().join('');
}