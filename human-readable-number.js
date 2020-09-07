const NUM = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five', 
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand'
}

module.exports = function toReadable (number) {
  let string = number;
  let stringNum = string.toString();
  let result = [];
  if (!number) return 'zero';

  if (stringNum.length === 3) {
    result.push(NUM[stringNum[0]]);
    result.push(NUM['100']);
    if (number % 100 !== 0) {
        number = number % 100;
        stringNum = number + '';
    }
  }

  if (number >= 20 && stringNum.length === 2) {
    result.push(NUM[stringNum[0] + '0']);
    if (number % 10 !== 0) result.push(NUM[stringNum[1]]);
  }

  if (number < 20 || stringNum.length === 1) result.push(NUM[number]);
  return result.join(' ');
}