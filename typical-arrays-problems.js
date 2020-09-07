exports.min = function min (array) {
    if (Array.isArray(array) && array.length > 0) return Math.min(...array);
    return 0;
  }
  
  exports.max = function max (array) {
    if (Array.isArray(array) && array.length > 0) return Math.max(...array);
    return 0;
  }
  
  exports.avg = function avg (array) {
    let sum = 0;
    if (Array.isArray(array) && array.length > 0) {
      for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
      return sum / array.length;
    }
    return 0;
  }