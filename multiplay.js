module.exports = function multiply(first, second) {
    let first_rev = first.split('').reverse();
    let second_rev = second.split('').reverse();
    let array = [];
   
    for (let i = 0; i < first_rev.length; i++) {
       for (let j = 0; j < second_rev.length; j++) {
           let multiply = first_rev[i] * second_rev[j];
           if (array[i + j]) {
               array[i + j] += multiply;
           } else {
               array[i + j] = multiply;
           }
       }
    }
   
    for (let i = 0; i < array.length; i++) {
       let number_add = array[i] % 10;
       let adding = Math.floor(array[i] / 10);
       array[i] = number_add;
   
       if (array[i + 1]) {
           array[i + 1] += adding;
       } else if (adding != 0) {
           array[i + 1] = adding;
       }
    }
    let result = array.reverse().join('');
    return result;
   }
   