module.exports = function zeros(expression) {

    let array = expression.split('*');
    let two = 0;
    let five = 0;
  
    function check(tmp) {
      while (tmp % 5 == 0) {
        tmp /= 5;
        five++;
      }
      while (tmp % 2 == 0) {
        tmp /=2;
        two++;
      }
    }
    for (let i = 0; i < array.length; i++) {
      if ( array[i][array[i].length-1] == '!' && array[i][array[i].length-2] == '!') {
        // double_factorial.push(array[i].replays('!!', ''));
        let  double_factorial = +array[i].substring(0, array[i].length-2);
        for ( let j =  double_factorial; j > 0; j = j - 2) {
          let tmp = j;
          check(tmp);
        }
      } else if (array[i][array[i].length-1] == '!') {
        let factorial = +array[i].substring(0, array[i].length-1);
        // let factorial;
        // factorial.push(array[i].replays('!', ''));
        for ( let j = factorial; j > 0; j--) {
          let tmp = j;
          check(tmp);
          }
        }
      } 
    return Math.min(two, five);
  }